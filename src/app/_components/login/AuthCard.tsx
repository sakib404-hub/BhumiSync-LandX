"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  LockOpen,
  UserPlus,
  Mail,
  Key,
  Eye,
  EyeOff,
  CheckCircle,
  BadgeCheck,
  Phone,
  Fingerprint,
  Info,
  LogIn,
  Loader2,
  UserCheck,
  Stamp,
  Building,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

type AuthTab = "login" | "register";
type RolePreset = "citizen" | "sub-registrar" | "ac-land" | "bank" | "admin";

interface RoleConfig {
  id: RolePreset;
  labelKey: string;
  email: string;
  pass: string;
  redirectUrl: string;
  icon: React.ReactNode;
}

export const AuthCard = () => {
  const router = useRouter();
  const { t, language } = useLanguage();

  const [activeTab, setActiveTab] = React.useState<AuthTab>("login");
  const [selectedRole, setSelectedRole] = React.useState<RolePreset>("citizen");

  // Login form state
  const [email, setEmail] = React.useState("citizen@bhumisync.gov.bd");
  const [password, setPassword] = React.useState("SovereignRegistry#2024");
  const [showPassword, setShowPassword] = React.useState(false);
  const [rememberSession, setRememberSession] = React.useState(true);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);
  const [loginFeedback, setLoginFeedback] = React.useState<string | null>(null);

  // Register form state
  const [fullName, setFullName] = React.useState("SYN Rahim Uddin");
  const [phone, setPhone] = React.useState("+880 1700-000000");
  const [nid, setNid] = React.useState("SYN-NID-A10021");
  const [regEmail, setRegEmail] = React.useState("citizen@example.com");
  const [regPassphrase, setRegPassphrase] = React.useState("SovereignPass#2026");
  const [isRegistering, setIsRegistering] = React.useState(false);
  const [registerSuccess, setRegisterSuccess] = React.useState(false);

  const roleConfigs: RoleConfig[] = [
    {
      id: "citizen",
      labelKey: "auth.roleCitizen",
      email: "citizen@bhumisync.gov.bd",
      pass: "SovereignRegistry#2024",
      redirectUrl: "/citizen/land",
      icon: <UserCheck className="h-3.5 w-3.5" />,
    },
    {
      id: "sub-registrar",
      labelKey: "auth.roleSubRegistrar",
      email: "registrar.savar@bhumisync.gov.bd",
      pass: "SubRegistrar#Savar2026",
      redirectUrl: "/sub-registrar/dashboard",
      icon: <Stamp className="h-3.5 w-3.5" />,
    },
    {
      id: "ac-land",
      labelKey: "auth.roleAcLand",
      email: "acland.savar@bhumisync.gov.bd",
      pass: "ACLand#Mutation2026",
      redirectUrl: "/ac-land/queue",
      icon: <Building className="h-3.5 w-3.5" />,
    },
    {
      id: "bank",
      labelKey: "auth.roleBank",
      email: "audit.court@bhumisync.gov.bd",
      pass: "JudicialAudit#2026",
      redirectUrl: "/institutional/mortgages",
      icon: <Scale className="h-3.5 w-3.5" />,
    },
    {
      id: "admin",
      labelKey: "auth.roleAdmin",
      email: "admin.root@bhumisync.gov.bd",
      pass: "SuperAdmin#Node84",
      redirectUrl: "/admin/overview",
      icon: <ShieldAlert className="h-3.5 w-3.5" />,
    },
  ];

  // Ensure login button loading state is always cleanly reset upon mount or logout
  React.useEffect(() => {
    setIsLoggingIn(false);
    setLoginFeedback(null);
    setIsRegistering(false);

    const handleAuthChange = () => {
      setIsLoggingIn(false);
      setLoginFeedback(null);
    };

    window.addEventListener("bhumisync_auth_change", handleAuthChange);
    return () => {
      window.removeEventListener("bhumisync_auth_change", handleAuthChange);
    };
  }, []);

  const handleRoleSelect = (role: RoleConfig) => {
    setSelectedRole(role.id);
    setEmail(role.email);
    setPassword(role.pass);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoggingIn) return;

    setIsLoggingIn(true);
    setLoginFeedback(t("auth.signingIn"));

    const targetConfig = roleConfigs.find((r) => r.id === selectedRole) || roleConfigs[0];

    setTimeout(() => {
      setLoginFeedback(t("auth.loginSuccess"));
      const authData = {
        type: "login" as const,
        role: selectedRole,
        name: selectedRole === "citizen" ? "SYN Rahim Uddin" : "Officer Savar",
        nid: selectedRole === "citizen" ? "SYN-NID-A10021" : "SYN-OFFICER-0084",
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("bhumisync_auth_user", JSON.stringify(authData));
        sessionStorage.setItem("bhumisync_alert", JSON.stringify(authData));
        window.dispatchEvent(new Event("bhumisync_auth_change"));
        window.dispatchEvent(
          new CustomEvent("bhumisync_alert", {
            detail: authData,
          })
        );
      }

      setTimeout(() => {
        setIsLoggingIn(false);
        setLoginFeedback(null);
        router.push(targetConfig.redirectUrl);
      }, 450);
    }, 600);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) return;

    setIsRegistering(true);

    setTimeout(() => {
      const citizenData = {
        type: "register" as const,
        role: "citizen" as const,
        name: fullName.trim() || "SYN Rahim Uddin",
        nid: nid.trim() || "SYN-NID-A10021",
        email: regEmail,
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("bhumisync_auth_user", JSON.stringify(citizenData));
        sessionStorage.setItem("bhumisync_alert", JSON.stringify(citizenData));
        window.dispatchEvent(new Event("bhumisync_auth_change"));
        window.dispatchEvent(
          new CustomEvent("bhumisync_alert", {
            detail: citizenData,
          })
        );
      }

      setTimeout(() => {
        setIsRegistering(false);
        router.push("/citizen/land");
      }, 400);
    }, 650);
  };

  return (
    <Card
      level={1}
      className="p-7 lg:p-8 rounded-2xl flex flex-col justify-between relative shadow-[0_12px_44px_rgba(0,0,0,0.45)] backdrop-blur-xl bg-white/[0.04] border border-white/[0.16]"
    >
      <div className="space-y-6">
        {/* Segmented Tab Switcher with Framer Motion spring layout */}
        <div className="p-1 rounded-xl bg-slate-950/70 border border-white/10 flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("login")}
            className={`relative flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "login" ? "text-sky-300" : "text-slate-400 hover:text-white"
            }`}
          >
            {activeTab === "login" && (
              <motion.div
                layoutId="authTabIndicator"
                className="absolute inset-0 rounded-lg bg-sky-500/20 border border-sky-400/40 shadow-[0_0_16px_rgba(56,189,248,0.3)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <LockOpen className="h-4 w-4 relative z-10" />
            <span className="relative z-10">{t("auth.tabLogin")}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("register")}
            className={`relative flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "register" ? "text-sky-300" : "text-slate-400 hover:text-white"
            }`}
          >
            {activeTab === "register" && (
              <motion.div
                layoutId="authTabIndicator"
                className="absolute inset-0 rounded-lg bg-sky-500/20 border border-sky-400/40 shadow-[0_0_16px_rgba(56,189,248,0.3)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <UserPlus className="h-4 w-4 relative z-10" />
            <span className="relative z-10">{t("auth.tabRegister")}</span>
          </button>
        </div>

        {/* Quick Role Presets Bar (Login Mode) */}
        {activeTab === "login" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>{t("auth.rolePresetLabel")}</span>
              <span className="text-sky-400 font-mono text-[10px]">Auto-fills portal route</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
              {roleConfigs.map((role) => {
                const isSelected = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => handleRoleSelect(role)}
                    className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-sky-500/25 border-sky-400/60 text-white shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                        : "bg-slate-900/50 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                    }`}
                  >
                    {role.icon}
                    <span className="truncate">{t(role.labelKey)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Dynamic Tab Body with Smooth Fade Transitions */}
        <AnimatePresence mode="wait">
          {activeTab === "login" ? (
            <motion.form
              key="login-form"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleLogin}
              className="space-y-4"
            >
              {/* Field 1: Cadastral Email / Citizen ID */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-300">
                    {t("auth.emailLabel")}
                  </label>
                  <span className="text-[11px] text-sky-400/90 font-mono">
                    {t("auth.officialPortal")}
                  </span>
                </div>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("auth.emailPlaceholder")}
                    className="pl-10 text-xs sm:text-sm font-medium"
                  />
                </div>
              </div>

              {/* Field 2: Cryptographic Password */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-300">
                    {t("auth.passwordLabel")}
                  </label>
                  <span className="text-xs text-sky-400 hover:text-sky-300 transition-colors cursor-pointer">
                    {t("auth.forgotPassword")}
                  </span>
                </div>
                <div className="relative">
                  <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("auth.passwordPlaceholder")}
                    className="pl-10 pr-10 text-xs sm:text-sm font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Checkbox & SHA Verification Badge */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={rememberSession}
                    onChange={(e) => setRememberSession(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-900 border-white/20 text-sky-400 focus:ring-sky-400 focus:ring-offset-0 cursor-pointer"
                  />
                  <span>{t("auth.rememberSession")}</span>
                </label>

                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-medium">
                  <CheckCircle className="h-3 w-3" />
                  <span>{t("auth.shaValid")}</span>
                </div>
              </div>

              {/* Login Submit Action */}
              <Button
                type="submit"
                disabled={isLoggingIn}
                className="w-full mt-2 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_28px_rgba(56,189,248,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{loginFeedback}</span>
                  </>
                ) : (
                  <>
                    <LogIn className="h-4 w-4" />
                    <span>{t("auth.signInBtn")}</span>
                  </>
                )}
              </Button>
            </motion.form>
          ) : (
            <motion.form
              key="register-form"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleRegister}
              className="space-y-3.5"
            >
              {registerSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{t("auth.registerSuccess")}</span>
                </div>
              )}

              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    {t("auth.fullNameLabel")}
                  </label>
                  <div className="relative">
                    <BadgeCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-3.5 w-3.5 pointer-events-none" />
                    <Input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t("auth.fullNamePlaceholder")}
                      className="pl-9 text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">
                    {t("auth.phoneLabel")}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-3.5 w-3.5 pointer-events-none" />
                    <Input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("auth.phonePlaceholder")}
                      className="pl-9 text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* NID Escrow ID */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  {t("auth.nidLabel")}
                </label>
                <div className="relative">
                  <Fingerprint className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-3.5 w-3.5 pointer-events-none" />
                  <Input
                    type="text"
                    required
                    value={nid}
                    onChange={(e) => setNid(e.target.value)}
                    placeholder={t("auth.nidPlaceholder")}
                    className="pl-9 text-xs font-mono text-sky-300"
                  />
                </div>
              </div>

              {/* Citizen Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  {t("auth.citizenEmailLabel")}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-3.5 w-3.5 pointer-events-none" />
                  <Input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder={t("auth.citizenEmailPlaceholder")}
                    className="pl-9 text-xs"
                  />
                </div>
              </div>

              {/* Passphrase */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  {t("auth.passphraseLabel")}
                </label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-3.5 w-3.5 pointer-events-none" />
                  <Input
                    type="password"
                    required
                    value={regPassphrase}
                    onChange={(e) => setRegPassphrase(e.target.value)}
                    placeholder={t("auth.passphrasePlaceholder")}
                    className="pl-9 text-xs font-mono"
                  />
                </div>
              </div>

              {/* Register Submit Action */}
              <Button
                type="submit"
                disabled={isRegistering}
                className="w-full mt-2 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold shadow-[0_0_16px_rgba(56,189,248,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isRegistering ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{t("auth.submitting")}</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="h-4 w-4" />
                    <span>{t("auth.registerBtn")}</span>
                  </>
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Administrator Guidance Institutional Callout */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-start gap-2.5 bg-slate-950/40 p-3 rounded-xl border border-white/5">
        <Info className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
        <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
          {t("auth.staffNotice")}
        </p>
      </div>
    </Card>
  );
};
