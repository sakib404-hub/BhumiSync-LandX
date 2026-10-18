"use client";

import { Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const DeedsArchiveFootnote = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-4 pb-2 gap-2">
      <div className="flex items-center gap-2">
        <Lock className="w-4 h-4 text-sky-400 shrink-0" />
        <span>{t("deedsArchive.footnoteProtocol")}</span>
      </div>
      <div className="font-mono text-[11px] text-slate-400">
        {t("deedsArchive.footnoteKey")}
      </div>
    </div>
  );
};
