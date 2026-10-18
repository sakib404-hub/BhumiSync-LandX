"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Eye,
  X,
  Printer,
  ExternalLink,
  Layers,
  ArrowRight,
  Gavel,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface HistoryRecord {
  caseNo: string;
  dakhilaNo: string;
  deedNo: string;
  subRegistry: string;
  mouza: string;
  daag: string;
  khatian: string;
  transferor: string;
  transferorId: string;
  transferee: string;
  transfereeId: string;
  share: string;
  area: string;
  decision: "Approved" | "Rejected";
  decisionSub: string;
  disposalDate: string;
  disposalTime: string;
  sealHash: string;
  rawSealHash: string;
  isCanonical?: boolean;
}

interface HistoryLedgerTableProps {
  searchQuery: string;
  activeFilter: string;
  sortBy: string;
}

export const HistoryLedgerTable = ({
  searchQuery,
  activeFilter,
  sortBy,
}: HistoryLedgerTableProps) => {
  const { t, language } = useLanguage();
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [selectedRecord, setSelectedRecord] = useState<HistoryRecord | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const records: HistoryRecord[] = [
    {
      caseNo: "MUT-2026-000001",
      dakhilaNo: "Namzari Dakhila #998",
      deedNo: "Deed SYN-D-0001",
      subRegistry: "Savar Sub-Registry",
      mouza: "SYN-Savar",
      daag: "452/1",
      khatian: "Khatian 1187 (BS Survey)",
      transferor: "SYN Rahim Uddin",
      transferorId: "A10021",
      transferee: "SYN Karim Hossain",
      transfereeId: "B20045",
      share: "Share 0.2500 (4 anna)",
      area: "8.25 Decimals",
      decision: "Approved",
      decisionSub: "Namzari Khatian 1187/1",
      disposalDate: "18 Oct 2024",
      disposalTime: "11:42 AM IST",
      sealHash: "0x4a12...89bf",
      rawSealHash: "0x4a129d38cbb2f41982ea91054b73e86c87e148dfa009124483726194781689bf",
      isCanonical: true,
    },
    {
      caseNo: "MUT-2026-000002",
      dakhilaNo: "Namzari Dakhila #999",
      deedNo: "Deed SYN-D-0002",
      subRegistry: "Savar Sub-Registry",
      mouza: "SYN-Savar",
      daag: "480/2",
      khatian: "Khatian 942 (BS Survey)",
      transferor: "SYN M. Alam",
      transferorId: "C30012",
      transferee: "SYN J. Abedin",
      transfereeId: "D40023",
      share: "Share 0.1250 (2 anna)",
      area: "4.12 Decimals",
      decision: "Approved",
      decisionSub: "Namzari Khatian 942/3",
      disposalDate: "17 Oct 2024",
      disposalTime: "03:15 PM IST",
      sealHash: "0x7b23...cd11",
      rawSealHash: "0x7b230283401fa940e439502dfd8471b0cd481023941aeb0193481230491acd11",
      isCanonical: false,
    },
    {
      caseNo: "MUT-2026-000004",
      dakhilaNo: "Contested Order",
      deedNo: "Deed SYN-D-8894",
      subRegistry: "Savar Sub-Registry",
      mouza: "SYN-Savar",
      daag: "310/2",
      khatian: "Khatian 610 (CS Survey)",
      transferor: "SYN Jamir Ali",
      transferorId: "E50034",
      transferee: "SYN Farhana Akter",
      transfereeId: "F60045",
      share: "Share 0.5000",
      area: "16.50 Decimals",
      decision: "Rejected",
      decisionSub: "Boundary Overlap Claimed",
      disposalDate: "16 Oct 2024",
      disposalTime: "05:10 PM IST",
      sealHash: "0x9c44...ee20",
      rawSealHash: "0x9c44018247901dae98342104593efc8104928bccaee89104829104812034ee20",
      isCanonical: false,
    },
    {
      caseNo: "MUT-2026-000008",
      dakhilaNo: "Judicial Injunction",
      deedNo: "Deed SYN-D-8712",
      subRegistry: "Savar Sub-Registry",
      mouza: "SYN-Savar",
      daag: "119/A",
      khatian: "Khatian 334 (RS Survey)",
      transferor: "SYN A. Chowdhury",
      transferorId: "G70056",
      transferee: "5 Co-sharers",
      transfereeId: "HEIRS",
      share: "Share 0.3333",
      area: "11.00 Decimals",
      decision: "Rejected",
      decisionSub: "Injunction & Heir Contest",
      disposalDate: "15 Oct 2024",
      disposalTime: "02:40 PM IST",
      sealHash: "0x1d55...fa03",
      rawSealHash: "0x1d559812401da9184201934bafe901230192847590128475891029348123fa03",
      isCanonical: false,
    },
    {
      caseNo: "MUT-2026-000003",
      dakhilaNo: "Namzari Dakhila #997",
      deedNo: "Deed SYN-D-0003",
      subRegistry: "Savar Sub-Registry",
      mouza: "SYN-Savar",
      daag: "502/3",
      khatian: "Khatian 102 (BS Survey)",
      transferor: "SYN T. Islam",
      transferorId: "H80067",
      transferee: "SYN N. Huda",
      transfereeId: "I90078",
      share: "Share 0.2500",
      area: "7.50 Decimals",
      decision: "Approved",
      decisionSub: "Namzari Khatian 102/4",
      disposalDate: "14 Oct 2024",
      disposalTime: "10:18 AM IST",
      sealHash: "0x3e66...01ba",
      rawSealHash: "0x3e6601948201fae940129345091823abce0912401928340192834019284701ba",
      isCanonical: false,
    },
  ];

  const handleCopyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  // Filter records
  const filtered = records.filter((r) => {
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      r.caseNo.toLowerCase().includes(q) ||
      r.deedNo.toLowerCase().includes(q) ||
      r.daag.toLowerCase().includes(q) ||
      r.transferor.toLowerCase().includes(q) ||
      r.transferee.toLowerCase().includes(q) ||
      r.rawSealHash.toLowerCase().includes(q);

    let matchFilter = true;
    if (activeFilter === "approved") matchFilter = r.decision === "Approved";
    if (activeFilter === "rejected") matchFilter = r.decision === "Rejected";
    if (activeFilter === "savar") matchFilter = r.mouza.includes("Savar");

    return matchQuery && matchFilter;
  });

  return (
    <>
      <div className="rounded-[20px] overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-950/60 border-b border-white/10 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                <th className="py-3.5 px-4" scope="col">Case No.</th>
                <th className="py-3.5 px-4" scope="col">Deed & Plot Info</th>
                <th className="py-3.5 px-4" scope="col">Parties & Share Transacted</th>
                <th className="py-3.5 px-4" scope="col">Decision</th>
                <th className="py-3.5 px-4" scope="col">Disposal Date</th>
                <th className="py-3.5 px-4" scope="col">Ledger Seal Hash</th>
                <th className="py-3.5 px-4 text-right" scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs text-slate-200">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400">
                    {language === "bn"
                      ? "কোনো নিষ্পন্ন নামজারি আদেশ পাওয়া যায়নি"
                      : "No disposed mutation orders found matching the filter"}
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr
                    key={item.caseNo}
                    className="hover:bg-white/[0.05] transition-colors duration-150"
                  >
                    {/* Case No. */}
                    <td className="py-4 px-4 align-top">
                      <div className="font-mono font-semibold text-sky-400 text-sm">
                        {item.caseNo}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <ShieldCheck className="w-3 h-3 text-teal-400 shrink-0" />
                        <span>{item.dakhilaNo}</span>
                      </div>
                    </td>

                    {/* Deed & Plot */}
                    <td className="py-4 px-4 align-top max-w-[260px]">
                      <div className="font-medium text-white">
                        {item.deedNo}{" "}
                        <span className="text-slate-400 text-[11px] font-normal">
                          ({item.subRegistry})
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Mouza <span className="text-white font-medium">{item.mouza}</span> • Daag{" "}
                        <span className="text-white font-medium">{item.daag}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {item.khatian}
                      </div>
                    </td>

                    {/* Parties & Share */}
                    <td className="py-4 px-4 align-top max-w-[260px]">
                      <div className="flex items-center gap-1 text-slate-200 flex-wrap">
                        <span className="font-medium text-white">{item.transferor}</span>
                        <ArrowRight className="w-3 h-3 text-sky-400 shrink-0" />
                        <span className="font-medium text-white">{item.transferee}</span>
                      </div>
                      <div className="text-[11px] text-sky-300 mt-1 font-mono">
                        {item.share} • {item.area}
                      </div>
                    </td>

                    {/* Decision */}
                    <td className="py-4 px-4 align-top">
                      {item.decision === "Approved" ? (
                        <div>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] bg-teal-500/15 text-teal-300 border border-teal-400/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_#2dd4bf]" />
                            <span>{language === "bn" ? "অনুমোদিত" : "Approved"}</span>
                          </span>
                          <div className="text-[11px] text-teal-300/90 font-mono mt-1 font-medium">
                            {item.decisionSub}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] bg-rose-500/15 text-rose-300 border border-rose-400/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                            <span>{language === "bn" ? "নামঞ্জুর" : "Rejected"}</span>
                          </span>
                          <div className="text-[11px] text-rose-300 font-medium mt-1">
                            {item.decisionSub}
                          </div>
                        </div>
                      )}
                    </td>

                    {/* Disposal Date */}
                    <td className="py-4 px-4 align-top whitespace-nowrap">
                      <div className="text-white font-medium">{item.disposalDate}</div>
                      <div className="text-[11px] text-slate-400">{item.disposalTime}</div>
                    </td>

                    {/* Seal Hash */}
                    <td className="py-4 px-4 align-top">
                      <div className="inline-flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-md border border-white/10 font-mono text-[11px] text-sky-300">
                        <span>{item.sealHash}</span>
                        <button
                          onClick={() => handleCopyHash(item.rawSealHash)}
                          className="text-slate-400 hover:text-white transition-colors"
                          title="Copy Full Merkle Seal Hash"
                        >
                          {copiedHash === item.rawSealHash ? (
                            <Check className="w-3.5 h-3.5 text-teal-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedRecord(item)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-sky-400/30 text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 text-xs font-medium transition-all active:scale-95 shadow-[0_0_10px_rgba(56,189,248,0.15)]"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{t("mutationHistory.viewDisposalOrder")}</span>
                        </button>
                        {item.isCanonical && (
                          <Link
                            href={`/ac-land/case/${item.caseNo}`}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                            title="Open Adjudication Console"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="bg-slate-950/60 px-4 py-3.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-400">
            {language === "bn"
              ? "১,৪২৯টি নিষ্পন্ন কেসের মধ্যে ১–৫ দেখানো হচ্ছে"
              : "Showing 1–5 of 1,429 disposed cases"}
          </div>

          <div className="flex items-center gap-1">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-2.5 py-1 rounded-md border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-40"
            >
              {language === "bn" ? "পূর্ববর্তী" : "Prev"}
            </button>
            <button className="w-7 h-7 rounded-md bg-sky-500/20 text-sky-300 font-bold border border-sky-400/40 shadow-[0_0_8px_rgba(56,189,248,0.3)]">
              1
            </button>
            <button className="w-7 h-7 rounded-md text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
              2
            </button>
            <button className="w-7 h-7 rounded-md text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
              3
            </button>
            <span className="px-1 text-slate-500">...</span>
            <button className="w-7 h-7 rounded-md text-slate-400 hover:bg-white/10 hover:text-white transition-colors">
              286
            </button>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-2.5 py-1 rounded-md border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {language === "bn" ? "পরবর্তী" : "Next"}
            </button>
          </div>
        </div>
      </div>

      {/* View Disposal Order Modal */}
      <AnimatePresence>
        {selectedRecord && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRecord(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-xl rounded-2xl bg-slate-900/90 backdrop-blur-2xl border border-white/20 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-5"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {language === "bn" ? "সরকারি নামজারি আদেশনামা" : "Statutory Mutation Order Extract"}
                    </h3>
                    <p className="text-xs text-sky-300 font-mono">{selectedRecord.caseNo}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Order Content */}
              <div className="space-y-4 text-xs">
                {/* Decision Banner */}
                <div
                  className={`p-3.5 rounded-xl border flex items-center justify-between ${
                    selectedRecord.decision === "Approved"
                      ? "bg-teal-500/10 border-teal-400/30 text-teal-300"
                      : "bg-rose-500/10 border-rose-400/30 text-rose-300"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {selectedRecord.decision === "Approved" ? (
                      <CheckCircle2 className="w-5 h-5 text-teal-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-400" />
                    )}
                    <div>
                      <div className="font-bold text-sm">
                        {selectedRecord.decision === "Approved"
                          ? language === "bn"
                            ? "নামজারি মঞ্জুর ও খতিয়ান প্রস্তুত"
                            : "Mutation Sanctioned & Khatian Issued"
                          : language === "bn"
                          ? "নামজারি নামঞ্জুর"
                          : "Mutation Rejected"}
                      </div>
                      <div className="text-[11px] opacity-80">{selectedRecord.decisionSub}</div>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] bg-slate-950/50 px-2 py-1 rounded border border-white/10">
                    {selectedRecord.disposalDate}
                  </span>
                </div>

                {/* Plot & Deed Summary */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10 space-y-2">
                  <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                    {language === "bn" ? "জমির তফসিল ও দলিলের বিবরণ" : "Cadastral Plot & Deed Schedule"}
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-slate-300">
                    <div>
                      <span className="text-slate-400">Mouza:</span> {selectedRecord.mouza}
                    </div>
                    <div>
                      <span className="text-slate-400">Daag:</span> {selectedRecord.daag}
                    </div>
                    <div>
                      <span className="text-slate-400">Deed:</span> {selectedRecord.deedNo}
                    </div>
                    <div>
                      <span className="text-slate-400">Survey:</span> {selectedRecord.khatian}
                    </div>
                  </div>
                </div>

                {/* Transacting Parties */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10 space-y-2">
                  <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                    {language === "bn" ? "পক্ষগণের বিবরণ" : "Transacting Parties"}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-slate-400">{language === "bn" ? "হস্তান্তরকারী" : "Transferor"}</div>
                      <div className="font-medium text-white">{selectedRecord.transferor}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-slate-400">{language === "bn" ? "হস্তান্তরগ্রহীতা" : "Transferee"}</div>
                      <div className="font-medium text-white">{selectedRecord.transferee}</div>
                    </div>
                  </div>
                  <div className="pt-1 text-sky-300 font-mono">
                    {selectedRecord.share} ({selectedRecord.area})
                  </div>
                </div>

                {/* Cryptographic Seal Proof */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold uppercase tracking-wider">
                      {language === "bn" ? "সার্বভৌম সিল মারকেল হ্যাশ" : "Sovereign Merkle Seal Hash"}
                    </span>
                    <span className="text-teal-400 font-mono">Block #884,930 Verified</span>
                  </div>
                  <div className="font-mono text-[10px] text-sky-300 bg-slate-900/80 p-2 rounded-lg border border-white/10 break-all select-all">
                    {selectedRecord.rawSealHash}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                {selectedRecord.isCanonical ? (
                  <Link
                    href={`/ac-land/case/${selectedRecord.caseNo}`}
                    className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
                  >
                    <span>{language === "bn" ? "মূল কেস ডকেট খুলুন" : "Open Full Case Docket"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span />
                )}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedRecord(null)}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    {language === "bn" ? "বন্ধ করুন" : "Close"}
                  </button>
                  <button
                    onClick={() => {
                      alert(
                        language === "bn"
                          ? "আদেশনামা প্রিন্ট তৈরি হচ্ছে..."
                          : "Preparing printable official order dossier..."
                      );
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-sky-400 text-slate-950 text-xs font-bold shadow-[0_0_12px_rgba(56,189,248,0.35)] hover:bg-sky-300 transition-all flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{language === "bn" ? "প্রিন্ট আদেশ" : "Print Order"}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
