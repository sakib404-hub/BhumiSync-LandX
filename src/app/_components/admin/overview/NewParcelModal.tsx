"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  PlusCircle,
  CheckCircle2,
  Shield,
  Layers,
  Sparkles,
  Building2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NewParcelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewParcelModal = ({ isOpen, onClose }: NewParcelModalProps) => {
  const { t, language } = useLanguage();
  const [district, setDistrict] = useState("Dhaka");
  const [upazila, setUpazila] = useState("Savar");
  const [mouza, setMouza] = useState("SYN-Savar (JL 89)");
  const [daagNo, setDaagNo] = useState("");
  const [khatianNo, setKhatianNo] = useState("");
  const [totalArea, setTotalArea] = useState("");
  const [landClass, setLandClass] = useState("Commercial");
  const [isMinting, setIsMinting] = useState(false);
  const [mintResult, setMintResult] = useState<string | null>(null);

  const handleMintParcel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!daagNo.trim()) return;

    setIsMinting(true);
    setTimeout(() => {
      setIsMinting(false);
      const generatedHash =
        "0x" +
        Array.from({ length: 40 }, () =>
          Math.floor(Math.random() * 16).toString(16)
        ).join("");
      setMintResult(generatedHash);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setMintResult(null);
    setDaagNo("");
    setKhatianNo("");
    setTotalArea("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl rounded-2xl bg-slate-950/95 border border-white/20 p-6 shadow-2xl shadow-sky-950/40"
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500/30 to-blue-600/30 border border-sky-400/40 flex items-center justify-center text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.35)] shrink-0">
                  <Shield className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {t("admin.modalNewParcelTitle")}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {t("admin.modalNewParcelDesc")}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Success State or Form */}
            {mintResult ? (
              <div className="py-6 space-y-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">
                    {t("admin.parcelCreated")}
                  </h4>
                  <p className="text-xs text-slate-400">
                    Daag {daagNo} • {mouza} • Khatian {khatianNo || "1187 (BS)"}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-left space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    Genesis Block Hash
                  </span>
                  <p className="font-mono text-xs text-sky-300 break-all select-all">
                    {mintResult}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-[0_0_16px_rgba(56,189,248,0.4)] transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleMintParcel} className="mt-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t("admin.district")}
                    </label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-xl bg-slate-900/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t("admin.upazila")}
                    </label>
                    <input
                      type="text"
                      value={upazila}
                      onChange={(e) => setUpazila(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-xl bg-slate-900/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t("admin.mouza")}
                    </label>
                    <input
                      type="text"
                      value={mouza}
                      onChange={(e) => setMouza(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-xl bg-slate-900/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t("admin.daagNo")} *
                    </label>
                    <input
                      type="text"
                      value={daagNo}
                      onChange={(e) => setDaagNo(e.target.value)}
                      placeholder="e.g. 452/1 or 589"
                      required
                      className="w-full px-3 py-2 rounded-xl bg-slate-900/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t("admin.khatianNo")}
                    </label>
                    <input
                      type="text"
                      value={khatianNo}
                      onChange={(e) => setKhatianNo(e.target.value)}
                      placeholder="e.g. 1187 (BS)"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t("admin.totalArea")}
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={totalArea}
                      onChange={(e) => setTotalArea(e.target.value)}
                      placeholder="e.g. 24.50"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t("admin.landClass")}
                  </label>
                  <select
                    value={landClass}
                    onChange={(e) => setLandClass(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
                  >
                    <option value="Commercial">Commercial (বাণিজ্যিক)</option>
                    <option value="Residential">Residential (আবাসিক)</option>
                    <option value="Agricultural">Agricultural (কৃষি)</option>
                    <option value="Waterbody">Waterbody / Canal (জলাশয় / খাল)</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs sm:text-sm font-semibold border border-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isMinting || !daagNo.trim()}
                    className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 text-xs sm:text-sm font-bold shadow-[0_0_16px_rgba(56,189,248,0.4)] transition-all flex items-center gap-2"
                  >
                    {isMinting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Minting...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>{t("admin.btnCreateParcel")}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
