"use client";

import * as React from "react";
import Link from "next/link";
import { QrCode, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const QrBreadcrumbHeader = () => {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
      {/* Breadcrumb Strata */}
      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
        <Link
          href="/how-it-works"
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <QrCode className="h-3.5 w-3.5 text-sky-400" />
          <span>{t("qr.breadcrumbLedger")}</span>
        </Link>
        <ChevronRight className="h-3 w-3 text-slate-600" />
        <span className="text-slate-300">{t("qr.breadcrumbSubRegistry")}</span>
        <ChevronRight className="h-3 w-3 text-slate-600" />
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
