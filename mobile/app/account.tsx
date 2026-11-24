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
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useTheme,
  KenyaStripe,
  AndroidTopAppBar,
  getThemedCardStyle,
  triggerHaptic,
} from "../src/theme";
import { ThemedIcon, ThemedIconBadge } from "../src/components/ThemedIcon";
import {
  getCurrentUser,
  sendPasswordRecovery,
  signInWithEmail,
  signOutMobile,
  signUpWithEmail,
  syncMobileUserData,
  type MobileAuthUser,
  type MobileCloudSyncSummary,
} from "../src/lib/appwrite-auth";

export default function AccountScreen() {
  const { theme, themeConfig, themeMetrics, updateThemeConfig } = useTheme();
  const router = useRouter();
  const [user, setUser] = useState<MobileAuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncSummary, setSyncSummary] = useState<MobileCloudSyncSummary | null>(null);
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const themedCardStyle = getThemedCardStyle(theme, themeConfig, themeMetrics);

  const applySyncSummary = useCallback(
    (summary: MobileCloudSyncSummary | null) => {
      if (!summary) return;
      setSyncSummary(summary);
      if (summary.syncedThemeConfig) {
        updateThemeConfig(summary.syncedThemeConfig);
      }
    },
    [updateThemeConfig]
  );

  const loadUser = useCallback(async () => {
    setLoading(true);
    try {
      const current = await getCurrentUser();
      setUser(current);
      if (current) {
        syncMobileUserData().then(applySyncSummary).catch(() => {});
      }
    } finally {
      setLoading(false);
    }
  }, [applySyncSummary]);

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
      triggerHaptic("light");
      syncMobileUserData().then(applySyncSummary).catch(() => {});
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Authentication failed.");
    } finally {
      setSubmitting(false);
    }
  }, [applySyncSummary, confirmPassword, email, mode, name, password]);

  const handleSignOut = useCallback(async () => {
    setSubmitting(true);
    try {
      await signOutMobile();
      setUser(null);
      setSyncSummary(null);
      triggerHaptic("light");
    } finally {
      setSubmitting(false);
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.bgPrimary }} edges={["top", "left", "right"]}>
      <Stack.Screen options={{ headerShown: false }} />
      <KenyaStripe />
      <AndroidTopAppBar
        title="Account"
        subtitle={user ? "Synced with Appwrite Cloud" : "Sign in to sync themes, progress & tools"}
        showBack
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ padding: 18, paddingBottom: 48 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={themeConfig?.verticalScrollbarStyle !== "hidden"}
        >
          {loading ? (
            <View style={{ paddingVertical: 64, alignItems: "center" }}>
              <ActivityIndicator size="large" color={theme.gold} />
              <Text style={{ color: theme.textSecondary, marginTop: 12, fontSize: 14 }}>
                Checking your KenyaHub account...
              </Text>
            </View>
          ) : user ? (
            <View style={{ gap: 14 }}>
              {/* Profile Header Card */}
              <View style={[themedCardStyle, { padding: 18 }]}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
                  <View
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: 18,
                      backgroundColor: `${theme.gold}22`,
                      borderColor: `${theme.gold}66`,
                      borderWidth: 1.5,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: theme.gold, fontSize: 19, fontWeight: "800" }}>
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
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                        marginTop: 6,
                      }}
                    >
                      <ThemedIcon name="shield-checkmark-outline" size={14} color={theme.kenyaGreenLight || "#10b981"} />
                      <Text style={{ color: theme.kenyaGreenLight || "#10b981", fontSize: 11, fontWeight: "700" }}>
                        Active Appwrite Session
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Cloud Sync Card */}
              <View style={[themedCardStyle, { padding: 18 }]}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <ThemedIconBadge name="cloud-done-outline" accentColor={theme.gold} baseSize={36} iconSize={18} />
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: theme.textPrimary, fontWeight: "800", fontSize: 15 }}>
                      Cloud Account Sync
                    </Text>
                    <Text style={{ color: theme.textSecondary, fontSize: 12, marginTop: 1 }}>
                      Themes, pinned tools, language XP, favorites & checklists
                    </Text>
                  </View>
                </View>

                {syncSummary ? (
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      gap: 8,
                      marginVertical: 10,
                    }}
                  >
                    {[
                      { label: "Pinned Tools", val: String(syncSummary.pinnedCount) },
                      { label: "Languages", val: String(syncSummary.languagesSynced) },
                      { label: "Saved Themes", val: String(syncSummary.savedThemesCount) },
                      { label: "Active Theme", val: syncSummary.themeSynced ? "Synced" : "Local" },
                    ].map((stat) => (
                      <View
                        key={stat.label}
                        style={{
                          flexGrow: 1,
                          minWidth: "45%",
                          backgroundColor: theme.bgElevated,
                          borderColor: theme.border,
                          borderWidth: 1,
                          borderRadius: 12,
                          padding: 10,
                        }}
                      >
                        <Text style={{ color: theme.gold, fontSize: 16, fontWeight: "800" }}>{stat.val}</Text>
                        <Text style={{ color: theme.textMuted, fontSize: 11, marginTop: 2 }}>{stat.label}</Text>
                      </View>
                    ))}
                  </View>
                ) : null}

                <Pressable
                  disabled={syncing}
                  onPress={async () => {
                    setSyncing(true);
                    try {
                      const s = await syncMobileUserData();
                      applySyncSummary(s);
                      triggerHaptic("light");
                    } finally {
                      setSyncing(false);
                    }
                  }}
                  style={({ pressed }) => ({
                    backgroundColor: `${theme.gold}22`,
                    borderColor: `${theme.gold}55`,
                    borderWidth: 1,
                    borderRadius: 12,
                    paddingVertical: 11,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    opacity: syncing ? 0.6 : pressed ? 0.85 : 1,
                    marginTop: 6,
                  })}
                >
                  <ThemedIcon name="sync-outline" size={16} color={theme.gold} />
                  <Text style={{ color: theme.gold, fontWeight: "800", fontSize: 13 }}>
                    {syncing ? "Syncing..." : "Sync Now"}
                  </Text>
                </Pressable>
              </View>

              {/* Quick Actions */}
              <View style={[themedCardStyle, { padding: 6 }]}>
                <Pressable
                  onPress={() => router.replace("/(tabs)/learn")}
                  style={({ pressed }) => ({
                    padding: 14,
                    borderRadius: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    opacity: pressed ? 0.75 : 1,
                  })}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                    <ThemedIcon name="school-outline" size={19} color={theme.gold} />
                    <Text style={{ color: theme.textPrimary, fontWeight: "700", fontSize: 14 }}>
                      Continue Language Learning
                    </Text>
                  </View>
                  <ThemedIcon name="chevron-forward" size={16} color={theme.textMuted} />
                </Pressable>

                <View style={{ height: 1, backgroundColor: theme.border, marginHorizontal: 14 }} />

                <Pressable
                  onPress={() => router.push("/settings")}
                  style={({ pressed }) => ({
                    padding: 14,
                    borderRadius: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    opacity: pressed ? 0.75 : 1,
                  })}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                    <ThemedIcon name="color-palette-outline" size={19} color={theme.gold} />
                    <Text style={{ color: theme.textPrimary, fontWeight: "700", fontSize: 14 }}>
                      Customize App Theme
                    </Text>
                  </View>
                  <ThemedIcon name="chevron-forward" size={16} color={theme.textMuted} />
                </Pressable>
              </View>

              {/* Sign Out */}
              <Pressable
                onPress={handleSignOut}
                disabled={submitting}
                style={({ pressed }) => ({
                  backgroundColor: "#ef444418",
                  borderColor: "#ef444444",
                  borderWidth: 1,
                  borderRadius: 14,
                  paddingVertical: 14,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 8,
                  opacity: submitting ? 0.6 : pressed ? 0.8 : 1,
                })}
              >
                <ThemedIcon name="log-out-outline" size={18} color="#ef4444" />
                <Text style={{ color: "#ef4444", fontWeight: "800", fontSize: 14 }}>
                  {submitting ? "Signing out..." : "Sign Out"}
                </Text>
              </Pressable>
            </View>
          ) : (
            <View style={{ gap: 16 }}>
              {/* Hero Badge */}
              <View style={{ alignItems: "center", paddingTop: 6 }}>
                <ThemedIconBadge
                  name={mode === "forgot" ? "key-outline" : "person-circle-outline"}
                  accentColor={theme.gold}
                  baseSize={60}
                  iconSize={30}
                />
                <Text
                  style={{
                    color: theme.textPrimary,
                    fontSize: 22,
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: 12,
                  }}
                >
                  {mode === "signin"
                    ? "Welcome back"
                    : mode === "signup"
                    ? "Create KenyaHub Account"
                    : "Reset Password"}
                </Text>
                <Text
                  style={{
                    color: theme.textSecondary,
                    fontSize: 13,
                    textAlign: "center",
                    marginTop: 4,
                    maxWidth: 300,
                    lineHeight: 19,
                  }}
                >
                  {mode === "forgot"
                    ? "Enter your email and Appwrite will send you a password reset link."
                    : "Back up your themes, pinned tools, favorites & language progress across devices."}
                </Text>
              </View>

              {/* Form Card */}
              <View style={[themedCardStyle, { padding: 18 }]}>
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
                    <Text style={{ color: "#ef4444", fontSize: 12, lineHeight: 17 }}>{errorMsg}</Text>
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
                    <Text style={{ color: "#10b981", fontSize: 12, lineHeight: 17 }}>{successMsg}</Text>
                  </View>
                ) : null}

                {mode !== "forgot" && (
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: theme.bgElevated,
                      borderColor: theme.border,
                      borderWidth: 1,
                      borderRadius: 12,
                      padding: 4,
                      marginBottom: 18,
                    }}
                  >
                    {(["signin", "signup"] as const).map((tab) => {
                      const active = mode === tab;
                      return (
                        <Pressable
                          key={tab}
                          onPress={() => {
                            triggerHaptic("light");
                            setMode(tab);
                            setErrorMsg(null);
                            setSuccessMsg(null);
                          }}
                          style={{
                            flex: 1,
                            paddingVertical: 10,
                            borderRadius: 9,
                            backgroundColor: active ? theme.gold : "transparent",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: active ? "#000000" : theme.textSecondary,
                              fontWeight: "800",
                              fontSize: 13,
                            }}
                          >
                            {tab === "signin" ? "Sign In" : "Create Account"}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                )}

                {mode === "signup" && (
                  <View style={{ marginBottom: 14 }}>
                    <Text style={{ color: theme.textSecondary, fontSize: 12, fontWeight: "700", marginBottom: 6 }}>
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
                        paddingVertical: 12,
                        color: theme.textPrimary,
                        fontSize: 14,
                      }}
                    />
                  </View>
                )}

                <View style={{ marginBottom: 14 }}>
                  <Text style={{ color: theme.textSecondary, fontSize: 12, fontWeight: "700", marginBottom: 6 }}>
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
                      paddingVertical: 12,
                      color: theme.textPrimary,
                      fontSize: 14,
                    }}
                  />
                </View>

                {mode !== "forgot" && (
                  <View style={{ marginBottom: 14 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 6,
                      }}
                    >
                      <Text style={{ color: theme.textSecondary, fontSize: 12, fontWeight: "700" }}>
                        Password
                      </Text>
                      {mode === "signin" && (
                        <Pressable
                          onPress={() => {
                            setMode("forgot");
                            setErrorMsg(null);
                            setSuccessMsg(null);
                          }}
                        >
                          <Text style={{ color: theme.gold, fontSize: 12, fontWeight: "700" }}>
                            Forgot password?
                          </Text>
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
                          paddingVertical: 12,
                          color: theme.textPrimary,
                          fontSize: 14,
                        }}
                      />
                      <Pressable
                        onPress={() => setShowPassword((v) => !v)}
                        style={{ position: "absolute", right: 12, top: 12, padding: 2 }}
                      >
                        <ThemedIcon
                          name={showPassword ? "eye-off-outline" : "eye-outline"}
                          size={20}
                          color={theme.textMuted}
                        />
                      </Pressable>
                    </View>
                  </View>
                )}

                {mode === "signup" && (
                  <View style={{ marginBottom: 18 }}>
                    <Text style={{ color: theme.textSecondary, fontSize: 12, fontWeight: "700", marginBottom: 6 }}>
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
                        paddingVertical: 12,
                        color: theme.textPrimary,
                        fontSize: 14,
                      }}
                    />
                  </View>
                )}

                <Pressable
                  onPress={handleEmailSubmit}
                  disabled={submitting}
                  style={({ pressed }) => ({
                    backgroundColor: theme.gold,
                    borderRadius: 12,
                    paddingVertical: 14,
                    alignItems: "center",
                    opacity: submitting ? 0.6 : pressed ? 0.85 : 1,
                    marginTop: mode === "signup" ? 0 : 4,
                  })}
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
                    onPress={() => {
                      setMode("signin");
                      setErrorMsg(null);
                      setSuccessMsg(null);
                    }}
                    style={{ paddingVertical: 12, alignItems: "center", marginTop: 4 }}
                  >
                    <Text style={{ color: theme.textSecondary, fontSize: 12, fontWeight: "700" }}>
                      ← Back to Sign In
                    </Text>
                  </Pressable>
                )}
              </View>

              {/* Sync perks strip */}
              <View style={[themedCardStyle, { padding: 14, flexDirection: "row", alignItems: "center", gap: 12 }]}>
                <ThemedIcon name="cloud-upload-outline" size={20} color={theme.gold} />
                <Text style={{ color: theme.textSecondary, fontSize: 12, flex: 1, lineHeight: 17 }}>
                  Your custom themes, pinned tools, dictionary favorites & language progress sync automatically once signed in.
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
