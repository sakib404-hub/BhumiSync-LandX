"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gavel,
  ShieldCheck,
  Search,
  AlertTriangle,
  Lock,
  Download,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  History,
  FileText,
  Building,
  Shield,
  Layers,
  X,
  Scale,
  Calendar,
  AlertOctagon,
  Unlock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LiftInjunctionModal } from "@/app/_components/institutional/injunctions/LiftInjunctionModal";

interface InjunctionEntry {
  id: string;
  caseNo: string;
  court: string;
  plot: string;
  mouza: string;
  parties: string;
  decree: string;
  status: "stay_order" | "temporary" | "status_quo" | "vacated";
}

export const InstitutionalInjunctionsConsole = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("CS-2024-00412");
  const [filterTab, setFilterTab] = useState<"all" | "stay" | "temp" | "lifted">("all");
  const [stayOrderFreezeToggle, setStayOrderFreezeToggle] = useState(true);
  const [selectedInjunction, setSelectedInjunction] = useState<InjunctionEntry | null>(null);
  const [liftModalOpen, setLiftModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form states
  const [formCaseNo, setFormCaseNo] = useState("CS-2024-00412 / Title Suit No. 89");
  const [formCourt, setFormCourt] = useState("Court of Joint District Judge, 1st Court, Dhaka");
  const [formDate, setFormDate] = useState("18 Oct 2026");
  const [formDecree, setFormDecree] = useState("Interim Stay Order");
  const [formPlot, setFormPlot] = useState("Mouza: SYN-Savar, Daag: 452/1, Khatian: 1187 (BS)");
  const [formParties, setFormParties] = useState("Plaintiff: SYN A. Chowdhury vs Defendant: SYN Rahim Uddin");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [injunctions, setInjunctions] = useState<InjunctionEntry[]>([
    {
      id: "INJ-001",
      caseNo: "CS-2024-00412",
      court: "Joint District Judge 1st Court, Dhaka",
      plot: "Daag 452/1",
      mouza: "Mouza SYN-Savar, Khatian 1187",
      parties: "SYN A. Chowdhury vs SYN Rahim Uddin",
      decree: "Interim Stay Order",
      status: "stay_order",
    },
    {
      id: "INJ-002",
      caseNo: "TS-2023-00918",
      court: "Senior Assistant Judge Court, Savar",
      plot: "Daag 310/2",
      mouza: "Mouza SYN-Savar, Khatian 610",
      parties: "Kazi Nurul Islam vs Shahana Begum",
      decree: "Status Quo Decree",
      status: "status_quo",
    },
    {
      id: "INJ-003",
      caseNo: "MISC-2024-104",
      court: "District Judge Court, Dhaka",
      plot: "Daag 119/A",
      mouza: "Mouza SYN-Savar, Khatian 334",
      parties: "Haji Abdul Gafur vs Greenland Housing",
      decree: "Temporary Injunction",
      status: "temporary",
    },
    {
      id: "INJ-004",
      caseNo: "TS-2022-04192",
      court: "Joint District Judge 2nd Court, Dhaka",
      plot: "Daag 502/3",
      mouza: "Mouza SYN-Savar, Khatian 102",
      parties: "Title Suit Attachment Decree",
      decree: "Perpetual Injunction",
      status: "stay_order",
    },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleRecordInjunction = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const newEntry: InjunctionEntry = {
        id: `INJ-00${injunctions.length + 1}`,
        caseNo: formCaseNo.split(" / ")[0] || formCaseNo,
        court: formCourt,
        plot: formPlot.includes("Daag:") ? formPlot.split("Daag: ")[1].split(",")[0] : "Daag 452/1",
        mouza: formPlot,
        parties: formParties,
        decree: formDecree,
        status: "stay_order",
      };
      setInjunctions([newEntry, ...injunctions]);
      showToast(
        language === "bn"
          ? "আদালতের নিষেধাজ্ঞা আদেশ কার্যকর হয়েছে। দাগে তাৎক্ষণিক লাল সতর্কতা জারি।"
          : "Injunction order recorded. Red Status freeze applied to plot across Sub-Registry & AC Land."
      );
    }, 800);
  };

  const handleConfirmLift = (caseId: string) => {
    setInjunctions((prev) =>
      prev.map((inj) =>
        inj.id === caseId ? { ...inj, status: "vacated" } : inj
      )
    );
    showToast(
      language === "bn"
        ? "নিষেধাজ্ঞা আদেশ প্রত্যাহার সম্পন্ন। দাগের ওপর থেকে লেনদেন লক উন্মুক্ত।"
        : "Injunction order vacated. Cadastral lock removed across registry channels."
    );
  };

  const filteredInjunctions = injunctions.filter((inj) => {
    const matchesSearch =
      inj.caseNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inj.plot.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inj.parties.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inj.court.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterTab === "all" ||
      (filterTab === "stay" && inj.status === "stay_order") ||
      (filterTab === "temp" && inj.status === "temporary") ||
      (filterTab === "lifted" && inj.status === "vacated");

    return matchesSearch && matchesFilter;
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

      {/* 1. Header Section & Breadcrumb (Per Stitch Spec) */}
      <section className="space-y-4">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5 font-medium">
              <span>{language === "bn" ? "প্রাতিষ্ঠানিক পোর্টাল" : "Institutional Portal"}</span>
              <span>›</span>
              <span className="text-sky-400">
                {language === "bn" ? "দেওয়ানি আদালত নিষেধাজ্ঞা" : "Civil Court Injunctions"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {language === "bn"
                ? "বিচারিক নিষেধাজ্ঞা ও স্থগিতাদেশ রেজিস্ট্রি"
                : "Judicial Injunction & Stay Order Registry"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-4xl leading-relaxed">
              {language === "bn"
                ? "দেওয়ানি আদালতের স্থগিতাদেশ, বিরোধ নিষেধাজ্ঞা এবং ক্রোক আদেশ রেকর্ড করে সাভার সাব-রেজিস্ট্রি ও এসি ল্যান্ডে স্বয়ংক্রিয়ভাবে জমি হস্তান্তর স্থগিত রাখুন।"
                : "Record civil court stay orders, dispute injunctions, and attachment decrees to enforce automated cadastral freezes across Savar Sub-Registry and AC Land."}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
              <span>Node: District Judicial Relay Active</span>
            </span>
          </div>
        </div>

        {/* 4 Stat Summary Cards (Per Stitch Spec) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {/* Card 1: Active Injunctions */}
          <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 relative overflow-hidden transition-all duration-200 hover:border-rose-500/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {language === "bn" ? "সক্রিয় নিষেধাজ্ঞা" : "Active Injunctions"}
              </span>
              <AlertOctagon className="w-4 h-4 text-rose-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
              37 Plots
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-rose-300 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              <span>{language === "bn" ? "রেজিস্ট্রি সিস্টেমে লকড" : "Frozen on Registry"}</span>
            </div>
          </div>

          {/* Card 2: Stay Orders Active */}
          <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 relative overflow-hidden transition-all duration-200 hover:border-sky-400/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {language === "bn" ? "স্থগিতাদেশ সক্রিয়" : "Stay Orders Active"}
              </span>
              <Lock className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
              29 Cases
            </div>
            <div className="mt-2 text-xs text-sky-300">
              Sub-Judice Status Enforced
            </div>
          </div>

          {/* Card 3: Daags Under Restraint */}
          <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 relative overflow-hidden transition-all duration-200 hover:border-amber-400/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {language === "bn" ? "স্থগিত দাগসমূহ" : "Daags Under Restraint"}
              </span>
              <Building className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">
              42 Parcels
            </div>
            <div className="mt-2 text-xs text-amber-300 font-semibold">
              {language === "bn" ? "নামজারি ব্লকড" : "Mutations Blocked"}
            </div>
          </div>

          {/* Card 4: Court Consensus Nodes */}
          <div className="rounded-2xl p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 relative overflow-hidden transition-all duration-200 hover:border-emerald-400/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {language === "bn" ? "আদালত নোড" : "Court Consensus Nodes"}
              </span>
              <Scale className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              12 Districts
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Active Synchrony</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Plot / Case Search & Quick Filter Hub (Per Stitch Spec) */}
      <section className="rounded-2xl p-4 sm:p-5 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-lg">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Daag No, Case No (e.g. CS-2024-819), or Mouza..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-sky-400 transition-all font-mono"
            />
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            <button
              type="button"
              onClick={() => setFilterTab("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filterTab === "all"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              All Orders (37)
            </button>
            <button
              type="button"
              onClick={() => setFilterTab("stay")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filterTab === "stay"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              Stay Orders (29)
            </button>
            <button
              type="button"
              onClick={() => setFilterTab("temp")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filterTab === "temp"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              Temporary Injunctions (8)
            </button>
            <button
              type="button"
              onClick={() => setFilterTab("lifted")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                filterTab === "lifted"
                  ? "bg-sky-500 text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              Recently Lifted
            </button>
          </div>
        </div>
      </section>

      {/* 3. Two-Column Workspace Layout (Form & Ledger Table - Per Stitch Spec) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* LEFT COLUMN: Record Injunction Form (5 Cols) */}
        <section className="xl:col-span-5 rounded-2xl p-5 sm:p-6 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-4">
          <div className="border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <Gavel className="w-5 h-5" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                {language === "bn"
                  ? "আদালতের নিষেধাজ্ঞা / স্থগিতাদেশ রেকর্ড করুন"
                  : "Record Court Injunction / Stay Order"}
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              {language === "bn"
                ? "নিষেধাজ্ঞা জারি হলে সাব-রেজিস্ট্রার ও এসি ল্যান্ডে তাৎক্ষণিক লাল সতর্কতা বলবৎ হবে।"
                : "Filing an injunction places an immediate Red Status freeze across Sub-Registry and AC Land portals."}
            </p>
          </div>

          <form onSubmit={handleRecordInjunction} className="space-y-4">
            {/* Case Number */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Case Number <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formCaseNo}
                onChange={(e) => setFormCaseNo(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white font-mono text-xs sm:text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            {/* Court Name */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Court Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formCourt}
                onChange={(e) => setFormCourt(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            {/* Sub-fields Row: Date & Decree Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Filed Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-sky-400"
                  />
                  <Calendar className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Decree Type
                </label>
                <select
                  value={formDecree}
                  onChange={(e) => setFormDecree(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white text-xs focus:outline-none focus:border-sky-400 cursor-pointer"
                >
                  <option value="Interim Stay Order">Interim Stay Order</option>
                  <option value="Perpetual Injunction">Perpetual Injunction</option>
                  <option value="Status Quo Decree">Status Quo Decree</option>
                </select>
              </div>
            </div>

            {/* Target Plot */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Target Plot (Mouza / Daag / Khatian) <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={formPlot}
                onChange={(e) => setFormPlot(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            {/* Disputing Parties */}
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Disputing Parties
              </label>
              <input
                type="text"
                value={formParties}
                onChange={(e) => setFormParties(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            {/* Interactive Toggle: Stay Order (Freezes Plot) */}
            <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/35 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-rose-400" />
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    Stay order (freezes plot)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setStayOrderFreezeToggle(!stayOrderFreezeToggle)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                    stayOrderFreezeToggle
                      ? "bg-sky-500 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                      : "bg-slate-700"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition duration-200 ${
                      stayOrderFreezeToggle ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
              <p className="text-[11px] text-rose-200/90 leading-relaxed">
                Stay Order Active — All title conveyances and AC Land Namzari mutations automatically frozen on consensus ledger.
              </p>
            </div>

            {/* Action CTA Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_28px_rgba(56,189,248,0.65)] transition-all cursor-pointer disabled:opacity-50"
            >
              <Gavel className="w-4 h-4 stroke-[2.5]" />
              <span>
                {isSubmitting
                  ? language === "bn"
                    ? "রেকর্ড হচ্ছে..."
                    : "Recording Decree..."
                  : language === "bn"
                  ? "নিষেধাজ্ঞা আদেশ রেকর্ড করুন"
                  : "Record Injunction Order"}
              </span>
            </button>

            {/* Footnote Warning */}
            <div className="flex items-start gap-2 pt-1 text-slate-400 text-[11px] leading-tight">
              <Shield className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
              <p>
                Criminal and Civil Procedure Code § 151 / Order 39 Rule 1-2. Automatic blockchain freeze applied immediately upon submission.
              </p>
            </div>
          </form>
        </section>

        {/* RIGHT COLUMN: Active Injunctions Table (7 Cols) */}
        <section className="xl:col-span-7 rounded-2xl p-5 sm:p-6 bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {language === "bn"
                  ? "সক্রিয় বিচারিক নিষেধাজ্ঞা ও স্থগিতাদেশ"
                  : "Active Judicial Injunctions & Restraints"}
              </h3>
              <p className="text-xs text-slate-400">
                Real-time cadastral injunction feed • Consensus node validated
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-400/25">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Enforced</span>
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[550px]">
              <thead>
                <tr className="bg-slate-950/70 border-b border-white/10 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  <th className="py-2.5 px-3">CASE & COURT</th>
                  <th className="py-2.5 px-3">TARGET PARCEL</th>
                  <th className="py-2.5 px-3">DISPUTING PARTIES</th>
                  <th className="py-2.5 px-3">RESTRAINT STATUS</th>
                  <th className="py-2.5 px-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08] text-xs sm:text-sm">
                {filteredInjunctions.map((row) => (
                  <tr key={row.id} className="hover:bg-white/[0.04] transition-colors">
                    {/* Case & Court */}
                    <td className="py-3 px-3">
                      <div className="font-bold text-white font-mono">{row.caseNo}</div>
                      <div className="text-[11px] text-slate-400">{row.court}</div>
                    </td>

                    {/* Target Parcel */}
                    <td className="py-3 px-3">
                      <div className="font-bold text-sky-300 font-mono">{row.plot}</div>
                      <div className="text-[11px] text-slate-400">{row.mouza}</div>
                    </td>

                    {/* Parties */}
                    <td className="py-3 px-3">
                      <div className="text-slate-200 text-xs font-medium max-w-xs truncate">
                        {row.parties}
                      </div>
                      <div className="text-[10px] text-amber-300 font-mono mt-0.5">
                        {row.decree}
                      </div>
                    </td>

                    {/* Restraint Status */}
                    <td className="py-3 px-3 whitespace-nowrap">
                      {row.status === "vacated" ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-slate-400 text-[11px]">
                          Vacated
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/40 text-rose-300 text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                          Stay Active
                        </span>
                      )}
                    </td>

                    {/* Action */}
                    <td className="py-3 px-3 text-right whitespace-nowrap">
                      {row.status !== "vacated" ? (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedInjunction(row);
                            setLiftModalOpen(true);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-sky-300 text-xs font-semibold inline-flex items-center gap-1 transition-all"
                        >
                          <Unlock className="w-3 h-3 text-sky-400" />
                          <span>Vacate Order</span>
                        </button>
                      ) : (
                        <span className="text-xs text-slate-500 font-mono">Disposed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Showing {filteredInjunctions.length} active court restraints</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                className="w-7 h-7 rounded-lg bg-white/5 text-slate-400 flex items-center justify-center disabled:opacity-40"
                disabled
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="px-2.5 py-0.5 rounded-lg bg-sky-500 text-slate-950 font-bold text-xs">
                1
              </span>
              <button
                type="button"
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 flex items-center justify-center"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* 5. Statutory Footer */}
      <footer className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-sky-400 shrink-0" />
          <span>
            Civil Procedure Code (CPC) 1908 & Specific Relief Act 1877 § 52-57 • Injunction vacatur automatically unfreezes land transacting across Savar Registry and AC Land Court.
          </span>
        </div>
        <div className="text-[11px] text-slate-500 font-mono">
          Judicial Seal Proof: SHA256:0d91f2c...aa94
        </div>
      </footer>

      {/* Lift Injunction Modal */}
      {selectedInjunction && (
        <LiftInjunctionModal
          isOpen={liftModalOpen}
          onClose={() => setLiftModalOpen(false)}
          injunction={selectedInjunction}
          onConfirmLift={handleConfirmLift}
        />
      )}
    </main>
  );
};
