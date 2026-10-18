"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, UserCheck, Bell, LogOut, ArrowRight, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const CitizenProfileHeader = () => {
  const { t, language } = useLanguage();
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
    router.push("/login");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6"
    >
      {/* Top Identity & Role Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.3)] bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 flex items-center justify-center">
              <span className="text-lg font-bold text-sky-300 font-mono">RU</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
              <ShieldCheck className="w-2.5 h-2.5 text-slate-950" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-tight">
                {t("citizenLand.userVerified")}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-semibold text-emerald-400">
                <UserCheck className="w-3 h-3" />
                {language === "bn" ? "যাচাইকৃত নাগরিক" : "Sovereign Citizen"}
              </span>
            </div>
            <span className="text-xs font-mono text-sky-300/80 tracking-wider">
              {t("citizenLand.userNid")}
            </span>
          </div>
        </div>

        {/* Portal Switching Tabs & Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center rounded-xl bg-slate-950/60 p-1 border border-white/10">
            <Link
              href="/citizen/land"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all"
            >
              {t("citizenLand.title")}
            </Link>
            <Link
              href="/citizen/deeds"
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              {t("citizenDeeds.title")}
            </Link>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-400/30 text-slate-300 hover:text-red-300 text-xs font-medium transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t("citizenLand.logout")}</span>
          </button>
        </div>
      </div>

      {/* Main Title & Context Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-[11px] font-semibold tracking-wider text-sky-400 uppercase">
              <Layers className="w-3 h-3 text-sky-400" />
              {t("citizenLand.citizenTag")}
            </span>
            <span className="text-xs text-slate-400 font-mono">SYN-LEDGER // CITIZEN-VAULT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t("citizenLand.title")}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
            {t("citizenLand.subtitle")}
          </p>
        </div>

        <Link
          href="/verify"
          className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-400/10 hover:bg-sky-400/20 border border-sky-400/30 text-sky-300 text-xs font-semibold transition-all group"
        >
          <span>{language === "bn" ? "সার্বজনীন দাগ যাচাই করুন" : "Verify Public Plot"}</span>
          <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.section>
  );
};
