"use client";

import { useState } from "react";
import { Gavel, Download, Plus, CheckCircle2, Loader2, X, Calendar, Clock, MapPin, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const HearingsHeaderBanner = () => {
  const { t, language } = useLanguage();
  const [isExporting, setIsExporting] = useState(false);
  const [showExportToast, setShowExportToast] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [scheduledSuccess, setScheduledSuccess] = useState(false);

  // Form states for ad-hoc scheduling
  const [caseNo, setCaseNo] = useState("MUT-2026-000042");
  const [date, setDate] = useState("2024-10-22");
  const [time, setTime] = useState("11:30");
  const [courtRoom, setCourtRoom] = useState("Room 204");
  const [hearingType, setHearingType] = useState("Boundary Overlap Review");

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setShowExportToast(true);
      setTimeout(() => setShowExportToast(false), 3500);
    }, 1200);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduledSuccess(true);
    setTimeout(() => {
      setScheduledSuccess(false);
      setIsScheduleOpen(false);
    }, 1500);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.25)]">
              <Gavel className="w-5 h-5 text-sky-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {t("mutationHearings.title")}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-3xl">
            {t("mutationHearings.subtitle")}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleExport}
            disabled={isExporting}
            className="rounded-xl px-4 py-2.5 bg-slate-900/60 backdrop-blur-xl border border-white/15 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex items-center gap-2 active:scale-[0.98] disabled:opacity-60"
          >
            {isExporting ? (
              <Loader2 className="w-4 h-4 text-sky-400 animate-spin" />
            ) : (
              <Download className="w-4 h-4 text-sky-400" />
            )}
            <span>
              {isExporting ? t("mutationHearings.exporting") : t("mutationHearings.exportCsv")}
            </span>
          </button>

          <button
            onClick={() => setIsScheduleOpen(true)}
            className="rounded-xl px-4 py-2.5 bg-sky-400 text-slate-950 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:bg-sky-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4 text-slate-950 stroke-[3]" />
            <span>{t("mutationHearings.scheduleHearing")}</span>
          </button>
        </div>
      </div>

      {/* Export Notification Toast */}
      <AnimatePresence>
        {showExportToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-3 rounded-xl bg-teal-500/20 border border-teal-400/40 text-teal-200 flex items-center gap-2 text-xs sm:text-sm shadow-[0_0_16px_rgba(20,184,166,0.3)]"
          >
            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
            <span>{t("mutationHearings.exported")}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Ad-hoc Hearing Modal */}
      <AnimatePresence>
        {isScheduleOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsScheduleOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg rounded-2xl bg-slate-900/90 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {language === "bn" ? "নতুন নামজারি শুনানি নির্ধারণ" : "Schedule Ad-hoc Hearing"}
                  </h3>
                </div>
                <button
                  onClick={() => setIsScheduleOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {scheduledSuccess ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-white">
                    {language === "bn"
                      ? "শুনানি নির্ধারিত হয়েছে এবং উভয় পক্ষকে ডিজিটাল সমন প্রেরণ করা হয়েছে!"
                      : "Hearing Scheduled & Digital Summons Issued Successfully!"}
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    Session: {caseNo} • {date} at {time} ({courtRoom})
                  </p>
                </div>
              ) : (
                <form onSubmit={handleScheduleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {language === "bn" ? "কেস নম্বর" : "Mutation Case ID"}
                    </label>
                    <input
                      type="text"
                      value={caseNo}
                      onChange={(e) => setCaseNo(e.target.value)}
                      required
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950/60 border border-white/15 text-sm text-white focus:outline-none focus:border-sky-400 font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        <span>{language === "bn" ? "শুনানির তারিখ" : "Hearing Date"}</span>
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950/60 border border-white/15 text-sm text-white focus:outline-none focus:border-sky-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-sky-400" />
                        <span>{language === "bn" ? "সময়" : "Time"}</span>
                      </label>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950/60 border border-white/15 text-sm text-white focus:outline-none focus:border-sky-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-sky-400" />
                        <span>{language === "bn" ? "এজলাস কক্ষ" : "Court Bench"}</span>
                      </label>
                      <select
                        value={courtRoom}
                        onChange={(e) => setCourtRoom(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950/60 border border-white/15 text-sm text-white focus:outline-none focus:border-sky-400"
                      >
                        <option value="Room 201">Bench Room 201</option>
                        <option value="Room 202">Chamber Room 202</option>
                        <option value="Room 204">Main Court 204</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-sky-400" />
                        <span>{language === "bn" ? "শুনানির ধরন" : "Hearing Type"}</span>
                      </label>
                      <select
                        value={hearingType}
                        onChange={(e) => setHearingType(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950/60 border border-white/15 text-sm text-white focus:outline-none focus:border-sky-400"
                      >
                        <option value="Boundary Overlap Review">Boundary Overlap Review</option>
                        <option value="Khatian Heir Contest">Khatian Heir Contest</option>
                        <option value="Routine Title Inscription">Routine Title Inscription</option>
                        <option value="Survey Map Discrepancy">Survey Map Discrepancy</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsScheduleOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {language === "bn" ? "বাতিল" : "Cancel"}
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-sky-400 text-slate-950 text-xs sm:text-sm font-bold shadow-[0_0_16px_rgba(56,189,248,0.35)] hover:bg-sky-300 transition-all"
                    >
                      {language === "bn" ? "সমন ও সময়সূচি নিশ্চিত করুন" : "Confirm & Issue Summons"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
