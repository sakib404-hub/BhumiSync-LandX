"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowRight, FileCode2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export const SyncBanner = () => {
  const { t } = useLanguage();
  const [showSpecModal, setShowSpecModal] = React.useState(false);

  return (
    <>
      <Card
        level={1}
        className="p-6 lg:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-xl bg-white/[0.04] border border-sky-400/30 shadow-[0_12px_36px_rgba(0,0,0,0.45)]"
      >
        {/* Ambient Backlight Glow */}
        <div className="absolute -left-12 -top-12 w-48 h-48 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] shrink-0">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {t("hiw.bannerTitle")}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300/80 max-w-2xl leading-relaxed">
              {t("hiw.bannerDesc")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 relative z-10">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setShowSpecModal(!showSpecModal)}
            className="flex-1 md:flex-initial text-xs"
          >
            <FileCode2 className="h-4 w-4 mr-1.5" />
            <span>{t("hiw.btnSpec")}</span>
          </Button>

          <Link href="/verify/plot/452-1" className="flex-1 md:flex-initial">
            <Button
              type="button"
              variant="default"
              className="w-full text-xs font-bold"
            >
              <span>{t("hiw.btnVerify")}</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
        </div>
      </Card>

      {/* Protocol Spec Inline Drawer / Modal */}
      {showSpecModal && (
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-sky-400/30 font-mono text-xs text-slate-300 space-y-3 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-sky-300 font-bold">
              BhumiSync Core Consensus Protocol v4.19-SYN
            </span>
            <button
              type="button"
              onClick={() => setShowSpecModal(false)}
              className="text-slate-400 hover:text-white cursor-pointer px-2 py-0.5 rounded"
            >
              ✕ Close
            </button>
          </div>
          <p className="text-slate-400 leading-relaxed font-sans text-xs">
            The BhumiSync protocol enforces atomic settlement across two sovereign administrative ledgers:
            the Sub-Registrar deed registry and the AC Land mutation court. State transitions utilize SHA-256
            cryptographic chaining, where share encumbrances decrement automatically and lock immediately upon deed signing.
          </p>
          <div className="bg-black/50 p-3 rounded-lg border border-white/5 space-y-1 text-[11px] text-sky-400/90 overflow-x-auto">
            <div>[STATE] PRE_VALIDATE ➔ OK (NID: A10021, BIO_HASH: 0x8f...e4)</div>
            <div>[TRANSACTION] REGISTER_AND_LOCK ➔ DEED_ID: SYN-D-0001 (SHARE: 0.2500, LOCK_EXPIRY: MUT_COMPLETION)</div>
            <div>[DISPATCH] AUTO_CASE_GENERATION ➔ CASE_ID: MUT-2026-000001 ➔ SAVAR_AC_LAND_QUEUE</div>
            <div>[CONSENSUS] ATOMIC_SEAL ➔ BLOCK #84912 ➔ MERKLE_ROOT: 0x91ae...77cd</div>
          </div>
        </div>
      )}
    </>
  );
};
