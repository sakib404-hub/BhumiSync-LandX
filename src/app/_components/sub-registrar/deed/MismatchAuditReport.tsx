"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpellCheck, ChevronDown, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const MismatchAuditReport = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[20px] bg-white/[0.08] backdrop-blur-[20px] border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-5"
    >
      {/* Clickable Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between cursor-pointer select-none"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <SpellCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2 flex-wrap">
              <span>{t("deedDossier.auditReportTitle")}</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                {t("deedDossier.auditReportBadge")}
              </span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {t("deedDossier.auditReportSub")}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="text-slate-400 hover:text-white transition-transform p-1.5 rounded-lg hover:bg-white/5"
          aria-label="Toggle details"
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-sky-400" : ""
            }`}
          />
        </button>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Col 1 */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {t("deedDossier.nidRecordCol")}
                  </span>
                  <span className="text-sm font-bold text-white font-mono block mt-1">
                    SYN Raheem Uddin
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-2">
                  {t("deedDossier.nidRecordNote")}
                </span>
              </div>

              {/* Col 2 */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    {t("deedDossier.deedDraftCol")}
                  </span>
                  <span className="text-sm font-bold text-amber-300 font-mono block mt-1">
                    SYN Rahim Uddin
                  </span>
                </div>
                <span className="text-[11px] text-amber-200/80 block mt-2">
                  {t("deedDossier.deedDraftNote")}
                </span>
              </div>

              {/* Col 3 */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                    {t("deedDossier.subRegEndorseCol")}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white block mt-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {t("deedDossier.subRegEndorseVal")}
                  </span>
                </div>
                <span className="text-[11px] text-emerald-300/80 font-mono block mt-2">
                  {t("deedDossier.subRegEndorseNote")}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
