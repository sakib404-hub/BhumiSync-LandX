"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flag,
  AlertTriangle,
  RotateCcw,
  Search,
  ChevronDown,
  ShieldAlert,
  Lock,
  ExternalLink,
  CheckCircle2,
  X,
  FileText,
  Building,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { FreezePlotModal } from "@/app/_components/admin/fraud/FreezePlotModal";

interface AnomalyFlag {
  id: string;
  code: string;
  type: string;
  typeKey: "locked_attempt" | "mismatch" | "geofence" | "double_conveyance" | "nid_collision";
  severity: "critical" | "high" | "medium";
  timeAgo: string;
  plotTitle: string;
  caseRef: string;
  seller: string;
  buyer: string;
  narrative: string;
  status: "open" | "reviewed" | "dismissed";
  plotIdParam: string;
}

export const AdminFraudConsole = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"open" | "reviewed" | "dismissed">("open");
  const [searchQuery, setSearchQuery] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isDeepScanning, setIsDeepScanning] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Freeze Modal State
  const [freezeModalOpen, setFreezeModalOpen] = useState(false);
  const [selectedFreezeFlag, setSelectedFreezeFlag] = useState<AnomalyFlag | null>(null);

  const [flags, setFlags] = useState<AnomalyFlag[]>([
    {
      id: "FLG-1",
      code: "FLG-2026-0881",
      type: "Repeated Locked Attempt",
      typeKey: "locked_attempt",
      severity: "critical",
      timeAgo: "18 mins ago",
      plotTitle: "Mouza 'SYN-Savar', Daag 452/1, Khatian 1187 (BS)",
      caseRef: "Active Case: MUT-2026-000001 (Namzari Lock Engaged)",
      seller: "SYN Rahim Uddin (SYN-NID-A10021, share 0.5000)",
      buyer: "SYN Karim Hossain (SYN-NID-B20045) • Deed SYN-D-0001",
      narrative:
        "Sub-Registrar terminal attempted deed conveyance submission on plot with an active Mutation case lock. Automated Sentinel engine blocked transaction hash creation under Section 8A.",
      status: "open",
      plotIdParam: "452-1",
    },
    {
      id: "FLG-2",
      code: "FLG-2026-0879",
      type: "Deed-Khatian Mismatch",
      typeKey: "mismatch",
      severity: "high",
      timeAgo: "42 mins ago",
      plotTitle: "Daag 310/2, Khatian 610, Mouza SYN-Savar",
      caseRef: "Case: MUT-2026-000019",
      seller: "Kazi Nurul Islam (NID: 198226920192)",
      buyer: "Shahana Begum (NID: 199026920881)",
      narrative:
        "Conveyance deed claims 0.2200 acres while RS Khatian ledger restricts total transferable interest to 0.1800 acres. +0.0400 acre discrepancy detected by Merkle math verification.",
      status: "open",
      plotIdParam: "452-1",
    },
    {
      id: "FLG-3",
      code: "FLG-2026-0874",
      type: "Geofence Boundary Drift",
      typeKey: "geofence",
      severity: "high",
      timeAgo: "1 hr ago",
      plotTitle: "Daag 119/A, Mouza SYN-Savar",
      caseRef: "Survey Ref: SRV-2026-0041",
      seller: "Haji Abdul Gafur",
      buyer: "Greenland Housing Ltd",
      narrative:
        "Surveyor Amin digital geofence points shifted +4.2 decimals into protected canal (Khal) reservation buffer zone. GPS perimeter coordinates rejected by National GIS Boundary Service.",
      status: "open",
      plotIdParam: "452-1",
    },
    {
      id: "FLG-4",
      code: "FLG-2026-0868",
      type: "Double Conveyance Risk",
      typeKey: "double_conveyance",
      severity: "critical",
      timeAgo: "2 hrs ago",
      plotTitle: "Daag 884/3, Khatian 902, Mouza Savar",
      caseRef: "Deed Ref: SYN-D-0009",
      seller: "SYN Rahim Uddin",
      buyer: "Enamul Haque",
      narrative:
        "Seller attempted to register an unencumbered sale deed for 0.2500 share which is already bound in pending escrow for Buyer SYN Karim Hossain. High-priority duplicate transfer alert.",
      status: "open",
      plotIdParam: "452-1",
    },
    {
      id: "FLG-5",
      code: "FLG-2026-0862",
      type: "Duplicate NID Ingestion Attempt",
      typeKey: "nid_collision",
      severity: "critical",
      timeAgo: "3 hrs ago",
      plotTitle: "Citizen Profile: SYN-NID-A10021",
      caseRef: "System Daemon: SYS-SENTINEL",
      seller: "EC Bangladesh Database Bridge",
      buyer: "Identity Registry Audit",
      narrative:
        "Facial and biometric hash collision detected: Citizen trying to enroll distinct alias under identical national voter register key.",
      status: "open",
      plotIdParam: "452-1",
    },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDeepScan = () => {
    setIsDeepScanning(true);
    setTimeout(() => {
      setIsDeepScanning(false);
      showToast(
        language === "bn"
          ? "লেজার ডিপ-স্ক্যান সম্পন্ন: সাভার সার্কেলে ২৪,৮১৯টি ব্লকে নতুন কোনো অসংগতি মেলেনি"
          : "Ledger Deep-Scan complete: 24,819 blocks verified. No new zero-day vulnerabilities."
      );
    }, 1500);
  };

  const handleDismissFlag = (id: string, code: string) => {
    setFlags((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: "dismissed" } : f))
    );
    showToast(
      language === "bn"
        ? `ফ্ল্যাগ ${code} খারিজ করা হয়েছে`
        : `Flag ${code} moved to Dismissed`
    );
  };

  const handleConfirmFreeze = (flagId: string) => {
    setFlags((prev) =>
      prev.map((f) => (f.id === flagId ? { ...f, status: "reviewed" } : f))
    );
    showToast(
      language === "bn"
        ? "দাগে তাৎক্ষণিক স্থগিতাদেশ ও ক্রিপ্টোগ্রাফিক লক কার্যকর হয়েছে"
        : "Emergency statutory transaction freeze enforced across all registry channels."
    );
  };

  const filteredFlags = flags.filter((flag) => {
    const matchesTab = flag.status === activeTab;
    const matchesSearch =
      flag.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flag.plotTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flag.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flag.buyer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      flag.type.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSeverity =
      severityFilter === "all" || flag.severity === severityFilter;

    const matchesType =
      typeFilter === "all" || flag.typeKey === typeFilter;

    return matchesTab && matchesSearch && matchesSeverity && matchesType;
  });

  const openCount = flags.filter((f) => f.status === "open").length;
  const reviewedCount = flags.filter((f) => f.status === "reviewed").length;
  const dismissedCount = flags.filter((f) => f.status === "dismissed").length;

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
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-2 border-b border-white/10">
        <div className="flex flex-col gap-1.5 max-w-3xl">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              {language === "bn"
                ? "ক্যাডাস্ট্রাল অসংগতি ও জালিয়াতি সতর্কতা"
                : "Cadastral Anomaly & Fraud Flags"}
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[11px] font-bold flex items-center gap-1.5 shadow-[0_0_10px_rgba(244,63,94,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
              <span>Real-time Feed</span>
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {language === "bn"
              ? "দলিল রেজিস্ট্রি, নামজারি মিউটেশন ও ব্যাংক বন্ধকের মধ্যে এআই এবং কনসেনসাস লেজারের রিয়েল-টাইম অসংগতি শনাক্তকরণ।"
              : "Real-time AI and consensus ledger anomaly detection across deed registrations, Namzari mutations, and institutional encumbrances."}
          </p>

          {/* Metric Summary Chips */}
          <div className="flex flex-wrap items-center gap-2.5 mt-2">
            <div className="px-3.5 py-1.5 rounded-full flex items-center gap-2 bg-white/[0.05] border border-white/10 text-xs">
              <span className="text-slate-400">{language === "bn" ? "মোট সক্রিয়:" : "Total Active:"}</span>
              <span className="font-bold text-sky-400">{openCount} Flags</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 text-xs">
              <span className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#f43f5e]" />
              <span className="text-slate-400">{language === "bn" ? "সংকটপূর্ণ ঝুঁকি:" : "Critical Risk:"}</span>
              <span className="font-bold text-rose-400">3</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-slate-400">{language === "bn" ? "জিওফেন্স বিচ্যুতি:" : "Geofence Drift:"}</span>
              <span className="font-bold text-amber-300">2</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-full flex items-center gap-2 bg-sky-500/10 border border-sky-400/30 text-xs">
              <span className="text-slate-400">{language === "bn" ? "পরিচয় অমিল:" : "Identity Discrepancies:"}</span>
              <span className="font-bold text-sky-300">2</span>
            </div>
          </div>
        </div>

        {/* Action Button: Run Ledger Deep-Scan */}
        <div className="flex items-center self-start lg:self-center">
          <button
            type="button"
            onClick={handleDeepScan}
            disabled={isDeepScanning}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] border border-sky-400/60 text-sky-300 font-bold text-xs sm:text-sm shadow-[0_0_18px_rgba(56,189,248,0.25)] hover:bg-sky-500/20 hover:border-sky-400 hover:shadow-[0_0_24px_rgba(56,189,248,0.45)] transition-all duration-200 active:scale-[0.98] disabled:opacity-50"
          >
            <RotateCcw
              className={`w-4 h-4 ${isDeepScanning ? "animate-spin text-sky-400" : ""}`}
            />
            <span>
              {isDeepScanning
                ? language === "bn"
                  ? "স্ক্যানিং চলছে..."
                  : "Scanning Ledger..."
                : language === "bn"
                ? "লেজার ডিপ-স্ক্যান চালান"
                : "Run Ledger Deep-Scan"}
            </span>
          </button>
        </div>
      </section>

      {/* FILTERING & TAB NAVIGATION BAR (Per Stitch Spec) */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2 border-b border-white/10">
        {/* Status Tabs */}
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setActiveTab("open")}
            className={`pb-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "open"
                ? "text-sky-400 border-b-2 border-sky-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>Open</span>
            <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 text-[11px] font-bold">
              {openCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("reviewed")}
            className={`pb-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "reviewed"
                ? "text-sky-400 border-b-2 border-sky-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>Reviewed</span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300 text-[11px]">
              {reviewedCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("dismissed")}
            className={`pb-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === "dismissed"
                ? "text-sky-400 border-b-2 border-sky-400"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>Dismissed</span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300 text-[11px]">
              {dismissedCount}
            </span>
          </button>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by plot, flag ID, NID..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-950/70 border border-white/15 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400 transition-all"
            />
          </div>

          {/* Severity Dropdown */}
          <div className="relative">
            <select
              value={severityFilter}
              onChange={(e) => setSeverityFilter(e.target.value)}
              className="appearance-none pl-3 pr-8 py-1.5 rounded-lg bg-slate-950/70 border border-white/15 text-slate-300 text-xs focus:outline-none focus:border-sky-400 cursor-pointer"
            >
              <option value="all">All Severities</option>
              <option value="critical">Critical (P1)</option>
              <option value="high">High (P2)</option>
              <option value="medium">Medium (P3)</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-3.5 h-3.5" />
          </div>

          {/* Type Dropdown */}
          <div className="relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="appearance-none pl-3 pr-8 py-1.5 rounded-lg bg-slate-950/70 border border-white/15 text-slate-300 text-xs focus:outline-none focus:border-sky-400 cursor-pointer"
            >
              <option value="all">All Anomaly Types</option>
              <option value="locked_attempt">Repeated Locked Attempt</option>
              <option value="mismatch">Deed-Khatian Mismatch</option>
              <option value="geofence">Geofence Boundary Drift</option>
              <option value="double_conveyance">Double Conveyance Risk</option>
              <option value="nid_collision">Duplicate NID Ingestion</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-3.5 h-3.5" />
          </div>
        </div>
      </section>

      {/* ANOMALY FLAG CARDS CONTAINER (Glassmorphic List - Per Stitch Spec) */}
      <section className="flex flex-col gap-4">
        {filteredFlags.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-white/[0.04] border border-white/10 text-slate-400 text-xs sm:text-sm">
            {language === "bn"
              ? "এই ফিল্টারে কোনো অসংগতি পাওয়া যায়নি"
              : "No anomaly flags found matching current filters."}
          </div>
        ) : (
          filteredFlags.map((flag) => {
            const isCritical = flag.severity === "critical";
            const borderAccent = isCritical
              ? "border-l-4 border-l-rose-500 hover:border-rose-500/60"
              : "border-l-4 border-l-amber-400 hover:border-amber-400/60";

            return (
              <div
                key={flag.id}
                className={`rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-200 ${borderAccent}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
                  {/* Left Content Cluster */}
                  <div className="flex flex-col gap-3.5 flex-1 min-w-0">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                          isCritical
                            ? "bg-rose-500/20 border border-rose-500/40 text-rose-300"
                            : "bg-amber-500/20 border border-amber-500/40 text-amber-300"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCritical ? "bg-rose-400 animate-pulse" : "bg-amber-400"
                          }`}
                        />
                        <span>{flag.type}</span>
                      </span>

                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
                        {isCritical ? "Critical (P1)" : "High (P2)"}
                      </span>
                      <span className="text-slate-600 text-xs">•</span>
                      <span className="text-white font-mono font-bold text-xs">
                        {flag.code}
                      </span>
                      <span className="text-slate-600 text-xs">•</span>
                      <span className="text-slate-400 text-xs font-mono">
                        {flag.timeAgo}
                      </span>
                    </div>

                    {/* Cadastral Plot & Involved Parties Box */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-white/10">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Cadastral Plot
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          {flag.plotTitle}
                        </span>
                        <span className="text-xs text-sky-400 font-mono">
                          {flag.caseRef}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Involved Parties & Instruments
                        </span>
                        <span className="text-xs text-slate-200">
                          <strong className="text-white">Seller: </strong>
                          {flag.seller}
                        </span>
                        <span className="text-xs text-slate-200">
                          <strong className="text-white">Buyer: </strong>
                          {flag.buyer}
                        </span>
                      </div>
                    </div>

                    {/* Incident Narrative */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {flag.narrative}
                    </p>
                  </div>

                  {/* Right Actions Column */}
                  <div className="flex flex-row lg:flex-col gap-2 shrink-0 self-end lg:self-start w-full lg:w-48">
                    {/* Freeze Plot Transacting */}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedFreezeFlag(flag);
                        setFreezeModalOpen(true);
                      }}
                      className="flex-1 lg:w-full py-2 px-3 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/50 text-rose-300 text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(244,63,94,0.25)] transition-all"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>{language === "bn" ? "দাগ লেনদেন লক" : "Freeze Plot"}</span>
                    </button>

                    {/* Review Dossier Link */}
                    <Link
                      href={`/verify/plot/${flag.plotIdParam}`}
                      className="flex-1 lg:w-full py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_0_16px_rgba(56,189,248,0.35)] transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{language === "bn" ? "ডসিয়ার দেখুন" : "Open Dossier"}</span>
                    </Link>

                    {/* Dismiss Button */}
                    <button
                      type="button"
                      onClick={() => handleDismissFlag(flag.id, flag.code)}
                      className="py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-semibold transition-colors text-center"
                    >
                      {language === "bn" ? "খারিজ" : "Dismiss"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </section>

      {/* Freeze Modal */}
      {selectedFreezeFlag && (
        <FreezePlotModal
          isOpen={freezeModalOpen}
          onClose={() => setFreezeModalOpen(false)}
          plotId={selectedFreezeFlag.plotTitle}
          flagId={selectedFreezeFlag.code}
          onConfirmFreeze={handleConfirmFreeze}
        />
      )}
    </main>
  );
};
