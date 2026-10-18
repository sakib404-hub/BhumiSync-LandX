"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  RefreshCw,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  UserCheck,
  Plus,
  Layers,
  FolderOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const SubRegistrarConsoleHeader = () => {
  const { t, language } = useLanguage();
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncDone, setSyncDone] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      if (language === "bn") {
        setCurrentTime(
          now.toLocaleTimeString("bn-BD", { hour12: true }) + " বিএসটি"
        );
        setCurrentDate(
          now.toLocaleDateString("bn-BD", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        );
      } else {
        setCurrentTime(
          now.toLocaleTimeString("en-US", { hour12: true }) + " BST"
        );
        setCurrentDate(
          now.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        );
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  const handleSyncLedger = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncDone(true);
      setTimeout(() => setSyncDone(false), 3000);
    }, 1200);
  };

  const navItems = [
    {
      href: "/sub-registrar",
      labelKey: "subRegistrar.navDashboard",
      icon: Layers,
      isActive: true,
    },
    {
      href: "/verify",
      labelKey: "subRegistrar.navValidate",
      icon: ShieldCheck,
      isActive: false,
    },
    {
      href: "/citizen/deeds",
      labelKey: "subRegistrar.navRegister",
      icon: Plus,
      isActive: false,
    },
    {
      href: "/citizen/deeds",
      labelKey: "subRegistrar.navMyDeeds",
      icon: FolderOpen,
      isActive: false,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6"
    >
      {/* 1. Top Jurisdiction, Consensus & Live Sync Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Jurisdiction & Station Badge */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.25)] shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                {language === "bn" ? "সাভার সাব-রেজিস্ট্রি কার্যালয়" : "Savar Sub-Registry Office"}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-semibold text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Station #04</span>
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              {t("subRegistrar.stationSub")}
            </span>
          </div>
        </div>

        {/* Live Consensus & Synchronize Cluster */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Consensus Block Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/70 border border-white/10 text-xs shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono font-semibold text-emerald-400">
              {language === "bn" ? "ব্লক #৮৮৪,৯১২ সিঙ্কড" : "Block #884,912 Synced"}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 text-[11px]">Savar AC Land</span>
          </div>

          {/* Live Ledger Sync Action */}
          <button
            type="button"
            onClick={handleSyncLedger}
            disabled={isSyncing}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold transition-all cursor-pointer disabled:opacity-75"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin text-sky-300" : ""}`} />
            <span>
              {isSyncing
                ? t("subRegistrar.syncing")
                : syncDone
                ? t("subRegistrar.synced")
                : t("subRegistrar.liveSyncBtn")}
            </span>
          </button>

          {/* Official Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
            <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 font-bold text-[10px]">
              SR
            </div>
            <span className="text-xs font-mono font-medium text-slate-200">
              SR-OFF-092
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Title, Live BST Clock & Navigation Ribbon */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-[11px] font-semibold tracking-wider text-sky-400 uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              {t("subRegistrar.portalBadge")}
            </span>
            <span className="text-xs text-slate-400 font-mono">SUB-REGISTRY // DESK-01</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t("subRegistrar.title")}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl leading-relaxed">
            {t("subRegistrar.station")}
          </p>
        </div>

        {/* Live Clock & Session Indicators */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 self-start md:self-auto">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/15 text-xs shadow-sm">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-slate-300 font-medium">{currentDate}</span>
            <span className="text-slate-600">•</span>
            <span className="font-mono font-bold text-sky-300">{currentTime}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t("subRegistrar.sessionActive")}</span>
          </div>
        </div>
      </div>

      {/* 3. Sub-Registrar Portal Command Navigation Bar */}
      <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-950/70 border border-white/15 backdrop-blur-xl overflow-x-auto">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                item.isActive
                  ? "bg-sky-400 text-slate-950 shadow-[0_0_16px_rgba(56,189,248,0.4)] font-bold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className={`w-4 h-4 ${item.isActive ? "text-slate-950 stroke-[2.5]" : "text-slate-400"}`} />
              <span>{t(item.labelKey)}</span>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
};
