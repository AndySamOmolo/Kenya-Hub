import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../src/theme";
import {
  getCurrentUser,
  sendPasswordRecovery,
  signInWithEmail,
  signOutMobile,
  signUpWithEmail,
  type MobileAuthUser,
} from "../src/lib/appwrite-auth";

export default function AccountScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const [user, setUser] = useState<MobileAuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const loadUser = useCallback(async () => {
    setLoading(true);
    try {
      const current = await getCurrentUser();
      setUser(current);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadUser();
  }, [loadUser]);

  const handleEmailSubmit = useCallback(async () => {
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Enter a valid email address.");
      return;
    }

    if (mode === "forgot") {
      setSubmitting(true);
      try {
        await sendPasswordRecovery(email);
        setSuccessMsg("Password reset link sent! Check your email inbox.");
      } catch (err) {
        setErrorMsg(err instanceof Error ? err.message : "Could not send password reset email.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters.");
      return;
    }
    if (mode === "signup") {
      if (name.trim().length < 2) {
        setErrorMsg("Please enter your full name.");
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg("Passwords do not match.");
        return;
      }
    }

    setSubmitting(true);
    try {
      const loggedIn =
        mode === "signin"
          ? await signInWithEmail(email, password)
          : await signUpWithEmail(name, email, password);
      setUser(loggedIn);
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Authentication failed.");
    } finally {
      setSubmitting(false);
    }
  }, [confirmPassword, email, mode, name, password]);

  const handleSignOut = useCallback(async () => {
    setSubmitting(true);
    try {
      await signOutMobile();
      setUser(null);
    } finally {
      setSubmitting(false);
    }
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.bgPrimary }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Stack.Screen
        options={{
          title: "Account",
          headerStyle: { backgroundColor: theme.bgCard },
          headerTintColor: theme.textPrimary,
        }}
      />
      <ScrollView
        contentContainerStyle={{ padding: 20, paddingBottom: 48 }}
        keyboardShouldPersistTaps="handled"
      >
        {loading ? (
          <View style={{ paddingVertical: 64, alignItems: "center" }}>
            <ActivityIndicator size="large" color={theme.gold} />
            <Text style={{ color: theme.textSecondary, marginTop: 12, fontSize: 14 }}>
              Checking your KenyaHub account...
            </Text>
          </View>
        ) : user ? (
          <View
            style={{
              backgroundColor: theme.bgCard,
              borderColor: theme.border,
              borderWidth: 1,
              borderRadius: 18,
              padding: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <View
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  backgroundColor: `${theme.gold}22`,
                  borderColor: `${theme.gold}66`,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: theme.gold, fontSize: 18, fontWeight: "800" }}>
                  {(user.name || user.email || "KH").slice(0, 2).toUpperCase()}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: theme.textPrimary, fontSize: 18, fontWeight: "800" }}>
                  {user.name || "KenyaHub Member"}
                </Text>
                <Text style={{ color: theme.textSecondary, fontSize: 13, marginTop: 2 }}>
                  {user.email}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => router.replace("/(tabs)/learn")}
              style={{
                backgroundColor: theme.bgElevated,
                borderColor: theme.border,
                borderWidth: 1,
                borderRadius: 12,
                padding: 14,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 14,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Ionicons name="book-outline" size={18} color={theme.gold} />
                <Text style={{ color: theme.textPrimary, fontWeight: "700", fontSize: 14 }}>
                  Continue Language Learning
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={theme.textMuted} />
            </Pressable>

            <Pressable
              onPress={handleSignOut}
              disabled={submitting}
              style={{
                backgroundColor: "#ef444418",
                borderColor: "#ef444444",
                borderWidth: 1,
                borderRadius: 12,
                paddingVertical: 13,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <Ionicons name="log-out-outline" size={18} color="#ef4444" />
              <Text style={{ color: "#ef4444", fontWeight: "700", fontSize: 14 }}>
                {submitting ? "Signing out..." : "Sign Out"}
              </Text>
            </Pressable>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: theme.bgCard,
              borderColor: theme.border,
              borderWidth: 1,
              borderRadius: 18,
              padding: 20,
            }}
          >
            <Text style={{ color: theme.textPrimary, fontSize: 22, fontWeight: "800", textAlign: "center" }}>
              {mode === "signin"
                ? "Sign in to KenyaHub"
                : mode === "signup"
                ? "Create KenyaHub Account"
                : "Reset Password"}
            </Text>
            <Text style={{ color: theme.textSecondary, fontSize: 13, textAlign: "center", marginTop: 6, marginBottom: 18 }}>
              {mode === "forgot"
                ? "Enter your email and we'll send you a reset link."
                : "Sign in or create an account with your email and password."}
            </Text>

            {errorMsg ? (
              <View
                style={{
                  backgroundColor: "#ef444418",
                  borderColor: "#ef444444",
                  borderWidth: 1,
                  borderRadius: 12,
                  padding: 12,
                  marginBottom: 14,
                }}
              >
                <Text style={{ color: "#ef4444", fontSize: 12 }}>{errorMsg}</Text>
              </View>
            ) : null}

            {successMsg ? (
              <View
                style={{
                  backgroundColor: "#10b98118",
                  borderColor: "#10b98144",
                  borderWidth: 1,
                  borderRadius: 12,
                  padding: 12,
                  marginBottom: 14,
                }}
              >
                <Text style={{ color: "#10b981", fontSize: 12 }}>{successMsg}</Text>
              </View>
            ) : null}

            {mode !== "forgot" && (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: theme.bgElevated,
                    borderColor: theme.border,
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: 4,
                    marginBottom: 16,
                  }}
                >
                  {(["signin", "signup"] as const).map((tab) => {
                    const active = mode === tab;
                    return (
                      <Pressable
                        key={tab}
                        onPress={() => { setMode(tab); setErrorMsg(null); setSuccessMsg(null); }}
                        style={{
                          flex: 1,
                          paddingVertical: 9,
                          borderRadius: 9,
                          backgroundColor: active ? theme.gold : "transparent",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: active ? "#000000" : theme.textSecondary, fontWeight: "700", fontSize: 12 }}>
                          {tab === "signin" ? "Sign In" : "Create Account"}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              </>
            )}

            {mode === "signup" && (
              <View style={{ marginBottom: 12 }}>
                <Text style={{ color: theme.textSecondary, fontSize: 12, fontWeight: "600", marginBottom: 6 }}>
                  Full Name
                </Text>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Wanjiku Kamau"
                  placeholderTextColor={theme.textMuted}
                  style={{
                    backgroundColor: theme.bgElevated,
                    borderColor: theme.border,
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingHorizontal: 14,
                    paddingVertical: 11,
                    color: theme.textPrimary,
                    fontSize: 14,
                  }}
                />
              </View>
            )}

            <View style={{ marginBottom: 12 }}>
              <Text style={{ color: theme.textSecondary, fontSize: 12, fontWeight: "600", marginBottom: 6 }}>
                Email Address
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="you@example.com"
                placeholderTextColor={theme.textMuted}
                style={{
                  backgroundColor: theme.bgElevated,
                  borderColor: theme.border,
                  borderWidth: 1,
                  borderRadius: 12,
                  paddingHorizontal: 14,
                  paddingVertical: 11,
                  color: theme.textPrimary,
                  fontSize: 14,
                }}
              />
            </View>

            {mode !== "forgot" && (
              <View style={{ marginBottom: 12 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <Text style={{ color: theme.textSecondary, fontSize: 12, fontWeight: "600" }}>
                    Password
                  </Text>
                  {mode === "signin" && (
                    <Pressable onPress={() => { setMode("forgot"); setErrorMsg(null); setSuccessMsg(null); }}>
                      <Text style={{ color: theme.gold, fontSize: 12, fontWeight: "600" }}>Forgot password?</Text>
                    </Pressable>
                  )}
                </View>
                <View style={{ position: "relative" }}>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    placeholder="At least 8 characters"
                    placeholderTextColor={theme.textMuted}
                    style={{
                      backgroundColor: theme.bgElevated,
                      borderColor: theme.border,
                      borderWidth: 1,
                      borderRadius: 12,
                      paddingHorizontal: 14,
                      paddingRight: 44,
                      paddingVertical: 11,
                      color: theme.textPrimary,
                      fontSize: 14,
                    }}
                  />
                  <Pressable
                    onPress={() => setShowPassword((v) => !v)}
                    style={{ position: "absolute", right: 12, top: 11, padding: 2 }}
                  >
                    <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color={theme.textMuted} />
                  </Pressable>
                </View>
              </View>
            )}

            {mode === "signup" && (
              <View style={{ marginBottom: 18 }}>
                <Text style={{ color: theme.textSecondary, fontSize: 12, fontWeight: "600", marginBottom: 6 }}>
                  Confirm Password
                </Text>
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showPassword}
                  placeholder="Re-enter password"
                  placeholderTextColor={theme.textMuted}
                  style={{
                    backgroundColor: theme.bgElevated,
                    borderColor: theme.border,
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingHorizontal: 14,
                    paddingVertical: 11,
                    color: theme.textPrimary,
                    fontSize: 14,
                  }}
                />
              </View>
            )}

            <Pressable
              onPress={handleEmailSubmit}
              disabled={submitting}
              style={{
                backgroundColor: theme.gold,
                borderRadius: 12,
                paddingVertical: 13,
                alignItems: "center",
                opacity: submitting ? 0.6 : 1,
                marginTop: mode === "signup" ? 0 : 6,
              }}
            >
              <Text style={{ color: "#000000", fontWeight: "800", fontSize: 14 }}>
                {submitting
                  ? "Please wait..."
                  : mode === "signin"
                  ? "Sign In"
                  : mode === "signup"
                  ? "Create Account"
                  : "Send Reset Link"}
              </Text>
            </Pressable>

            {mode === "forgot" && (
              <Pressable
                onPress={() => { setMode("signin"); setErrorMsg(null); setSuccessMsg(null); }}
                style={{ paddingVertical: 12, alignItems: "center", marginTop: 4 }}
              >
                <Text style={{ color: theme.textSecondary, fontSize: 12, fontWeight: "600" }}>
                  ← Back to Sign In
                </Text>
              </Pressable>
            )}
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
