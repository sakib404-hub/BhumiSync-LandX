"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const QrBreadcrumbHeader = () => {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
      {/* Back Button & Breadcrumb Strata */}
      <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-slate-400">
        <Link
          href="/verify"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white text-xs font-semibold backdrop-blur-md transition-all group"
        >
          <ArrowLeft className="h-3.5 w-3.5 text-sky-400 group-hover:-translate-x-0.5 transition-transform" />
          <span>{t("verify.backToSearch")}</span>
        </Link>
        <ChevronRight className="h-3 w-3 text-slate-600 hidden sm:inline" />
        <span className="text-slate-300 hidden sm:inline">{t("qr.breadcrumbSubRegistry")}</span>
        <ChevronRight className="h-3 w-3 text-slate-600 hidden sm:inline" />
        <span className="text-sky-300 font-semibold bg-slate-900/60 px-2 py-0.5 rounded border border-white/10 font-mono text-xs">
          {t("qr.breadcrumbDeed")}
        </span>
      </div>

      {/* Instant Scan Signal Pulse Badge */}
      <div className="inline-flex items-center gap-2 self-start md:self-auto px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
        </span>
        <span className="text-xs font-semibold tracking-wide">
          {t("qr.instantScan")}
        </span>
      </div>
    </section>
  );
};
