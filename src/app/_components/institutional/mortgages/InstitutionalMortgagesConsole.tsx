"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  ShieldCheck,
  Search,
  AlertTriangle,
  Lock,
  Unlock,
  Download,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  History,
  FileText,
  DollarSign,
  Building,
  Shield,
  Layers,
  X,
  Clock,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ReleaseLienModal } from "@/app/_components/institutional/mortgages/ReleaseLienModal";

interface MortgageLien {
  id: string;
  plot: string;
  mouzaKhatian: string;
  bank: string;
  loanNo: string;
  amount: string;
  borrower: string;
  state: "active" | "contested" | "released";
}

export const InstitutionalMortgagesConsole = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState(
    "Mouza: SYN-Savar, Daag: 452/1, Khatian: 1187 (BS)"
  );
  const [selectedLien, setSelectedLien] = useState<MortgageLien | null>(null);
  const [releaseModalOpen, setReleaseModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  // Form inputs
  const [bankName, setBankName] = useState("sonali");
  const [loanNo, setLoanNo] = useState("LN-2024-8849102");
  const [loanAmount, setLoanAmount] = useState("৳ 2,500,000");
  const [borrowerName, setBorrowerName] = useState("SYN Rahim Uddin (SYN-NID-A10021)");
  const [deedNo, setDeedNo] = useState("MORT-D-2024-0419 • 18 Oct 2024");

  const [liens, setLiens] = useState<MortgageLien[]>([
    {
      id: "LIEN-01",
      plot: "Daag 480/2",
      mouzaKhatian: "Mouza SYN-Savar, Khat 942",
      bank: "Sonali Bank PLC",
      loanNo: "LN-2024-10928",
      amount: "৳ 4,200,000",
      borrower: "Haji Mohammad Ali",
      state: "active",
    },
    {
      id: "LIEN-02",
      plot: "Daag 502/3",
      mouzaKhatian: "Mouza SYN-Savar, Khat 102",
      bank: "Eastern Bank PLC",
      loanNo: "LN-2023-77219",
      amount: "৳ 1,800,000",
      borrower: "Salma Begum",
      state: "active",
    },
    {
      id: "LIEN-03",
      plot: "Daag 310/2",
      mouzaKhatian: "Mouza SYN-Savar, Khat 610",
      bank: "BRAC Bank PLC",
      loanNo: "LN-2024-33012",
      amount: "৳ 7,500,000",
      borrower: "Kazi Nurul Islam",
      state: "contested",
    },
    {
      id: "LIEN-04",
      plot: "Daag 119/A",
      mouzaKhatian: "Mouza SYN-Savar, Khat 334",
      bank: "Islami Bank BD",
      loanNo: "LN-2022-90144",
      amount: "৳ 3,100,000",
      borrower: "Haji Abdul Gafur",
      state: "active",
    },
  ]);

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
          ? "লিয়েন ডকেট CSV আকারে সফলভাবে ডাউনলোড হয়েছে"
          : "Lien Docket Exported Successfully (savar_mortgage_docket.csv)"
      );
    }, 800);
  };

  const handleConfirmRelease = (lienId: string) => {
    setLiens((prev) =>
      prev.map((l) => (l.id === lienId ? { ...l, state: "released" } : l))
    );
    showToast(
      language === "bn"
        ? "বন্ধক দায় অবমুক্ত করা হয়েছে এবং সাব-রেজিস্ট্রিতে এনওসি পাঠানো হয়েছে"
        : "Mortgage Lien Released. Digital NOC dispatched to Savar Sub-Registry."
    );
  };

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8">
      {/* Toast Notification */}
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

      {/* 1. Header Section & Breadcrumb (Per Stitch Spec) */}
      <section className="space-y-4">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5 font-medium">
              <span>{language === "bn" ? "প্রাতিষ্ঠানিক পোর্টাল" : "Institutional Portal"}</span>
              <span>›</span>
              <span className="text-sky-400">
                {language === "bn" ? "ব্যাংক বন্ধক খতিয়ান" : "Bank Mortgages"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {language === "bn"
                ? "বন্ধক লিয়েন রেজিস্ট্রি ও দায় ইনস্ক্রিপশন"
                : "Mortgage Lien Registry & Charge Inscription"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-4xl leading-relaxed">
              {language === "bn"
                ? "সাভার সাব-রেজিস্ট্রির সাথে রিয়েল-টাইম সমন্বয়ের মাধ্যমে প্রাতিষ্ঠানিক ঋণ দায় রেকর্ড, বন্ধক দলিল এবং নিষ্পত্তিকরণ পরিচালনা করুন।"
                : "Inscribe institutional loan encumbrances, record mortgage deeds, and release cadastral charges against verified land titles in real-time sync with Savar Sub-Registry."}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>Node: Savar Cadastral Core Active</span>
            </span>
          </div>
        </div>

        {/* 4 Stat Summary Cards Row (Per Stitch Spec) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {/* Card 1: Active Liens */}
          <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 relative overflow-hidden transition-all duration-200 hover:border-sky-400/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {language === "bn" ? "সক্রিয় লিয়েন" : "Active Liens"}
              </span>
              <Landmark className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
              284
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === "bn" ? "রেজিস্ট্রিকৃত ও বলবৎ" : "Registered & Enforced"}</span>
            </div>
          </div>

          {/* Card 2: Total Encumbered Value */}
          <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 relative overflow-hidden transition-all duration-200 hover:border-sky-400/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {language === "bn" ? "মোট বন্ধককৃত মূল্য" : "Total Encumbered Value"}
              </span>
              <DollarSign className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
              ৳ 48.6 Cr
            </div>
            <div className="mt-2 text-xs text-slate-400">
              {language === "bn" ? "১২টি ব্যাংকের সর্বমোট" : "Aggregated across 12 Banks"}
            </div>
          </div>

          {/* Card 3: Encumbered Plots */}
          <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 relative overflow-hidden transition-all duration-200 hover:border-sky-400/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {language === "bn" ? "বন্ধককৃত দাগ" : "Encumbered Plots"}
              </span>
              <Layers className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
              219 Daag
            </div>
            <div className="mt-2 text-xs text-slate-400">
              {language === "bn" ? "সাভার মৌজা ক্যাডাস্ট্রাল গ্রিড" : "Savar Mouza Cadastral Grid"}
            </div>
          </div>

          {/* Card 4: Clearance Verification */}
          <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 relative overflow-hidden transition-all duration-200 hover:border-sky-400/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {language === "bn" ? "ছাড়পত্র যাচাই" : "Clearance Verification"}
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">
              Instant P2P
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{language === "bn" ? "রিয়েল-টাইম লেজার সমন্বয়" : "Zero-latency Ledger Sync"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Plot Verification & Search Bar (Per Stitch Spec) */}
      <section className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-lg space-y-3">
        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
          <Search className="w-4 h-4 text-sky-400" />
          <span>{language === "bn" ? "দাগ অনুসন্ধান ও স্বত্ব যাচাই" : "Plot Search & Title Check"}</span>
        </label>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl py-3 pl-4 pr-32 bg-slate-950/70 border border-white/15 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-mono"
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-white/10 border border-white/15 text-[10px] font-mono text-sky-300">
              ID: 884-SAV-452
            </span>
          </div>

          <button
            type="button"
            onClick={() =>
              showToast(
                language === "bn"
                  ? "দাগ ৪৫২/১ এর স্বত্ব যাচাই: নামজারি বিচারাধীন থাকার কারণে ক্যাডাস্ট্রাল লক সক্রিয়"
                  : "Title Check Complete: Active AC Land Mutation Case Lock Enforced"
              )
            }
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_26px_rgba(56,189,248,0.65)] transition-all whitespace-nowrap cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>
              {language === "bn" ? "স্বত্বের যোগ্যতা যাচাই করুন" : "Verify Title Eligibility"}
            </span>
          </button>
        </div>

        {/* Quick Search Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-slate-400 font-normal">
            {language === "bn" ? "সাম্প্রতিক অনুসন্ধান:" : "Recent Inquiries:"}
          </span>
          <button
            type="button"
            onClick={() =>
              setSearchQuery("Mouza: SYN-Savar, Daag: 452/1, Khatian: 1187 (BS)")
            }
            className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <History className="w-3 h-3 text-sky-400" />
            <span>Mouza SYN-Savar • Daag 452/1</span>
          </button>
          <button
            type="button"
            onClick={() =>
              setSearchQuery("Mouza: SYN-Savar, Daag: 310/2, Khatian: 610 (BS)")
            }
            className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <History className="w-3 h-3 text-sky-400" />
            <span>Mouza SYN-Savar • Daag 310/2</span>
          </button>
          <button
            type="button"
            onClick={() =>
              setSearchQuery("Mouza: SYN-Savar, Daag: 502/3, Khatian: 102 (BS)")
            }
            className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <History className="w-3 h-3 text-sky-400" />
            <span>Mouza SYN-Savar • Daag 502/3</span>
          </button>
        </div>
      </section>

      {/* 3. Prominent Amber Alert Banner (Mandatory Locked State - Per Stitch Spec) */}
      <section className="border border-amber-500/40 bg-amber-500/10 backdrop-blur-xl p-5 sm:p-6 rounded-2xl relative overflow-hidden shadow-lg shadow-amber-500/5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400">
            <AlertTriangle className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold text-amber-300 tracking-tight">
                {language === "bn"
                  ? "দাগে নামজারি মামলা বিচারাধীন রয়েছে, বন্ধক রেকর্ড করা যাবে না।"
                  : "Plot has a pending mutation, mortgage cannot be recorded."}
              </h3>
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide">
                Cadastral Block Enforced
              </span>
            </div>
            <p className="text-xs sm:text-sm text-amber-200/90 mt-1.5 leading-relaxed">
              Plot Daag 452/1 (Mouza SYN-Savar, Khatian 1187) is currently locked under active AC Land Case{" "}
              <strong className="text-amber-100 font-mono">MUT-2026-000001</strong> (Deed SYN-D-0001: SYN Rahim Uddin to SYN Karim Hossain). Encumbrance inscription is frozen until mutation disposal.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-amber-500/20 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/70 border border-amber-500/30 text-amber-300 font-mono font-medium">
                Case: MUT-2026-000001 • Status: AC Land Queue • Frozen 18 Oct 2026
              </span>
              <span className="text-amber-300/80">
                Authority: Assistant Commissioner (Land), Savar Upazila Revenue Circle
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Two-Column Workspace Layout (Per Stitch Spec) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Form Card (5 Columns) */}
        <div className="xl:col-span-5 rounded-2xl p-5 sm:p-6 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-4">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white">
                {language === "bn" ? "নতুন বন্ধক লিয়েন রেকর্ড করুন" : "Record New Mortgage Lien"}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-bold">
                Currently Frozen
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {language === "bn"
                ? "লিয়েন কার্যকর হলে জমি হস্তান্তরের ওপর তাৎক্ষণিক ক্রিপ্টোগ্রাফিক নিষেধাজ্ঞা জারি হবে।"
                : "Lien inscription creates an immediate cryptographic lock preventing conveyance deed transfers."}
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Field: Bank Name */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Institutional Lender / Bank Name
              </label>
              <div className="relative">
                <select
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className="w-full rounded-xl py-2.5 px-3.5 bg-slate-950/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400 appearance-none cursor-pointer"
                >
                  <option value="sonali">Sonali Bank PLC</option>
                  <option value="agrani">Agrani Bank PLC</option>
                  <option value="brac">BRAC Bank PLC</option>
                  <option value="eastern">Eastern Bank PLC</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Field: Loan Account No. */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Loan Account No.
              </label>
              <input
                type="text"
                value={loanNo}
                onChange={(e) => setLoanNo(e.target.value)}
                className="w-full rounded-xl py-2.5 px-3.5 bg-slate-950/70 border border-white/15 text-white font-mono text-xs sm:text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            {/* Field: Loan Amount */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Sanctioned Loan Amount (BDT)
              </label>
              <input
                type="text"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full rounded-xl py-2.5 px-3.5 bg-slate-950/70 border border-white/15 text-sky-400 font-bold text-xs sm:text-sm focus:outline-none focus:border-sky-400 font-mono"
              />
            </div>

            {/* Field: Mortgagor Name */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Mortgagor / Borrower Name & Verified NID
              </label>
              <input
                type="text"
                value={borrowerName}
                onChange={(e) => setBorrowerName(e.target.value)}
                className="w-full rounded-xl py-2.5 px-3.5 bg-slate-950/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            {/* Field: Mortgage Deed No. */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Mortgage Deed No. & Execution Date
              </label>
              <input
                type="text"
                value={deedNo}
                onChange={(e) => setDeedNo(e.target.value)}
                className="w-full rounded-xl py-2.5 px-3.5 bg-slate-950/70 border border-white/15 text-white font-mono text-xs sm:text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            {/* Action Button: Disabled Record Mortgage */}
            <div className="pt-2">
              <button
                type="button"
                disabled
                className="w-full py-3 px-4 rounded-xl bg-slate-800/80 border border-white/10 text-slate-400 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-not-allowed opacity-75 shadow-inner"
              >
                <Lock className="w-4 h-4" />
                <span>
                  {language === "bn"
                    ? "বন্ধক নথিভুক্তকরণ (দাগ লক করা)"
                    : "Record Mortgage (Plot Locked)"}
                </span>
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2 leading-relaxed">
                All recorded mortgages notify Savar Sub-Registry and AC Land within 0ms via smart ledger consensus.
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: Active Mortgages Table (7 Columns) */}
        <div className="xl:col-span-7 rounded-2xl p-5 sm:p-6 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-white/10 gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {language === "bn" ? "সক্রিয় বন্ধক ও লিয়েনসমূহ" : "Active Mortgages & Liens"}
              </h3>
              <p className="text-xs text-slate-400">
                Live encumbrances recorded across Savar Upazila plots
              </p>
            </div>
            <button
              type="button"
              onClick={handleExport}
              disabled={isExporting}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>
                {isExporting
                  ? language === "bn"
                    ? "এক্সপোর্ট হচ্ছে..."
                    : "Exporting..."
                  : language === "bn"
                  ? "লিয়েন ডকেট (.CSV)"
                  : "Export Lien Docket (.CSV)"}
              </span>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[550px]">
              <thead>
                <tr className="bg-slate-950/70 border-b border-white/10 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  <th className="py-2.5 px-3">CADASTRAL PLOT</th>
                  <th className="py-2.5 px-3">BANK / LOAN A/C</th>
                  <th className="py-2.5 px-3">SANCTION AMOUNT</th>
                  <th className="py-2.5 px-3">LIEN STATE</th>
                  <th className="py-2.5 px-3 text-right">CHARGE ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-xs sm:text-sm">
                {liens.map((row) => (
                  <tr
                    key={row.id}
                    className={`hover:bg-white/[0.04] transition-colors ${
                      row.state === "contested" ? "bg-amber-500/[0.03]" : ""
                    }`}
                  >
                    <td className="py-3 px-3">
                      <div className="font-bold text-white font-mono">{row.plot}</div>
                      <div className="text-[11px] text-slate-400">{row.mouzaKhatian}</div>
                    </td>

                    <td className="py-3 px-3">
                      <div className="text-white font-medium">{row.bank}</div>
                      <div className="text-[11px] font-mono text-slate-400">{row.loanNo}</div>
                    </td>

                    <td className="py-3 px-3 font-semibold text-sky-300 font-mono">
                      {row.amount}
                    </td>

                    <td className="py-3 px-3 whitespace-nowrap">
                      {row.state === "active" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Active Lien
                        </span>
                      ) : row.state === "contested" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          Contested Lien
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-slate-400 text-[11px]">
                          Released (NOC)
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-3 text-right whitespace-nowrap">
                      {row.state !== "released" && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedLien(row);
                            setReleaseModalOpen(true);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-emerald-300 text-xs font-semibold inline-flex items-center gap-1 transition-all"
                        >
                          <Unlock className="w-3 h-3 text-emerald-400" />
                          <span>Release</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Showing 1 to 4 of 284 registered charges</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 flex items-center justify-center disabled:opacity-40"
                disabled
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="px-2.5 py-0.5 rounded-lg bg-sky-500 text-slate-950 font-bold text-xs">
                1
              </span>
              <span className="px-2 py-0.5 text-xs text-slate-400">2</span>
              <button
                type="button"
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 flex items-center justify-center"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Institutional Statutory Footer (Per Stitch Spec) */}
      <footer className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-sky-400 shrink-0" />
          <span>
            Bank & Financial Institutions Act (1991) § 12 & Transfer of Property Act § 58 • Releasing a mortgage automatically notifies Savar Sub-Registry to unfreeze deed transfers.
          </span>
        </div>
        <div className="text-[11px] text-slate-500 font-mono">
          Cryptographic Proof: SHA256:7e8b91c...00d4
        </div>
      </footer>

      {/* Release Lien Modal */}
      {selectedLien && (
        <ReleaseLienModal
          isOpen={releaseModalOpen}
          onClose={() => setReleaseModalOpen(false)}
          lien={selectedLien}
          onConfirmRelease={handleConfirmRelease}
        />
      )}
    </main>
  );
};
