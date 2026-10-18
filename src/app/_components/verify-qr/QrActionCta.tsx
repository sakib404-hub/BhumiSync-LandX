"use client";

import * as React from "react";
import Link from "next/link";
import { Download, ExternalLink, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export const QrActionCta = () => {
  const { t } = useLanguage();
  const [downloading, setDownloading] = React.useState(false);
  const [downloadComplete, setDownloadComplete] = React.useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadComplete(true);
      setTimeout(() => setDownloadComplete(false), 2500);
    }, 1000);
  };

  return (
    <section className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
      {/* Primary Action CTA */}
      <Button
        type="button"
        variant="default"
        onClick={handleDownload}
        disabled={downloading}
        className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.4)]"
      >
        {downloading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Generating Cryptographic PDF...</span>
          </>
        ) : downloadComplete ? (
          <>
            <Check className="h-4 w-4 text-emerald-950 stroke-[3]" />
            <span>Dossier Downloaded Successfully</span>
          </>
        ) : (
          <>
            <Download className="h-4 w-4" />
            <span>{t("qr.downloadDossier")}</span>
          </>
        )}
      </Button>

      {/* Secondary Action CTA */}
      <Link href="/verify/plot/452-1" className="w-full sm:w-auto">
        <Button
          type="button"
          variant="secondary"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
        >
          <ExternalLink className="h-4 w-4" />
          <span>{t("qr.inspectLedger")}</span>
        </Button>
      </Link>
    </section>
  );
};
