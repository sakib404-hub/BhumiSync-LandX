"use client";

import { X, Code, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface PayloadInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: any;
}

export const PayloadInspectorModal = ({
  isOpen,
  onClose,
  event,
}: PayloadInspectorModalProps) => {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  if (!isOpen || !event) return null;

  const jsonPayload = JSON.stringify(
    {
      eventId: event.id,
      eventType: event.type,
      timestamp: event.timestampIso || "2026-10-18T11:42:10.892Z",
      sourceNode: "SAV-SUBREG-01",
      destinationNode: event.targetNode || "ACL-DH-04",
      cadastralPayload: {
        deedId: "SYN-D-0001",
        daagNo: "452/1",
        khatianNo: "1187",
        mouza: "SYN-Savar",
        transactedShare: 0.25,
        sellerNid: "SYN-NID-A10021",
        buyerNid: "SYN-NID-B20045",
      },
      consensusSignatures: [
        {
          authority: "Savar Sub-Registry",
          signature: "0x89ab...ef12",
          timestamp: "2026-10-18T11:42:08Z",
        },
      ],
      retryMetadata: {
        attemptCount: event.attempts || 3,
        lastError: event.lastError || "HTTP 504 Gateway Timeout: AC Land Court ACK timeout",
        backoffSeconds: 60,
      },
    },
    null,
    2
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonPayload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0b172a] border border-white/20 shadow-[0_16px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(56,189,248,0.2)] p-6 overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <Code className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>{language === "bn" ? "রিলে ইভেন্ট পেলোড পরিদর্শক" : "Relay Event Envelope Payload"}</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  {event.id}
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === "bn"
                  ? "সাভার সাব-রেজিস্ট্রার ও এসি ল্যান্ডের মধ্যকার ইন্টার-এজেন্সি ইভেন্ট প্যাকেট"
                  : "Signed JSON-LD event schema dispatched over secure internal message queue."}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* JSON Code Viewer */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>application/cloudevents+json</span>
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? "Copied!" : "Copy JSON"}</span>
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-slate-950/90 border border-white/10 text-sky-300 font-mono text-xs overflow-x-auto max-h-80 leading-relaxed scrollbar-thin">
            {jsonPayload}
          </pre>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">
            Idempotency Key: {event.id}-savar-cadastre-2026
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all shadow-md"
          >
            {language === "bn" ? "বন্ধ করুন" : "Close Viewer"}
          </button>
        </div>
      </div>
    </div>
  );
};
