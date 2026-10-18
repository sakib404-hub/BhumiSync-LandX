"use client";

import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const QueueCharterFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-2 py-3 px-4 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
      <div className="flex items-center gap-2 text-center sm:text-left">
        <ShieldAlert className="w-4 h-4 text-sky-400 shrink-0" />
        <span>{t("acLandQueue.charterSla")}</span>
      </div>
      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 shrink-0">
        <span>{t("acLandQueue.tlsCert")}</span>
        <span>•</span>
        <span>{t("acLandQueue.bacsGateway")}</span>
      </div>
    </footer>
  );
};
