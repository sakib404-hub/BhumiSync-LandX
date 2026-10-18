"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Fingerprint,
  UserCheck,
  RotateCcw,
  Lock,
  Loader2,
  Check,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const EnrollPartyForm = () => {
  const { t } = useLanguage();

  const [fullName, setFullName] = useState("SYN Rahim Uddin");
  const [nidNumber, setNidNumber] = useState("SYN-NID-A10021");
  const [phoneNumber, setPhoneNumber] = useState("+880 1711-098234");
  const [selectedRole, setSelectedRole] = useState("seller");
  const [isScanningThumb, setIsScanningThumb] = useState(false);
  const [thumbAcquired, setThumbAcquired] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Check if current NID triggers duplicate warning (e.g. A10021 or containing 452/1 reference)
  const showNidWarning = nidNumber.trim().toUpperCase() === "SYN-NID-A10021" || nidNumber.trim().toUpperCase().includes("A10021");

  const handleAcquireThumb = () => {
    setIsScanningThumb(true);
    setTimeout(() => {
      setIsScanningThumb(false);
      setThumbAcquired(true);
    }, 1200);
  };

  const handleReset = () => {
    setFullName("");
    setNidNumber("");
    setPhoneNumber("");
    setSelectedRole("seller");
    setThumbAcquired(false);
    setSubmitSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      {/* Main Glass Panel Form */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl p-5 sm:p-6 bg-white/[0.04] backdrop-blur-xl border border-white/15 relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      >
        {/* Atmosphere glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-sky-400" />
              <span>{t("partiesRegistry.formTitle")}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {t("partiesRegistry.formSubtitle")}
            </p>
          </div>
          <span className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-white/5 text-slate-400 border border-white/10 shrink-0">
            {t("partiesRegistry.formVersion")}
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mt-5 relative z-10">
          {/* Field 1: Full Legal Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              {t("partiesRegistry.labelFullName")} <span className="text-sky-400">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t("partiesRegistry.placeholderFullName")}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-white/15 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white placeholder:text-slate-500 text-sm transition-all outline-none"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {t("partiesRegistry.nameHelp")}
            </p>
          </div>

          {/* Field 2: Sovereign NID & CRITICAL INLINE AMBER WARNING */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-200">
                {t("partiesRegistry.labelNid")} <span className="text-sky-400">*</span>
              </label>
              <span className="text-[10px] font-mono font-bold text-sky-400 tracking-wider bg-sky-500/10 px-2 py-0.5 rounded border border-sky-400/20">
                {t("partiesRegistry.formatNid")}
              </span>
            </div>
            <div className="relative">
              <input
                type="text"
                value={nidNumber}
                onChange={(e) => setNidNumber(e.target.value)}
                placeholder={t("partiesRegistry.placeholderNid")}
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border font-mono text-sm transition-all outline-none ${
                  showNidWarning
                    ? "border-amber-400/70 text-amber-200 focus:border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                    : "border-white/15 text-white focus:border-sky-400"
                }`}
                required
              />
              {showNidWarning && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-amber-400">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* CRITICAL INLINE AMBER WARNING - Rule and Stitch Screen Explicit Match */}
            <AnimatePresence>
              {showNidWarning && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/35 text-amber-300 text-xs flex items-start gap-2.5 shadow-[0_0_16px_rgba(245,158,11,0.15)] overflow-hidden"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <span className="font-bold text-amber-200">
                      {t("partiesRegistry.warningNidTitle")}{" "}
                    </span>
                    <span>{t("partiesRegistry.warningNidDesc")}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Field 3: Mobile Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              {t("partiesRegistry.labelPhone")} <span className="text-sky-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={t("partiesRegistry.placeholderPhone")}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-white/15 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 text-white placeholder:text-slate-500 text-sm transition-all outline-none"
                required
              />
            </div>
          </div>

          {/* Field 4: Party Role Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-200 mb-1.5">
              {t("partiesRegistry.labelRole")} <span className="text-sky-400">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { id: "seller", label: t("partiesRegistry.roleSeller") },
                { id: "buyer", label: t("partiesRegistry.roleBuyer") },
                { id: "heir", label: t("partiesRegistry.roleHeir") },
                { id: "poa", label: t("partiesRegistry.rolePoa") },
              ].map((role) => (
                <label
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-all ${
                    selectedRole === role.id
                      ? "bg-sky-500/15 border-sky-400 text-sky-300 font-semibold shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                      : "bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <input
                    type="radio"
                    name="party_role"
                    checked={selectedRole === role.id}
                    onChange={() => setSelectedRole(role.id)}
                    className="accent-sky-400 h-3.5 w-3.5"
                  />
                  <span className="text-xs">{role.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Biometric Sensor Live Status & Acquisition */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                  thumbAcquired
                    ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                    : "bg-sky-500/10 border-sky-400/20 text-sky-400"
                }`}
              >
                <Fingerprint className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-200 block">
                  {t("partiesRegistry.sensorTitle")}
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  {thumbAcquired
                    ? t("partiesRegistry.thumbSuccess")
                    : t("partiesRegistry.sensorCalibrated")}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAcquireThumb}
              disabled={isScanningThumb}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border shrink-0 ${
                thumbAcquired
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                  : "bg-white/10 hover:bg-white/15 text-white border-white/20"
              }`}
            >
              {isScanningThumb ? (
                <span className="flex items-center gap-1.5">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
                  {t("partiesRegistry.thumbScanning")}
                </span>
              ) : thumbAcquired ? (
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  {t("partiesRegistry.thumbSuccess")}
                </span>
              ) : (
                t("partiesRegistry.btnAcquireThumb")
              )}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.45)] transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>{t("partiesRegistry.savingParty")}</span>
                </>
              ) : submitSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>{t("partiesRegistry.partySaved")}</span>
                </>
              ) : (
                <>
                  <UserCheck className="w-4 h-4 text-slate-950" />
                  <span>{t("partiesRegistry.btnSaveParty")}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-2 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white font-medium text-xs transition-colors text-center flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t("partiesRegistry.btnResetForm")}</span>
            </button>
          </div>
        </form>
      </motion.div>

      {/* Verification Pipeline Insight Box */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl p-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 flex items-center justify-between text-xs"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-400 shrink-0">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <span className="text-white font-semibold block">
              {t("partiesRegistry.lockTitle")}
            </span>
            <span className="text-slate-400 text-[11px]">
              {t("partiesRegistry.lockDesc")}
            </span>
          </div>
        </div>

        <span className="text-[10px] font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 tracking-wider">
          {t("partiesRegistry.lockActive")}
        </span>
      </motion.div>
    </div>
  );
};
