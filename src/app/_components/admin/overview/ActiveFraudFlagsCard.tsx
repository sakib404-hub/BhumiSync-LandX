"use client";

import { useState } from "react";
import Link from "next/link";
import { Flag, AlertTriangle, ArrowRight, Check, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FraudItem {
  id: string;
  riskTitle: string;
  badgeType: "critical" | "warning";
  plotTag: string;
  parcelTitle: string;
  description: string;
  category: "high_risk" | "geofence" | "nid_mismatch";
  dossierLink: string;
}

export const ActiveFraudFlagsCard = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "high_risk" | "geofence" | "nid_mismatch">("all");
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const fraudItems: FraudItem[] = [
    {
      id: "ff-1",
      riskTitle: t("admin.riskDoubleConveyance"),
      badgeType: "critical",
      plotTag: "Plot: Mouza SYN-Savar",
      parcelTitle: "Daag 452/1, Khatian 1187 (BS)",
      description: t("admin.riskDoubleConveyanceDesc"),
      category: "high_risk",
      dossierLink: "/verify/plot/452-1",
    },
    {
      id: "ff-2",
      riskTitle: t("admin.riskCosharerMismatch"),
      badgeType: "warning",
      plotTag: "Plot: Daag 310/2",
      parcelTitle: "Mouza SYN-Savar",
      description: t("admin.riskCosharerMismatchDesc"),
      category: "nid_mismatch",
      dossierLink: "/verify/plot/452-1",
    },
    {
      id: "ff-3",
      riskTitle: t("admin.riskBoundaryShift"),
      badgeType: "critical",
      plotTag: "Plot: Daag 119/A",
      parcelTitle: "Mouza SYN-Savar",
      description: t("admin.riskBoundaryShiftDesc"),
      category: "geofence",
      dossierLink: "/verify/plot/452-1",
    },
  ];

  const handleDismiss = (id: string, name: string) => {
    setDismissedIds((prev) => [...prev, id]);
    setActionNotice(`${name} dismissed`);
    setTimeout(() => setActionNotice(null), 3000);
  };

  const filteredItems = fraudItems
    .filter((item) => !dismissedIds.includes(item.id))
    .filter((item) => {
      if (activeFilter === "all") return true;
      return item.category === activeFilter;
    });

  return (
    <div className="rounded-2xl p-5 sm:p-6 bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <Flag className="w-5 h-5 text-rose-400" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {t("admin.fraudTitle")}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {t("admin.fraudPending")}
          </p>
        </div>
        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-[0_0_8px_rgba(244,63,94,0.3)]">
          {t("admin.fraudUrgent")}
        </span>
      </div>

      {actionNotice && (
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-400/30 text-emerald-300 text-xs flex items-center justify-between">
          <span>{actionNotice}</span>
          <Check className="w-4 h-4 text-emerald-400" />
        </div>
      )}

      {/* Filter Pills */}
      <div className="flex items-center gap-2 pb-1 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
            activeFilter === "all"
              ? "bg-sky-500/25 border border-sky-400 text-sky-200 shadow-[0_0_10px_rgba(56,189,248,0.3)]"
              : "bg-white/5 hover:bg-white/10 text-slate-400 border border-white/10"
          }`}
        >
          {t("admin.filterAll")}
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("high_risk")}
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
            activeFilter === "high_risk"
              ? "bg-rose-500/25 border border-rose-400 text-rose-200 shadow-[0_0_10px_rgba(244,63,94,0.3)]"
              : "bg-white/5 hover:bg-white/10 text-slate-400 border border-white/10"
          }`}
        >
          {t("admin.filterHighRisk")}
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("geofence")}
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
            activeFilter === "geofence"
              ? "bg-sky-500/25 border border-sky-400 text-sky-200 shadow-[0_0_10px_rgba(56,189,248,0.3)]"
              : "bg-white/5 hover:bg-white/10 text-slate-400 border border-white/10"
          }`}
        >
          {t("admin.filterGeofence")}
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("nid_mismatch")}
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
            activeFilter === "nid_mismatch"
              ? "bg-amber-500/25 border border-amber-400 text-amber-200 shadow-[0_0_10px_rgba(245,158,11,0.3)]"
              : "bg-white/5 hover:bg-white/10 text-slate-400 border border-white/10"
          }`}
        >
          {t("admin.filterNidMismatch")}
        </button>
      </div>

      {/* Cards List */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const isCritical = item.badgeType === "critical";

          return (
            <div
              key={item.id}
              className={`p-4 rounded-xl bg-slate-900/50 border transition-all space-y-2.5 ${
                isCritical
                  ? "border-rose-500/30 hover:border-rose-500/50"
                  : "border-amber-500/30 hover:border-amber-500/50"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    isCritical
                      ? "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                      : "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isCritical
                        ? "bg-rose-400 shadow-[0_0_6px_#f43f5e]"
                        : "bg-amber-400"
                    }`}
                  />
                  {item.riskTitle}
                </span>
                <span className="text-[11px] font-mono text-slate-400 truncate">
                  {item.plotTag}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <div className="text-xs sm:text-sm font-bold text-white font-mono">
                  {item.parcelTitle}
                </div>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <Link
                  href={item.dossierLink}
                  className="flex-1 text-center py-1.5 px-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-[0_0_12px_rgba(56,189,248,0.35)] hover:shadow-[0_0_18px_rgba(56,189,248,0.5)] transition-all"
                >
                  {t("admin.btnReviewDossier")}
                </Link>
                <button
                  type="button"
                  onClick={() => handleDismiss(item.id, item.riskTitle)}
                  className="py-1.5 px-3 rounded-lg bg-white/5 hover:bg-rose-500/15 text-slate-300 hover:text-rose-300 text-xs font-semibold border border-white/10 transition-colors"
                >
                  {t("admin.btnDismiss")}
                </button>
              </div>
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="py-6 text-center text-xs text-slate-400">
            No fraud flags in this category.
          </div>
        )}
      </div>
    </div>
  );
};
