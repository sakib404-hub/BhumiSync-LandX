"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, UserCheck, LogOut, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export type AlertType = "login" | "register" | "logout";

interface AlertPayload {
  type?: AlertType;
  role?: string;
  name?: string;
  nid?: string;
}

export const TopAlertNotification = () => {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [alertData, setAlertData] = React.useState<AlertPayload | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const triggerAlert = React.useCallback((payload: AlertPayload) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setAlertData(payload);
    setIsVisible(true);

    // Auto dismiss after 5 seconds
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  }, []);

  const handleDismiss = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsVisible(false);
  };

  // Check sessionStorage on mount and when pathname changes
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Check modern "bhumisync_alert" or fallback "bhumisync_login_alert"
    const stored =
      sessionStorage.getItem("bhumisync_alert") ||
      sessionStorage.getItem("bhumisync_login_alert");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        sessionStorage.removeItem("bhumisync_alert");
        sessionStorage.removeItem("bhumisync_login_alert");
        queueMicrotask(() => {
          triggerAlert(parsed);
        });
      } catch {
        sessionStorage.removeItem("bhumisync_alert");
        sessionStorage.removeItem("bhumisync_login_alert");
      }
    }
  }, [pathname, triggerAlert]);

  // Listen for live events across the application
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<AlertPayload>;
      triggerAlert(customEvent.detail || {});
    };

    window.addEventListener("bhumisync_alert", handleCustomEvent);
    window.addEventListener("bhumisync_login_alert", handleCustomEvent);

    return () => {
      window.removeEventListener("bhumisync_alert", handleCustomEvent);
      window.removeEventListener("bhumisync_login_alert", handleCustomEvent);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [triggerAlert]);

  const alertType = alertData?.type || "login";

  // Visual Theme Configuration based on Alert Type
  const themeConfig = {
    login: {
      border: "border-emerald-400/40",
      topStreak: "via-emerald-400",
      glow: "bg-emerald-500/15",
      shadow: "shadow-[0_16px_50px_rgba(0,0,0,0.7),0_0_24px_rgba(16,185,129,0.22)]",
      iconBox: "bg-emerald-500/15 border-emerald-400/35 text-emerald-300 shadow-[0_0_14px_rgba(16,185,129,0.35)]",
      badgeClass: "bg-emerald-400/15 border-emerald-400/30 text-emerald-300",
      progressBar: "bg-emerald-400/70",
      icon: <CheckCircle2 className="h-5 w-5" />,
      badgeIcon: <ShieldCheck className="h-3 w-3" />,
      badgeText: t("auth.alertBadge"),
      titleText: t("auth.alertTitle"),
      descText:
        alertData?.role === "citizen" || !alertData?.role
          ? t("auth.alertDescCitizen")
          : t("auth.alertDescOfficial"),
    },
    register: {
      border: "border-sky-400/50",
      topStreak: "via-sky-400",
      glow: "bg-sky-500/15",
      shadow: "shadow-[0_16px_50px_rgba(0,0,0,0.7),0_0_24px_rgba(56,189,248,0.25)]",
      iconBox: "bg-sky-500/15 border-sky-400/35 text-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.35)]",
      badgeClass: "bg-sky-400/15 border-sky-400/30 text-sky-300",
      progressBar: "bg-sky-400/80",
      icon: <UserCheck className="h-5 w-5" />,
      badgeIcon: <ShieldCheck className="h-3 w-3" />,
      badgeText: t("auth.alertRegBadge"),
      titleText: t("auth.alertRegTitle"),
      descText: t("auth.alertRegDesc"),
    },
    logout: {
      border: "border-blue-400/35",
      topStreak: "via-blue-400",
      glow: "bg-blue-500/15",
      shadow: "shadow-[0_16px_50px_rgba(0,0,0,0.7),0_0_24px_rgba(59,130,246,0.2)]",
      iconBox: "bg-blue-500/15 border-blue-400/35 text-blue-300 shadow-[0_0_14px_rgba(59,130,246,0.3)]",
      badgeClass: "bg-blue-400/15 border-blue-400/30 text-blue-300",
      progressBar: "bg-blue-400/70",
      icon: <LogOut className="h-5 w-5" />,
      badgeIcon: <LogOut className="h-3 w-3" />,
      badgeText: t("auth.alertLogoutBadge"),
      titleText: t("auth.alertLogoutTitle"),
      descText: t("auth.alertLogoutDesc"),
    },
  }[alertType];

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 z-[100] flex justify-center px-3 sm:px-4 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -36, scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 30,
            }}
            className={`pointer-events-auto w-full max-w-md sm:max-w-lg rounded-2xl border ${themeConfig.border} bg-[#081324]/92 backdrop-blur-2xl p-3.5 sm:p-4 ${themeConfig.shadow} relative overflow-hidden`}
            role="alert"
            aria-live="assertive"
          >
            {/* Luminous top border glow streak */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${themeConfig.topStreak} to-transparent`}
            />

            {/* Glowing orb accent */}
            <div
              className={`absolute -top-10 -right-10 w-28 h-28 ${themeConfig.glow} rounded-full blur-xl pointer-events-none`}
            />

            <div className="flex items-start gap-3 relative z-10">
              {/* Icon Capsule */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${themeConfig.iconBox}`}
              >
                {themeConfig.icon}
              </div>

              {/* Alert Content */}
              <div className="flex-1 min-w-0 pr-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-bold tracking-wider uppercase font-mono ${themeConfig.badgeClass}`}
                  >
                    {themeConfig.badgeIcon}
                    {themeConfig.badgeText}
                  </span>
                  {alertData?.nid && alertType !== "logout" && (
                    <span className="text-[10px] text-slate-400 font-mono">
                      {alertData.nid}
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-bold text-white tracking-tight">
                  {themeConfig.titleText}
                </h4>

                <p className="text-xs text-slate-300/90 leading-relaxed mt-0.5">
                  {themeConfig.descText}
                </p>
              </div>

              {/* Dismiss Button */}
              <button
                type="button"
                onClick={handleDismiss}
                className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Auto-Dismiss Linear Progress Line */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 5, ease: "linear" }}
              className={`absolute bottom-0 left-0 right-0 h-[2.5px] ${themeConfig.progressBar} origin-left`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
