"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Scale,
  Layers,
  Gavel,
  History,
  Building2,
  BadgeCheck,
  LogOut,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface AcLandSideNavProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

export const AcLandSideNav = ({
  mobileOpen = false,
  onClose,
}: AcLandSideNavProps) => {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("bhumisync_auth_user");
      const logoutAlert = {
        type: "logout" as const,
      };
      sessionStorage.setItem("bhumisync_alert", JSON.stringify(logoutAlert));
      window.dispatchEvent(new Event("bhumisync_auth_change"));
      window.dispatchEvent(
        new CustomEvent("bhumisync_alert", {
          detail: logoutAlert,
        })
      );
    }
    if (onClose) onClose();
    router.push("/login");
  };

  const navLinks = [
    {
      href: "/ac-land/queue",
      label: t("acLand.navQueue"),
      icon: Layers,
      isActive:
        pathname === "/ac-land/queue" ||
        pathname === "/ac-land" ||
        pathname === "/ac-land/dashboard" ||
        pathname.startsWith("/ac-land/case"),
      badge: "47",
      badgeClass:
        pathname === "/ac-land/queue" ||
        pathname === "/ac-land" ||
        pathname === "/ac-land/dashboard" ||
        pathname.startsWith("/ac-land/case")
          ? "bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-[0_0_8px_rgba(56,189,248,0.3)]"
          : "bg-white/10 text-slate-300 border border-white/15",
    },
    {
      href: "/ac-land/hearings",
      label: t("acLand.navHearings"),
      icon: Gavel,
      isActive: pathname === "/ac-land/hearings",
      badge: t("acLand.navHearingsToday"),
      badgeClass:
        pathname === "/ac-land/hearings"
          ? "bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-[0_0_8px_rgba(56,189,248,0.3)]"
          : "bg-white/10 text-slate-300 border border-white/15",
    },
    {
      href: "/ac-land/history",
      label: t("acLand.navHistory"),
      icon: History,
      isActive: pathname === "/ac-land/history",
      badge: language === "bn" ? "১.৪k" : "1.4k",
      badgeClass:
        pathname === "/ac-land/history"
          ? "bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-[0_0_8px_rgba(56,189,248,0.3)]"
          : "bg-white/10 text-slate-300 border border-white/15",
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full p-4 w-full">
      {/* Top Branding & Main Navigation */}
      <div className="flex flex-col gap-5">
        {/* Brand Header */}
        <div className="flex items-center justify-between px-2 pt-1">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500/30 to-blue-600/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.35)] shrink-0 group-hover:scale-105 transition-transform">
              <Scale className="w-5 h-5 text-sky-300" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-sky-200 transition-colors">
                {language === "bn" ? "ভূমি" : "Bhumi"}
                <span className="text-sky-400">{language === "bn" ? "সিঙ্ক" : "Sync"}</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium truncate -mt-0.5">
                {t("acLand.brandTagline")}
              </span>
            </div>
          </Link>

          {/* Close button on mobile */}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Section Label */}
        <div className="px-2 pt-1">
          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
            {t("acLand.consoleLabel")}
          </p>
        </div>

        {/* Navigation Links */}
        <nav aria-label="AC Land Navigation" className="flex flex-col gap-1.5">
          {navLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-150 text-xs sm:text-sm font-semibold ${
                  item.isActive
                    ? "bg-sky-500/15 text-sky-300 border-l-4 border-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.25)] font-bold border-y border-r border-sky-400/20"
                    : "text-slate-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      item.isActive ? "text-sky-400 stroke-[2.5]" : "text-slate-400"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Station, Officer Profile & Logout */}
      <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
        {/* Savar AC Land Office Node Card */}
        <div className="px-3 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold text-white truncate">
                {t("acLand.station")}
              </span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                {t("acLand.liveNodeConnected")}
              </span>
            </div>
          </div>
        </div>

        {/* AC Land Official Profile Card */}
        <div className="px-3 py-2 flex items-center gap-3 rounded-xl bg-white/5 border border-white/10">
          <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0 shadow-inner">
            <BadgeCheck className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-white truncate">
              {t("acLand.officerTitle")}
            </span>
            <span className="text-[10px] font-mono text-sky-300/80">
              {t("acLand.officerId")}
            </span>
          </div>
        </div>

        {/* Logout Action */}
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/25 hover:bg-rose-500/20 hover:border-rose-500/40 transition-all cursor-pointer shadow-[0_0_12px_rgba(244,63,94,0.15)] active:scale-[0.98]"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>{t("acLand.logout")}</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Desktop Fixed Glass Sidebar (w-[260px]) */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[260px] z-40 bg-slate-950/85 backdrop-blur-2xl border-r border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {sidebarContent}
      </aside>

      {/* 2. Mobile Collapsible Drawer Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 h-screen w-[270px] bg-slate-950/95 backdrop-blur-2xl border-r border-white/15 shadow-2xl"
            >
              {sidebarContent}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
