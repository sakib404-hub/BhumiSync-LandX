"use client";

import { useState } from "react";
import {
  MapPin,
  Lock,
  User,
  BadgeCheck,
  ChevronDown,
  Plus,
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface FormProps {
  onRegisterSuccess?: () => void;
  onDraftSaved?: () => void;
}

export const DeedExecutionForm = ({
  onRegisterSuccess,
  onDraftSaved,
}: FormProps) => {
  const { t, language } = useLanguage();

  const [selectedBuyer, setSelectedBuyer] = useState<"karim" | "tariqul">("karim");
  const [buyerDropdownOpen, setBuyerDropdownOpen] = useState(false);
  const [acknowledged, setAcknowledged] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);
  const [isRevalidating, setIsRevalidating] = useState(false);
  const [revalidated, setRevalidated] = useState(false);
  const [newPartyModal, setNewPartyModal] = useState(false);
  const [customBuyerName, setCustomBuyerName] = useState("");
  const [customBuyerNid, setCustomBuyerNid] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acknowledged) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onRegisterSuccess) onRegisterSuccess();

      // Trigger global alert
      const alertData = {
        type: "success",
        title: language === "bn" ? "দলিল নিবন্ধিত ও লকড!" : "Deed Registered & Locked!",
        message: t("registerDeed.successAlert"),
      };
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("bhumisync_alert", { detail: alertData })
        );
      }

      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  const handleSaveDraft = () => {
    setDraftSaved(true);
    if (onDraftSaved) onDraftSaved();
    setTimeout(() => setDraftSaved(false), 3000);
  };

  const handleRevalidate = () => {
    setIsRevalidating(true);
    setTimeout(() => {
      setIsRevalidating(false);
      setRevalidated(true);
      setTimeout(() => setRevalidated(false), 3000);
    }, 900);
  };

  return (
    <section className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="p-5 sm:p-7 rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col gap-5"
      >
        {/* Card Header & Scope */}
        <div className="border-b border-white/10 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t("registerDeed.formTitle")}
            </h2>
            <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/40 text-sky-300 text-xs font-semibold">
              {t("registerDeed.khatianBadge")}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {t("registerDeed.formSubtitle")}
          </p>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-4 sm:gap-5">
          {/* Field 1: Cadastral Parcel Identification (Read-only Anchor) */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 tracking-wider uppercase">
              <span>{t("registerDeed.parcelLabel")}</span>
              <span className="text-emerald-400 flex items-center gap-1 font-bold text-[10px]">
                <Lock className="w-3 h-3" /> {t("registerDeed.immutableRecord")}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-white/15 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t("registerDeed.parcelVal")}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {t("registerDeed.parcelJurisdiction")}
                  </div>
                </div>
              </div>
              <span className="self-start sm:self-center px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-medium flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {t("registerDeed.validatedPlot")}
              </span>
            </div>
          </div>

          {/* Field 2: Seller Identity (Prefilled with Verified Badge) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
              {t("registerDeed.sellerLabel")}
            </label>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white flex items-center gap-2 flex-wrap">
                    <span>{t("registerDeed.sellerName")}</span>
                    <span className="text-xs text-slate-400 font-normal font-mono">
                      {t("registerDeed.sellerNid")}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {t("registerDeed.sellerShare")}
                  </div>
                </div>
              </div>
              <span className="self-start sm:self-center px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold shrink-0">
                {t("registerDeed.biometricVerified")}
              </span>
            </div>
          </div>

          {/* Field 3: Buyer Identity (Searchable Selector) */}
          <div className="flex flex-col gap-1.5 relative">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                {t("registerDeed.buyerLabel")}
              </label>
              <button
                type="button"
                onClick={() => setNewPartyModal(true)}
                className="text-sky-300 text-xs font-semibold hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t("registerDeed.newParty")}</span>
              </button>
            </div>

            {/* Buyer Select Trigger */}
            <div
              onClick={() => setBuyerDropdownOpen(!buyerDropdownOpen)}
              className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/50 border border-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.20)] cursor-pointer hover:border-sky-300 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    {customBuyerName ||
                      (selectedBuyer === "karim"
                        ? t("registerDeed.buyerName")
                        : t("registerDeed.buyerName2"))}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {customBuyerNid ||
                      (selectedBuyer === "karim"
                        ? t("registerDeed.buyerNid")
                        : t("registerDeed.buyerNid2"))}
                  </div>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-sky-400 transition-transform ${
                  buyerDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {buyerDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute top-full left-0 right-0 mt-2 z-20 rounded-xl bg-slate-950/95 backdrop-blur-2xl border border-sky-400/30 p-2 shadow-2xl flex flex-col gap-1"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedBuyer("karim");
                      setCustomBuyerName("");
                      setCustomBuyerNid("");
                      setBuyerDropdownOpen(false);
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                      selectedBuyer === "karim" && !customBuyerName
                        ? "bg-sky-500/20 text-white"
                        : "hover:bg-white/5 text-slate-300"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{t("registerDeed.buyerName")}</div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {t("registerDeed.buyerNid")}
                      </div>
                    </div>
                    {selectedBuyer === "karim" && !customBuyerName && (
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedBuyer("tariqul");
                      setCustomBuyerName("");
                      setCustomBuyerNid("");
                      setBuyerDropdownOpen(false);
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                      selectedBuyer === "tariqul" && !customBuyerName
                        ? "bg-sky-500/20 text-white"
                        : "hover:bg-white/5 text-slate-300"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{t("registerDeed.buyerName2")}</div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {t("registerDeed.buyerNid2")}
                      </div>
                    </div>
                    {selectedBuyer === "tariqul" && !customBuyerName && (
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Fields 4 & 5: Share to Sell and Deed Number (2-Column Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field 4: Transacted Share */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                {t("registerDeed.shareSoldLabel")}
              </label>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/15 flex flex-col justify-center">
                <div className="text-base sm:text-lg font-bold text-sky-400">
                  0.2500{" "}
                  <span className="text-xs font-normal text-slate-400">
                    ({language === "bn" ? "৪ আনা" : "4 anna"})
                  </span>
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-0.5">
                  {t("registerDeed.retainedShare")}
                </div>
              </div>
            </div>

            {/* Field 5: Deed Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
                {t("registerDeed.deedNoLabel")}
              </label>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/15 flex items-center justify-between">
                <div>
                  <div className="text-base sm:text-lg font-mono font-bold text-white tracking-tight">
                    {t("registerDeed.deedNoVal")}
                  </div>
                  <div className="text-xs text-slate-400">
                    {t("registerDeed.deedClass")}
                  </div>
                </div>
                <BadgeCheck className="w-5 h-5 text-sky-400 shrink-0" />
              </div>
            </div>
          </div>

          {/* Validation Alert Box (Amber Glass) */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-md flex flex-col gap-2.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold flex items-center gap-1.5 shrink-0">
                <AlertTriangle className="w-3.5 h-3.5" />
                {t("registerDeed.warningTitle")}
              </span>
              <span className="text-xs text-slate-300">
                {t("registerDeed.warningDesc")}
              </span>
            </div>

            <label className="flex items-center gap-3 cursor-pointer pt-2 border-t border-amber-500/20 text-xs text-white">
              <input
                type="checkbox"
                checked={acknowledged}
                onChange={(e) => setAcknowledged(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-900 border-white/30 text-sky-500 focus:ring-sky-400 cursor-pointer shrink-0"
              />
              <span>{t("registerDeed.acknowledgeCheckbox")}</span>
            </label>
          </div>

          {/* Feedback states */}
          {draftSaved && (
            <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-400/30 text-xs text-sky-300 font-semibold">
              ✓ {t("registerDeed.draftSaved")}
            </div>
          )}
          {revalidated && (
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-xs text-emerald-300 font-semibold">
              ✓ {t("registerDeed.revalidated")}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2 flex-wrap">
            {/* Primary CTA */}
            <button
              type="submit"
              disabled={isSubmitting || !acknowledged}
              className="flex-1 min-w-[200px] py-3 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(56,189,248,0.50)] hover:shadow-[0_0_30px_rgba(56,189,248,0.70)] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                  <span>{language === "bn" ? "নিবন্ধিত হচ্ছে..." : "Locking Escrow..."}</span>
                </>
              ) : submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>{language === "bn" ? "নিবন্ধন সম্পন্ন!" : "Deed Registered!"}</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>{t("registerDeed.btnRegisterLock")}</span>
                </>
              )}
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={handleSaveDraft}
              className="py-3 px-4 sm:px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              {t("registerDeed.btnSaveDraft")}
            </button>

            {/* Re-validate button */}
            <button
              type="button"
              onClick={handleRevalidate}
              disabled={isRevalidating}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white border border-white/20 transition-colors cursor-pointer"
              title={t("registerDeed.btnRevalidate")}
            >
              <RotateCcw
                className={`w-4 h-4 ${isRevalidating ? "animate-spin text-sky-400" : ""}`}
              />
            </button>
          </div>
        </form>
      </motion.div>

      {/* New Party Modal */}
      <AnimatePresence>
        {newPartyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md p-6 rounded-2xl bg-slate-900/95 border border-white/20 shadow-2xl flex flex-col gap-4 text-white"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-bold flex items-center gap-2">
                  <Plus className="w-4 h-4 text-sky-400" />
                  <span>{language === "bn" ? "নতুন পক্ষ যুক্ত করুন" : "Add Transferee / Buyer"}</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setNewPartyModal(false)}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-xs text-slate-400">
                    {language === "bn" ? "পূর্ণ নাম" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    value={customBuyerName}
                    onChange={(e) => setCustomBuyerName(e.target.value)}
                    placeholder="e.g. SYN Farhana Akter"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400">
                    {language === "bn" ? "জাতীয় পরিচয়পত্র নম্বর (NID)" : "National ID (NID)"}
                  </label>
                  <input
                    type="text"
                    value={customBuyerNid}
                    onChange={(e) => setCustomBuyerNid(e.target.value)}
                    placeholder="e.g. SYN-NID-C30089"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setNewPartyModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 text-xs font-semibold hover:bg-white/15"
                >
                  {language === "bn" ? "বাতিল" : "Cancel"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (customBuyerName) {
                      setNewPartyModal(false);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-sky-500 text-slate-950 text-xs font-bold hover:bg-sky-400"
                >
                  {language === "bn" ? "যুক্ত করুন" : "Add Party"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
