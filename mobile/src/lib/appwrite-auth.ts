import AsyncStorage from "@react-native-async-storage/async-storage";

const APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = "6a3290500003e21b7fe1";
const SESSION_STORAGE_KEY = "kh-appwrite-session-secret";
const FALLBACK_COOKIE_KEY = "kh-appwrite-fallback-cookies";
const USER_CACHE_KEY = "kh-appwrite-user-cache";

export interface MobileAuthUser {
  $id: string;
  name: string;
  email: string;
  emailVerification?: boolean;
}

interface StoredAuthCredentials {
  sessionSecret: string | null;
  fallbackCookies: string | null;
}

async function getStoredCredentials(): Promise<StoredAuthCredentials> {
  try {
    const [sessionSecret, fallbackCookies] = await Promise.all([
      AsyncStorage.getItem(SESSION_STORAGE_KEY),
      AsyncStorage.getItem(FALLBACK_COOKIE_KEY),
    ]);
    return { sessionSecret, fallbackCookies };
  } catch {
    return { sessionSecret: null, fallbackCookies: null };
  }
}

async function storeCredentials(creds: { sessionSecret?: string | null; fallbackCookies?: string | null } | null): Promise<void> {
  try {
    if (!creds) {
      await AsyncStorage.multiRemove([SESSION_STORAGE_KEY, FALLBACK_COOKIE_KEY, USER_CACHE_KEY]);
      return;
    }
    if (creds.sessionSecret) {
      await AsyncStorage.setItem(SESSION_STORAGE_KEY, creds.sessionSecret);
    }
    if (creds.fallbackCookies) {
      await AsyncStorage.setItem(FALLBACK_COOKIE_KEY, creds.fallbackCookies);
    }
  } catch {
    // Ignore storage errors
  }
}

function formatMobileAuthError(data: Record<string, unknown>, status: number): string {
  const type = typeof data.type === "string" ? data.type : "";
  const msg = typeof data.message === "string" ? data.message : "";
  if (type === "user_already_exists" || /already exists/i.test(msg)) {
    return "An account with this email already exists. Try signing in or resetting your password.";
  }
  if (type === "user_invalid_credentials" || /invalid credentials/i.test(msg)) {
    return "Incorrect email or password. Double-check your details or tap Forgot Password.";
  }
  if (type === "general_rate_limit_exceeded" || status === 429) {
    return "Too many attempts. Please wait a minute and try again.";
  }
  if (/paused|unavailable/i.test(msg) || status >= 500) {
    return "Account service is temporarily unavailable. Please try again shortly.";
  }
  return msg || `Request failed (HTTP ${status})`;
}

async function appwriteRequest<T>(
  path: string,
  options: { method?: string; body?: Record<string, unknown>; useStoredAuth?: boolean } = {}
): Promise<{ data: T; headers: Headers }> {
  const useAuth = options.useStoredAuth !== false;
  const creds = useAuth ? await getStoredCredentials() : { sessionSecret: null, fallbackCookies: null };
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "X-Appwrite-Project": APPWRITE_PROJECT_ID,
    "X-Appwrite-Response-Format": "1.6.0",
  };
  if (creds.sessionSecret) {
    headers["X-Appwrite-Session"] = creds.sessionSecret;
  } else if (creds.fallbackCookies) {
    headers["X-Fallback-Cookies"] = creds.fallbackCookies;
  }

  let res: Response;
  try {
    res = await fetch(`${APPWRITE_ENDPOINT}${path}`, {
      method: options.method || "GET",
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
      credentials: "include",
    });
  } catch {
    throw new Error("Could not reach KenyaHub account server. Check your internet connection.");
  }

  if (res.status === 204) {
    return { data: {} as T, headers: res.headers };
  }

  let data: Record<string, unknown> = {};
  try {
    data = (await res.json()) as Record<string, unknown>;
  } catch {
    // non-JSON response
  }

  if (!res.ok) {
    throw new Error(formatMobileAuthError(data, res.status));
  }

  return { data: data as T, headers: res.headers };
}

export async function getCachedUser(): Promise<MobileAuthUser | null> {
  try {
    const raw = await AsyncStorage.getItem(USER_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed) &&
      typeof parsed.$id === "string" &&
      typeof parsed.email === "string"
    ) {
      return parsed as MobileAuthUser;
    }
  } catch {
    // Ignore
  }
  return null;
}

export async function getCurrentUser(): Promise<MobileAuthUser | null> {
  const creds = await getStoredCredentials();
  if (!creds.sessionSecret && !creds.fallbackCookies) return null;
  try {
    const { data: user } = await appwriteRequest<MobileAuthUser>("/account");
    if (user && user.$id && user.email) {
      try {
        await AsyncStorage.setItem(USER_CACHE_KEY, JSON.stringify(user));
      } catch {
        // Ignore
      }
      return user;
    }
    return null;
  } catch {
    return await getCachedUser();
  }
}

export async function signInWithEmail(email: string, password: string): Promise<MobileAuthUser> {
  const { data: session, headers } = await appwriteRequest<{ secret?: string; $id?: string }>(
    "/account/sessions/email",
    {
      method: "POST",
      body: { email: email.trim().toLowerCase(), password },
      useStoredAuth: false,
    }
  );

  const fallbackCookies = headers.get("x-fallback-cookies");
  const sessionSecret = typeof session.secret === "string" && session.secret ? session.secret : null;

  await storeCredentials({ sessionSecret, fallbackCookies });

  const { data: user } = await appwriteRequest<MobileAuthUser>("/account");
  try {
    await AsyncStorage.setItem(USER_CACHE_KEY, JSON.stringify(user));
  } catch {
    // Ignore
  }
  return user;
}

export async function signUpWithEmail(name: string, email: string, password: string): Promise<MobileAuthUser> {
  const uniqueId = `kh_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
  const cleanEmail = email.trim().toLowerCase();
  await appwriteRequest("/account", {
    method: "POST",
    body: {
      userId: uniqueId,
      email: cleanEmail,
      password,
      name: name.trim(),
    },
    useStoredAuth: false,
  });
  return signInWithEmail(cleanEmail, password);
}

export async function sendPasswordRecovery(email: string): Promise<void> {
  await appwriteRequest("/account/recovery", {
    method: "POST",
    body: {
      email: email.trim().toLowerCase(),
      url: "https://kenyahub.me/account/",
    },
    useStoredAuth: false,
  });
}

export async function signOutMobile(): Promise<void> {
  try {
    await appwriteRequest("/account/sessions/current", { method: "DELETE" });
  } catch {
    // Ignore network/expired errors
  }
  await storeCredentials(null);
}
