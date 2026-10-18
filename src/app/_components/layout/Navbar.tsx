"use client";

import Link from "next/link";
import { Layers, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/app/_components/layout/LanguageToggle";

export const Navbar = () => {
  const { t, language } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-400/15 bg-slate-950/40 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 p-0.5 shadow-lg shadow-blue-500/25 ring-1 ring-white/20 transition-transform group-hover:scale-105">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950/40 backdrop-blur-xs">
                <Layers className="h-5 w-5 text-blue-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
                {language === "bn" ? "ভূমি" : "Bhumi"}
                <span className="text-blue-400">{language === "bn" ? "সিঙ্ক" : "Sync"}</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-blue-300/70">
                {t("brand.tagline")}
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-blue-400/15 bg-blue-950/20 px-3 py-1.5 backdrop-blur-md">
          <Link
            href="/"
            className="rounded-full px-3.5 py-1 text-sm font-medium text-white hover:text-blue-200 hover:bg-blue-500/15 transition-all"
          >
            {t("nav.overview")}
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-full px-3.5 py-1 text-sm font-medium text-slate-300 hover:text-white hover:bg-blue-500/15 transition-all"
          >
            {t("nav.howItWorks")}
          </Link>
          <Link
            href="/verify"
            className="rounded-full px-3.5 py-1 text-sm font-medium text-slate-300 hover:text-white hover:bg-blue-500/15 transition-all"
          >
            {t("nav.verifyLand")}
          </Link>
          <Link
            href="/verify/qr"
            className="rounded-full px-3.5 py-1 text-sm font-medium text-slate-300 hover:text-white hover:bg-blue-500/15 transition-all"
          >
            {t("nav.qrVerification")}
          </Link>
        </nav>

        {/* Action & Status */}
        <div className="flex items-center gap-3">
          {/* Global Language Switcher */}
          <LanguageToggle />

          <div className="hidden sm:flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
            </span>
            <span>{t("brand.live")}</span>
          </div>

          <Link
            href="/login"
            className="flex items-center gap-1.5 rounded-xl border border-blue-400/30 bg-linear-to-r from-blue-600/80 to-indigo-600/80 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-500/20 backdrop-blur-md transition-all hover:border-blue-400/50 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30"
          >
            <span>{t("nav.accessPortal")}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

