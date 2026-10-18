"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  AlertTriangle,
  Scale,
  Lock,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const AuditClearanceCard = () => {
  const { t } = useLanguage();
  const [showFullNote, setShowFullNote] = useState(false);

  return (
    <section className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 p-6 space-y-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-white">
            {t("mutationCase.kanungoTitle")}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {t("mutationCase.kanungoSubtitle")}
          </p>
        </div>
        <Link
          href="/sub-registrar/deed/SYN-D-0001"
          className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
        >
          <span>{t("mutationCase.expandAuditLog")}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 4 Quick Audit Chips Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Chip 1 */}
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{t("mutationCase.chip1")}</span>
        </div>

        {/* Chip 2 (Amber Transliteration Variance) */}
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs font-medium">{t("mutationCase.chip2")}</span>
        </div>

        {/* Chip 3 */}
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
          <Scale className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{t("mutationCase.chip3")}</span>
        </div>

        {/* Chip 4 */}
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
          <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{t("mutationCase.chip4")}</span>
        </div>
      </div>

      {/* Preview Note Accordion Box */}
      <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/10 flex items-start gap-3 text-xs leading-relaxed">
        <FileText className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-white font-semibold">{t("mutationCase.kanungoNoteTitle")}</p>
          <p className="text-slate-300">
            {t("mutationCase.kanungoNoteDesc")}
          </p>
        </div>
      </div>
    </section>
  );
};
