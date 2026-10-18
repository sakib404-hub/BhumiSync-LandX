"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Search,
  Filter,
  Calendar,
  Download,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers,
  FileCheck,
  AlertTriangle,
  Building,
  Check,
  X,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AuditStatCards } from "@/app/_components/admin/audit/AuditStatCards";
import { ProofChainModal } from "@/app/_components/admin/audit/ProofChainModal";

interface AuditEntry {
  id: string;
  time: string;
  timeExact: string;
  actorId: string;
  actorDesc: string;
  actorType: "institutional" | "daemon";
  entityType: "mutation" | "deed" | "bank" | "court" | "biometric";
  actionTitle: string;
  actionSub: string;
  entityTitle: string;
  entitySub: string;
  status: "committed" | "notarized" | "frozen" | "flag_raised" | "restraint" | "cleared";
  proofHash: string;
}

export const AdminAuditConsole = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEntity, setSelectedEntity] = useState("all");
  const [selectedActorFilter, setSelectedActorFilter] = useState<"all" | "institutional" | "daemon">("all");
  const [proofModalOpen, setProofModalOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      showToast(
        language === "bn"
          ? "অডিট খতিয়ান সফলভাবে CSV আকারে এক্সপোর্ট করা হয়েছে"
          : "Audit Ledger Exported successfully (audit_ledger_block_8492109.csv)"
      );
    }, 800);
  };

  const auditEntries: AuditEntry[] = [
    {
      id: "AUD-001",
      time: language === "bn" ? "এইমাত্র" : "Just now",
      timeExact: "11:42:15",
      actorId: "ACL-DH-04",
      actorDesc: "M. Rahman, BCS - Savar AC Land",
      actorType: "institutional",
      entityType: "mutation",
      actionTitle: language === "bn" ? "নামজারি মঞ্জুর" : "Sanction Mutation",
      actionSub: "MUT-2026-000001",
      entityTitle: "Daag 452/1",
      entitySub: "Khatian 1187 (BS)",
      status: "committed",
      proofHash: "0x8f3b...e4a1",
    },
    {
      id: "AUD-002",
      time: language === "bn" ? "৪ মি পূর্বে" : "4m ago",
      timeExact: "11:38:02",
      actorId: "SUB-REG-01",
      actorDesc: "Kazi Farhan - Savar Sub-Registry",
      actorType: "institutional",
      entityType: "deed",
      actionTitle: "Register Deed SYN-D-0001",
      actionSub: "SYN Rahim Uddin → SYN Karim Hossain",
      entityTitle: language === "bn" ? "অংশ: ০.২৫০০ (৪ আনা)" : "Share: 0.2500 (4a)",
      entitySub: "Mouza SYN-Savar",
      status: "notarized",
      proofHash: "0x4b7c...91f2",
    },
    {
      id: "AUD-003",
      time: language === "bn" ? "১৮ মি পূর্বে" : "18m ago",
      timeExact: "11:24:49",
      actorId: "BNK-SAV-09",
      actorDesc: "Sonali Bank Savar Hub",
      actorType: "institutional",
      entityType: "bank",
      actionTitle: "Attempt Mortgage Inscription",
      actionSub: "Credit Lien Security Ingestion",
      entityTitle: "Daag 452/1",
      entitySub: "Khatian 1187",
      status: "frozen",
      proofHash: "0x2e11...aa70",
    },
    {
      id: "AUD-004",
      time: language === "bn" ? "৩২ মি পূর্বে" : "32m ago",
      timeExact: "11:10:33",
      actorId: "SYS-SENTINEL",
      actorDesc: "AI Consensus Daemon",
      actorType: "daemon",
      entityType: "mutation",
      actionTitle: "Duplicate NID Ingestion Attempt",
      actionSub: "Collision: SYN-NID-A10021",
      entityTitle: "SYN Rahim Uddin",
      entitySub: "Profile Sync Anomaly",
      status: "flag_raised",
      proofHash: "0xd990...18c5",
    },
    {
      id: "AUD-005",
      time: language === "bn" ? "১ ঘণ্টা পূর্বে" : "1h ago",
      timeExact: "10:41:18",
      actorId: "CRT-DH-SAV-02",
      actorDesc: "District Senior Court",
      actorType: "institutional",
      entityType: "court",
      actionTitle: "Injunction Stay Order Inscription",
      actionSub: "Title Dispute Litigation",
      entityTitle: "Daag 310/2",
      entitySub: "Khatian 610",
      status: "restraint",
      proofHash: "0x77ae...bb40",
    },
    {
      id: "AUD-006",
      time: language === "bn" ? "২ ঘণ্টা পূর্বে" : "2h ago",
      timeExact: "09:35:50",
      actorId: "REG-OFFICER-03",
      actorDesc: "Savar Sub-Registry",
      actorType: "institutional",
      entityType: "biometric",
      actionTitle: "Biometric Verification Overlap",
      actionSub: "Live Fingerprint Auth Scan",
      entityTitle: "Citizen B20045",
      entitySub: "SYN Karim Hossain",
      status: "cleared",
      proofHash: "0x3344...8899",
    },
  ];

  const filteredEntries = auditEntries.filter((entry) => {
    const matchesSearch =
      entry.actorId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.actorDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.actionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.actionSub.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.entityTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.proofHash.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesEntity =
      selectedEntity === "all" || entry.entityType === selectedEntity;

    const matchesActor =
      selectedActorFilter === "all" || entry.actorType === selectedActorFilter;

    return matchesSearch && matchesEntity && matchesActor;
  });

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8">
      {/* Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900/95 border border-sky-400/50 text-sky-200 text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(56,189,248,0.35)] flex items-center gap-3 backdrop-blur-xl"
          >
            <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER SECTION (Per Stitch Spec) */}
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            {language === "bn"
              ? "অপরিবর্তনীয় ক্যাডাস্ট্রাল অডিট ট্রেইল"
              : "Immutable Cadastral Audit Trail"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
            {language === "bn"
              ? "সাব-রেজিস্ট্রি, এসি ল্যান্ড আদালত, বাণিজ্যিক ব্যাংক এবং আদালতের লেনদেনের ক্রিপ্টোগ্রাফিকভাবে যাচাইকৃত রেকর্ড।"
              : "Cryptographically verified, append-only transaction history across sub-registries, AC Land offices, banks, and courts."}
          </p>
        </div>

        {/* SHA-256 Merkle Badge */}
        <div className="flex-shrink-0 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-sky-400/30 backdrop-blur-xl shadow-[0_0_20px_rgba(56,189,248,0.15)]">
          <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                {language === "bn" ? "সংযোজনযোগ্য লেজার" : "Append-only Ledger"}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            </div>
            <p className="text-[11px] text-sky-400 font-mono">
              SHA-256 Merkle Chained • Tamper-Evident
            </p>
          </div>
        </div>
      </section>

      {/* 4 STAT BENTO CARDS */}
      <section>
        <AuditStatCards />
      </section>

      {/* FROSTED FILTER & QUERY BAR (Per Stitch Spec) */}
      <section className="rounded-2xl p-4 sm:p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 space-y-3 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
          {/* Search Input */}
          <div className="lg:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === "bn"
                  ? "অপারেটর আইডি, দলিল নং, দাগ বা হ্যাশ দিয়ে খুঁজুন..."
                  : "Search by Actor ID, Deed No, Daag Plot, or Transaction Hash..."
              }
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-slate-950/70 border border-white/15 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
            />
          </div>

          {/* Entity Type Dropdown */}
          <div className="lg:col-span-3 relative">
            <select
              value={selectedEntity}
              onChange={(e) => setSelectedEntity(e.target.value)}
              className="w-full h-10 px-3 pr-8 rounded-xl bg-slate-950/70 border border-white/15 text-white text-xs sm:text-sm appearance-none focus:outline-none focus:border-sky-400 transition-all cursor-pointer"
            >
              <option value="all">
                {language === "bn"
                  ? "সকল সত্তা (দলিল, নামজারি, ইনজাংকশন, বন্ধক)"
                  : "All Entities (Deeds, Mutations, Liens)"}
              </option>
              <option value="mutation">Mutations Only (Namzari & Dakhila)</option>
              <option value="deed">Sub-Registry Deeds</option>
              <option value="court">Judicial Injunctions</option>
              <option value="bank">Banking Encumbrances</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-4 h-4" />
          </div>

          {/* Date Range Selector */}
          <div className="lg:col-span-4 flex items-center justify-between px-3 h-10 rounded-xl bg-slate-950/70 border border-white/15 text-white text-xs sm:text-sm cursor-pointer hover:border-slate-400 transition-colors">
            <div className="flex items-center gap-2 text-slate-300 truncate">
              <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                {language === "bn"
                  ? "বিগত ৭ দিন (১২ অক্টোবর – ১৮ অক্টোবর ২০২৬)"
                  : "Last 7 Days (12 Oct – 18 Oct 2026)"}
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Secondary Filter & Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
          {/* Actor Filter Pills */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-slate-400 mr-1 uppercase tracking-wider">
              {language === "bn" ? "অপারেটর:" : "Actor Filter:"}
            </span>
            <button
              type="button"
              onClick={() => setSelectedActorFilter("all")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedActorFilter === "all"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              All Actors
            </button>
            <button
              type="button"
              onClick={() => setSelectedActorFilter("institutional")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedActorFilter === "institutional"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              User (Institutional)
            </button>
            <button
              type="button"
              onClick={() => setSelectedActorFilter("daemon")}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                selectedActorFilter === "daemon"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              System (Consensus Daemon)
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleExport}
              disabled={isExporting}
              className="h-8 px-3 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/15 text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>
                {isExporting
                  ? language === "bn"
                    ? "এক্সপোর্ট হচ্ছে..."
                    : "Exporting..."
                  : language === "bn"
                  ? "অডিট এক্সপোর্ট (.CSV)"
                  : "Export Audit Ledger (.CSV)"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setProofModalOpen(true)}
              className="h-8 px-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-[0_0_16px_rgba(56,189,248,0.4)] transition-all hover:scale-[1.02]"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{language === "bn" ? "প্রুফ চেইন যাচাই" : "Verify Proof Chain"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* DETAILED CRYPTOGRAPHIC LEDGER TABLE (Per Stitch Spec) */}
      <section className="rounded-2xl overflow-hidden bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="bg-slate-950/70 border-b border-white/10 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">{language === "bn" ? "টাইমস্ট্যাম্প" : "TIMESTAMP"}</th>
                <th className="py-3.5 px-4">{language === "bn" ? "কর্তৃপক্ষ / অপারেটর" : "ACTOR / AUTHORITY"}</th>
                <th className="py-3.5 px-3">{language === "bn" ? "ধরন" : "TYPE"}</th>
                <th className="py-3.5 px-4">{language === "bn" ? "পদক্ষেপ ও রেফারেন্স" : "ACTION & REF NO."}</th>
                <th className="py-3.5 px-4">{language === "bn" ? "ক্যাডাস্ট্রাল সত্তা" : "CADASTRAL ENTITY & CONTEXT"}</th>
                <th className="py-3.5 px-4 text-right">{language === "bn" ? "লেজার প্রমাণ" : "LEDGER PROOF / STATUS"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-xs sm:text-sm">
              {filteredEntries.map((row) => {
                const statusBadge =
                  row.status === "committed"
                    ? "bg-emerald-500/10 border-emerald-400/30 text-emerald-400"
                    : row.status === "notarized"
                    ? "bg-sky-500/10 border-sky-400/30 text-sky-400"
                    : row.status === "frozen"
                    ? "bg-amber-500/10 border-amber-400/30 text-amber-400"
                    : row.status === "flag_raised"
                    ? "bg-rose-500/15 border-rose-400/40 text-rose-300 shadow-[0_0_8px_rgba(244,63,94,0.3)]"
                    : row.status === "restraint"
                    ? "bg-rose-500/15 border-rose-400/30 text-rose-300"
                    : "bg-emerald-500/10 border-emerald-400/30 text-emerald-400";

                return (
                  <tr
                    key={row.id}
                    className="hover:bg-white/[0.04] transition-colors group"
                  >
                    {/* Timestamp */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <div className="text-white font-medium">{row.time}</div>
                      <div className="text-slate-400 font-mono text-[11px]">
                        {row.timeExact}
                      </div>
                    </td>

                    {/* Actor */}
                    <td className="py-3.5 px-4">
                      <div className="text-sky-300 font-semibold font-mono">
                        {row.actorId}
                      </div>
                      <div className="text-slate-400 text-xs truncate max-w-[200px]">
                        {row.actorDesc}
                      </div>
                    </td>

                    {/* Type Badge */}
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300 uppercase">
                        {row.actorType === "daemon" ? "DAEMON" : "USER"}
                      </span>
                    </td>

                    {/* Action & Ref */}
                    <td className="py-3.5 px-4">
                      <div className="text-white font-medium">{row.actionTitle}</div>
                      <div className="text-xs text-slate-400 font-mono">
                        {row.actionSub}
                      </div>
                    </td>

                    {/* Entity & Context */}
                    <td className="py-3.5 px-4">
                      <div className="text-white font-mono">{row.entityTitle}</div>
                      <div className="text-xs text-slate-400">{row.entitySub}</div>
                    </td>

                    {/* Status & Proof */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="flex flex-col items-end gap-1">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusBadge}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          <span className="capitalize">{row.status.replace("_", " ")}</span>
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {row.proofHash}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Pagination / Footer */}
        <div className="p-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 bg-slate-950/40">
          <span>
            {language === "bn"
              ? `১,২৪৮টি ব্লকের মধ্যে সর্বশেষ ${filteredEntries.length}টি রেকর্ড দেখানো হচ্ছে`
              : `Displaying latest ${filteredEntries.length} of 1,248 committed block records`}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => showToast("Navigating to previous block window...")}
              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => showToast("Navigating to next block window...")}
              className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Proof Chain Modal */}
      <ProofChainModal
        isOpen={proofModalOpen}
        onClose={() => setProofModalOpen(false)}
      />
    </main>
  );
};
