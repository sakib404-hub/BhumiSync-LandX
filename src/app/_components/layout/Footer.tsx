"use client";

import Link from "next/link";
import { Layers, Activity } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="relative z-10 mt-auto border-t border-blue-400/10 bg-slate-950/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/30 border border-blue-400/20 text-blue-300 shrink-0">
              <Layers className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">
              {language === "bn" ? "ভূমি" : "Bhumi"}
              <span className="text-blue-400">{language === "bn" ? "সিঙ্ক" : "Sync"}</span>
            </span>
            <span className="text-xs text-blue-300/60 sm:ml-2">
              {t("footer.rights")}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 sm:gap-x-6 gap-y-2 text-xs text-slate-400">
            <Link href="/how-it-works" className="hover:text-blue-300 transition-colors">
              {t("nav.howItWorks")}
            </Link>
            <Link href="/verify" className="hover:text-blue-300 transition-colors">
              {t("nav.verifyLand")}
            </Link>
            <Link href="/login" className="hover:text-blue-300 transition-colors">
              {t("nav.accessPortal")}
            </Link>
            <div className="flex items-center gap-1.5 text-blue-400/80">
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              <span>{t("footer.operational")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

