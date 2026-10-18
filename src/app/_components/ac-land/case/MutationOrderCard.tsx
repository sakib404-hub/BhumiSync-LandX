"use client";

import { useState } from "react";
import {
  FileCheck2,
  Calendar,
  CheckCircle2,
  XCircle,
  Users,
  Zap,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MutationOrderCardProps {
  caseId: string;
}

export const MutationOrderCard = ({ caseId }: MutationOrderCardProps) => {
  const { t } = useLanguage();
  const [remarks, setRemarks] = useState(
    "Title verified against BS Khatian 1187. Transacted share 0.2500 correctly deducted from Rahim Uddin. Name variance cleared under Rule 12A. Mutation approved for Namzari Khatian issuance."
  );
  const [isApproving, setIsApproving] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [isSummoning, setIsSummoning] = useState(false);
  const [isSummoned, setIsSummoned] = useState(false);

  const handleApprove = () => {
    setIsApproving(true);
    setTimeout(() => {
      setIsApproving(false);
      setIsApproved(true);
    }, 1200);
  };

  const handleReject = () => {
    setIsRejecting(true);
    setTimeout(() => {
      setIsRejecting(false);
      setIsRejected(true);
    }, 1000);
  };

  const handleSummon = () => {
    setIsSummoning(true);
    setTimeout(() => {
      setIsSummoning(false);
      setIsSummoned(true);
      setTimeout(() => setIsSummoned(false), 3500);
    }, 1000);
  };

  const handleInsertTemplate = () => {
    setRemarks(
      "Title verified against BS Khatian 1187. Transacted share 0.2500 correctly deducted from Rahim Uddin. Name variance cleared under Rule 12A. Mutation approved for Namzari Khatian issuance."
    );
  };

  return (
    <div className="space-y-4">
      {/* Main Elevated Glass Card */}
      <div className="rounded-2xl bg-slate-900/70 backdrop-blur-2xl border border-sky-400/20 p-6 space-y-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Card Header */}
        <div className="pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-sky-400" />
            <h2 className="text-base sm:text-lg font-bold text-white">
              {t("mutationCase.orderTitle")}
            </h2>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {t("mutationCase.orderSubtitle")}
          </p>
        </div>

        {/* Hearing Date Status Block */}
        <div className="space-y-2">
          <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
            {t("mutationCase.hearingSchedule")}
          </label>
          <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                {t("mutationCase.hearingTime")}
              </p>
              <p className="text-[11px] text-emerald-400 mt-0.5 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t("mutationCase.hearingWaived")}</span>
              </p>
            </div>
          </div>

          {/* Kanungo Clearance Badge */}
          <div className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-emerald-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs font-semibold">
              {t("mutationCase.kanungoSurveyComplete")}
            </span>
          </div>
        </div>

        {/* Executive Order Remarks Textarea */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
              {t("mutationCase.executiveRemarks")}
            </label>
            <button
              type="button"
              onClick={handleInsertTemplate}
              className="text-[10px] text-sky-400 hover:text-sky-300 hover:underline cursor-pointer"
            >
              {t("mutationCase.insertTemplate")}
            </button>
          </div>
          <div className="relative">
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              disabled={isApproved || isRejected}
              rows={4}
              className="w-full rounded-xl bg-slate-950/80 border border-white/15 p-3 text-xs text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 leading-relaxed transition-all resize-none disabled:opacity-75"
            />
          </div>
        </div>

        {/* Actions Cluster */}
        <div className="space-y-2.5 pt-1">
          {/* Status Feedback Banners */}
          {isApproved ? (
            <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 shadow-[0_0_16px_rgba(16,185,129,0.3)]">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t("mutationCase.approvedSuccess")}</span>
            </div>
          ) : isRejected ? (
            <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{t("mutationCase.rejectSuccess")}</span>
            </div>
          ) : (
            <>
              {/* Big Glowing Approve Button */}
              <button
                type="button"
                onClick={handleApprove}
                disabled={isApproving}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.45)] hover:shadow-[0_0_28px_rgba(16,185,129,0.65)] flex items-center justify-center gap-2 text-xs sm:text-sm transition-all duration-200 active:scale-[0.99] cursor-pointer disabled:opacity-75"
              >
                {isApproving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Inscribing to Block #884,928...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t("mutationCase.btnApprove")}</span>
                  </>
                )}
              </button>

              {/* Outlined Red Reject Button */}
              <button
                type="button"
                onClick={handleReject}
                disabled={isRejecting}
                className="w-full border border-rose-500/50 text-rose-400 hover:bg-rose-500/10 font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors cursor-pointer"
              >
                <XCircle className="w-4 h-4" />
                <span>{t("mutationCase.btnReject")}</span>
              </button>
              <p className="text-[10px] text-center text-slate-500">
                {t("mutationCase.rejectHint")}
              </p>

              {/* In-person Hearing Secondary Button */}
              <button
                type="button"
                onClick={handleSummon}
                disabled={isSummoning}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors cursor-pointer"
              >
                <Users className="w-3.5 h-3.5 text-sky-400" />
                <span>
                  {isSummoned
                    ? t("mutationCase.summonSuccess")
                    : t("mutationCase.btnSummon")}
                </span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Sticky Footer Notice Banner */}
      <div className="rounded-xl p-3 border border-sky-400/20 bg-slate-950/60 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
        <div className="flex items-start gap-2 text-xs">
          <Zap className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
          <p className="text-slate-300 text-[11px] leading-relaxed">
            {t("mutationCase.approvalNotice")}
          </p>
        </div>
      </div>
    </div>
  );
};
