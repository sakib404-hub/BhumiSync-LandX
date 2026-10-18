"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  Shield,
  Bell,
  CheckCircle2,
  Wifi,
  Lock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/app/_components/layout/LanguageToggle";

interface InstitutionalTopNavProps {
  onToggleMobileMenu: () => void;
}

export const InstitutionalTopNav = ({
  onToggleMobileMenu,
}: InstitutionalTopNavProps) => {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const [notificationOpen, setNotificationOpen] = useState(false);

  const isMortgage =
    pathname === "/institutional" ||
    pathname === "/institutional/mortgages";

  const moduleTitle = isMortgage
    ? language === "bn"
      ? "ব্যাংক বন্ধক ও লিয়েন খতিয়ান"
      : "Bank Mortgage Registry"
    : language === "bn"
    ? "দেওয়ানি আদালত নিষেধাজ্ঞা খতিয়ান"
    : "Civil Court Injunction Registry";

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
          <span className="text-sm sm:text-base font-bold text-white tracking-tight hidden sm:inline">
            BhumiSync Legal Portal
          </span>
          <span className="text-slate-600 font-semibold hidden sm:inline">/</span>
          <span className="text-xs sm:text-sm font-semibold text-sky-400">
            {moduleTitle}
          </span>
          <span className="hidden md:inline px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 uppercase tracking-wider ml-1">
            Cadastral v4.12
          </span>
        </div>
      </div>

      {/* Right Controls: Real-time Telemetry & Badges */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Real-time Synced Consensus Block */}
        <div className="hidden xl:flex items-center gap-4 text-xs font-mono">
          <div className="text-sky-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <span>Consensus Block #8,492,103</span>
          </div>
          <div className="text-emerald-400 flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5" />
            <span>Node Synchronized</span>
          </div>
        </div>

        {/* Ledger Live Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold">
          <Shield className="w-3.5 h-3.5 text-sky-400" />
          <span>Ledger Live</span>
        </div>

        {/* Language Switcher */}
        <LanguageToggle />

        {/* Notification Bell */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors relative"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_6px_#38bdf8]" />
          </button>

          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-72 rounded-xl bg-slate-950/95 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl z-50 text-xs">
              <div className="font-semibold text-white pb-2 border-b border-white/10 flex justify-between items-center">
                <span>Institutional Alerts</span>
                <span className="text-[10px] text-sky-400 font-bold px-1.5 py-0.5 rounded bg-sky-500/20">
                  1 Priority
                </span>
              </div>
              <div className="py-2.5 space-y-2">
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200">
                  <p className="font-semibold text-[11px]">Active Mutation Conflict</p>
                  <p className="text-[10px] text-amber-300/80 mt-0.5">
                    Daag 452/1 has active case MUT-2026-000001
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Officer Avatar SC */}
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold text-xs shadow-md border border-white/30">
          SC
        </div>
      </div>
    </header>
  );
};
