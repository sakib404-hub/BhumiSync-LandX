"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  Shield,
  Bell,
  HelpCircle,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/app/_components/layout/LanguageToggle";

interface AdminTopNavProps {
  onToggleMobileMenu: () => void;
}

export const AdminTopNav = ({ onToggleMobileMenu }: AdminTopNavProps) => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [notificationOpen, setNotificationOpen] = useState(false);

  const getBreadcrumbModule = () => {
    if (pathname.includes("/users")) return t("admin.navUsers");
    if (pathname.includes("/audit")) return t("admin.navAudit");
    if (pathname.includes("/fraud")) return t("admin.navFraud");
    if (pathname.includes("/outbox")) return t("admin.navOutbox");
    return t("admin.breadcrumbOverview");
  };

  return (
    <header className="sticky top-0 z-30 h-16 w-full bg-slate-950/75 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] flex items-center justify-between px-4 sm:px-6">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5 text-sky-400" />
        </button>

        {/* Breadcrumb Hierarchy */}
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base font-bold text-white tracking-tight">
            {t("admin.title")}
          </span>
          <span className="text-slate-600 font-semibold">/</span>
          <span className="text-xs sm:text-sm font-semibold text-sky-400">
            {getBreadcrumbModule()}
          </span>

          {/* Consensus Block Badge */}
          <div className="ml-3 hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-xs text-slate-300 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] text-emerald-400 font-medium tabular-nums">
              {t("admin.consensusSynced")}
            </span>
          </div>
        </div>
      </div>

      {/* Right Controls: Authority Badge & Icon Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Institutional Authority Verified Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t("admin.authorityVerified")}</span>
        </div>

        {/* Vertical Divider */}
        <div className="hidden sm:block h-5 w-px bg-white/10" />

        {/* Action Trays: Notifications, Security, Help, Language */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Notifications Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="relative p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Notifications"
              aria-label="View notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_6px_#38bdf8]" />
            </button>
            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-72 rounded-xl bg-slate-950/95 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl z-50 text-xs">
                <div className="font-semibold text-white pb-2 border-b border-white/10 flex justify-between items-center">
                  <span>Recent Alerts</span>
                  <span className="text-[10px] text-sky-400 font-bold px-1.5 py-0.5 rounded bg-sky-500/20">2 New</span>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                    <p className="font-medium text-white">Double conveyance risk detected</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Plot Daag 452/1 under escrow review</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300">
                    <p className="font-medium text-white">Outbox relay packet retry</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">3 events queued with 60s backoff</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Security State */}
          <button
            type="button"
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors hidden sm:flex"
            title="Security State"
            aria-label="Security state"
          >
            <Shield className="w-4 h-4 text-sky-400" />
          </button>

          {/* Documentation / Help */}
          <button
            type="button"
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors hidden sm:flex"
            title="Documentation"
            aria-label="Documentation and assistance"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          {/* Global Language Toggle */}
          <LanguageToggle />
        </div>

        {/* Audit Session Live Badge */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
          <span>{t("admin.auditSessionLive")}</span>
        </div>
      </div>
    </header>
  );
};
