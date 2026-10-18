"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Download,
  Search,
  RefreshCw,
  Building,
  ChevronDown,
  Code,
  X,
  ExternalLink,
  Clock,
  Layers,
  Inbox,
  Check,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PayloadInspectorModal } from "@/app/_components/admin/outbox/PayloadInspectorModal";

interface OutboxEvent {
  id: string;
  type: string;
  timestamp: string;
  timeAgo: string;
  targetOffice: string;
  targetNode: string;
  entityRef: string;
  entitySub: string;
  attempts: number;
  maxAttempts: number;
  status: "pending_retry" | "successful" | "dead_letter";
  lastError?: string;
  telemetryNote?: string;
}

export const AdminOutboxConsole = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "pending_retry" | "successful" | "dead_letter">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [officeFilter, setOfficeFilter] = useState("all");
  const [isFlushing, setIsFlushing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Payload modal state
  const [selectedEvent, setSelectedEvent] = useState<OutboxEvent | null>(null);
  const [payloadModalOpen, setPayloadModalOpen] = useState(false);

  const [events, setEvents] = useState<OutboxEvent[]>([
    {
      id: "EVT-984210",
      type: "Mutation Relay Ingestion",
      timestamp: "11:39:10",
      timeAgo: "3 mins ago",
      targetOffice: "Savar AC Land Court",
      targetNode: "Node ACL-DH-04",
      entityRef: "MUT-2026-000001",
      entitySub: "Deed SYN-D-0001 (Daag 452/1)",
      attempts: 3,
      maxAttempts: 5,
      status: "pending_retry",
      lastError: "HTTP 504 Gateway Timeout: AC Land Court ACK timeout",
      telemetryNote: "Exponential backoff active (next retry in 18s)",
    },
    {
      id: "EVT-984209",
      type: "Mortgage Lien Ingestion",
      timestamp: "11:24:49",
      timeAgo: "18 mins ago",
      targetOffice: "Sonali Bank Savar Hub",
      targetNode: "Node BNK-SAV-09",
      entityRef: "Deed SYN-D-0001",
      entitySub: "Daag 452/1, Khatian 1187",
      attempts: 1,
      maxAttempts: 1,
      status: "successful",
      telemetryNote: "Consensus ACK 200 OK (Latency: 142ms)",
    },
    {
      id: "EVT-984208",
      type: "Deed Notarization Broadcast",
      timestamp: "11:38:02",
      timeAgo: "4 mins ago",
      targetOffice: "District Land Registrar",
      targetNode: "Node DLR-DH-01",
      entityRef: "Vol BS-409",
      entitySub: "Deed SYN-D-0001 Notarized",
      attempts: 1,
      maxAttempts: 1,
      status: "successful",
      telemetryNote: "Consensus ACK 200 OK (Latency: 98ms)",
    },
    {
      id: "EVT-984207",
      type: "National NID Biometric Check",
      timestamp: "11:36:12",
      timeAgo: "6 mins ago",
      targetOffice: "Election Commission Gateway",
      targetNode: "Node EC-GATEWAY-02",
      entityRef: "SYN-NID-B20045",
      entitySub: "Citizen Fingerprint Hash Sync",
      attempts: 1,
      maxAttempts: 1,
      status: "successful",
      telemetryNote: "Consensus ACK 200 OK (Latency: 215ms)",
    },
    {
      id: "EVT-984206",
      type: "Judicial Injunction Attachment",
      timestamp: "10:41:18",
      timeAgo: "1 hr ago",
      targetOffice: "Senior Assistant Judge Court",
      targetNode: "Node CRT-DH-02",
      entityRef: "Daag 310/2",
      entitySub: "Khatian 610 Stay Enforced",
      attempts: 1,
      maxAttempts: 1,
      status: "successful",
      telemetryNote: "Consensus ACK 200 OK (Latency: 110ms)",
    },
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleFlushRetryQueue = () => {
    setIsFlushing(true);
    setTimeout(() => {
      setIsFlushing(false);
      setEvents((prev) =>
        prev.map((e) =>
          e.status === "pending_retry"
            ? {
                ...e,
                attempts: e.attempts + 1,
                status: "successful",
                telemetryNote: "Manual Queue Flush: Dispatched & ACKed (Latency: 180ms)",
                lastError: undefined,
              }
            : e
        )
      );
      showToast(
        language === "bn"
          ? "রিট্রাই কিউ ফ্লাশ সফল: ৩টি বিলম্বিত ইভেন্ট প্যাকেটে কনফার্মেশন প্রাপ্ত"
          : "Retry queue flushed: 3 delayed event packets confirmed by AC Land Court."
      );
    }, 1200);
  };

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      showToast(
        language === "bn"
          ? "আউটবক্স ইভেন্ট লগ সফলভাবে এক্সপোর্ট হয়েছে"
          : "Outbox event ledger exported successfully (outbox_relay_log.csv)"
      );
    }, 800);
  };

  const handleRetrySingle = (id: string) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === id
          ? {
              ...e,
              attempts: e.attempts + 1,
              status: "successful",
              telemetryNote: "Single Retry Dispatched: ACK 200 OK",
              lastError: undefined,
            }
          : e
      )
    );
    showToast(`Immediate packet retry dispatched for ${id}`);
  };

  const filteredEvents = events.filter((e) => {
    const matchesTab =
      activeTab === "all" || e.status === activeTab;

    const matchesSearch =
      e.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.targetOffice.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.entityRef.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesOffice =
      officeFilter === "all" || e.targetOffice.toLowerCase().includes(officeFilter.toLowerCase());

    return matchesTab && matchesSearch && matchesOffice;
  });

  const pendingCount = events.filter((e) => e.status === "pending_retry").length;

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
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30 uppercase tracking-widest font-mono">
              Idempotent Pipeline
            </span>
            <span className="text-slate-400 text-xs font-mono">
              • Sub-Registry Node: SAV-01
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {language === "bn"
              ? "লেজার রিলে ও অ্যাসিনক্রোনাস ইভেন্ট আউটবক্স"
              : "Ledger Relay & Async Event Outbox"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
            {language === "bn"
              ? "সাভার সাব-রেজিস্ট্রি, এসি ল্যান্ড আদালত, ব্যাংকিং গেটওয়ে ও বিচারিক নোডগুলোর মধ্যে অ্যাসিনক্রোনাস মেসেজ ডিসপ্যাচ নিরীক্ষা।"
              : "Monitor asynchronous multi-institutional event dispatch across Savar Sub-Registry, AC Land offices, banking gateways, and judicial nodes."}
          </p>
        </div>

        {/* Action Cluster */}
        <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
          <button
            type="button"
            onClick={handleExport}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm active:scale-[0.98] disabled:opacity-50"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>
              {isExporting
                ? language === "bn"
                  ? "এক্সপোর্ট হচ্ছে..."
                  : "Exporting..."
                : language === "bn"
                ? "আউটবক্স লগ (.CSV)"
                : "Export Outbox Log (.CSV)"}
            </span>
          </button>

          <button
            type="button"
            onClick={handleFlushRetryQueue}
            disabled={isFlushing}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all duration-200 text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_26px_rgba(56,189,248,0.65)] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
          >
            <RotateCcw
              className={`w-4 h-4 ${isFlushing ? "animate-spin text-slate-950" : ""}`}
            />
            <span>
              {isFlushing
                ? language === "bn"
                  ? "ফ্লাশিং চলছে..."
                  : "Flushing Queue..."
                : language === "bn"
                ? "রিট্রাই কিউ ফ্লাশ করুন"
                : "Flush Retry Queue"}
            </span>
          </button>
        </div>
      </section>

      {/* 3 STAT METRICS CARDS (Bento Glass Grid - Per Stitch Spec) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat 1: Sent & Synchronized */}
        <div className="rounded-2xl p-6 bg-white/[0.05] backdrop-blur-xl border border-white/15 flex flex-col justify-between relative overflow-hidden group hover:border-sky-400/40 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {language === "bn" ? "প্রেরিত ও সমন্বিত ইভেন্ট" : "Sent & Synchronized"}
              </span>
              <div className="text-2xl sm:text-3xl text-white mt-1.5 font-bold tracking-tight font-mono">
                {language === "bn" ? "১৪,৮৯২" : "14,892"}
              </div>
            </div>
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.25)]">
              <Send className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>99.98% delivery rate</span>
            </span>
            <span className="text-xs text-slate-400">Consensus Ack &lt; 250ms</span>
          </div>
        </div>

        {/* Stat 2: Pending Retries */}
        <div className="rounded-2xl p-6 bg-white/[0.05] backdrop-blur-xl border border-white/15 flex flex-col justify-between relative overflow-hidden group hover:border-amber-400/40 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {language === "bn" ? "অপেক্ষমান পুনঃপ্রচেষ্টা" : "Pending Retries"}
              </span>
              <div className="text-2xl sm:text-3xl text-amber-300 mt-1.5 font-bold tracking-tight font-mono">
                {pendingCount}
              </div>
            </div>
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)]">
              <RotateCcw className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Exponential backoff active (60s)</span>
            </span>
          </div>
        </div>

        {/* Stat 3: Dead-Letter Queue */}
        <div className="rounded-2xl p-6 bg-white/[0.05] backdrop-blur-xl border border-white/15 flex flex-col justify-between relative overflow-hidden group hover:border-sky-400/30 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {language === "bn" ? "ড্রপ হওয়া প্যাকেট" : "Dead-Letter Queue"}
              </span>
              <div className="text-2xl sm:text-3xl text-white mt-1.5 font-bold tracking-tight font-mono">
                0
              </div>
            </div>
            <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-400">
              <Inbox className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-slate-300 text-xs font-medium">
              Zero dropped packets
            </span>
            <span className="text-xs text-emerald-400 font-medium">100% replayability</span>
          </div>
        </div>
      </section>

      {/* FILTER & CONTROL TOOLBAR (Per Stitch Spec) */}
      <section className="rounded-2xl p-3.5 bg-white/[0.05] backdrop-blur-xl border border-white/15 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        {/* Search Input */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950/70 border border-white/15 flex-1 min-w-[260px] max-w-md focus-within:border-sky-400 transition-all">
          <Search className="w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by event ID, deed no., or topic..."
            className="bg-transparent border-none text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none w-full p-0"
          />
        </div>

        {/* Segmented Status Tabs */}
        <div className="flex items-center gap-1 bg-slate-950/70 p-1 rounded-xl border border-white/10 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === "all"
                ? "bg-sky-500/25 text-sky-300 border border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.25)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All Events (14,895)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("pending_retry")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === "pending_retry"
                ? "bg-sky-500/25 text-sky-300 border border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.25)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Pending Retry ({pendingCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("successful")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === "successful"
                ? "bg-sky-500/25 text-sky-300 border border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.25)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Successful (14,892)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("dead_letter")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeTab === "dead_letter"
                ? "bg-sky-500/25 text-sky-300 border border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.25)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Dead-Letter (0)
          </button>
        </div>

        {/* Office & Gateway Dropdown Filter */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={officeFilter}
              onChange={(e) => setOfficeFilter(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 rounded-xl bg-slate-950/70 border border-white/15 text-slate-300 text-xs focus:outline-none focus:border-sky-400 cursor-pointer"
            >
              <option value="all">All Offices & Gateways</option>
              <option value="savar sub-registry">Savar Sub-Registry</option>
              <option value="savar ac land">Savar AC Land Court</option>
              <option value="sonali bank">Sonali Bank Gateway</option>
              <option value="judge court">Judicial Relay</option>
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none w-3.5 h-3.5" />
          </div>

          <button
            type="button"
            onClick={() => showToast("Feed refreshed with consensus block #8,492,109")}
            className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-sky-300 transition-colors"
            title="Refresh Feed"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* OUTBOX GLASS DATA TABLE (Per Stitch Spec) */}
      <section className="rounded-2xl overflow-hidden bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="bg-slate-950/70 border-b border-white/10 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">EVENT & TIMESTAMP</th>
                <th className="py-3.5 px-4">TARGET OFFICE / CONSUMER</th>
                <th className="py-3.5 px-4">DEED / ENTITY REF</th>
                <th className="py-3.5 px-4">ATTEMPTS</th>
                <th className="py-3.5 px-4">LAST ERROR & TELEMETRY</th>
                <th className="py-3.5 px-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-xs sm:text-sm">
              {filteredEvents.map((row) => {
                const isAmber = row.status === "pending_retry";
                const rowClass = isAmber
                  ? "bg-amber-950/20 hover:bg-amber-900/30 border-l-4 border-l-amber-400"
                  : "hover:bg-white/[0.04]";

                return (
                  <tr key={row.id} className={`transition-colors ${rowClass}`}>
                    {/* Event & Timestamp */}
                    <td className="py-4 px-4 align-top">
                      <div className="flex items-center gap-2">
                        {isAmber ? (
                          <AlertTriangle className="w-4 h-4 text-amber-400 animate-pulse" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        )}
                        <span className="font-mono font-bold text-white tracking-tight">
                          {row.id}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" />
                        <span>{row.timeAgo}</span>
                      </div>
                    </td>

                    {/* Target Office */}
                    <td className="py-4 px-4 align-top">
                      <div className="text-white font-semibold flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-sky-400" />
                        <span>{row.targetOffice}</span>
                      </div>
                      <div className="text-xs text-sky-400/80 font-mono mt-0.5">
                        {row.targetNode}
                      </div>
                    </td>

                    {/* Deed / Entity */}
                    <td className="py-4 px-4 align-top">
                      <div className="text-white font-mono font-semibold">
                        {row.entityRef}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {row.entitySub}
                      </div>
                    </td>

                    {/* Attempts */}
                    <td className="py-4 px-4 align-top whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold ${
                          isAmber
                            ? "bg-amber-500/20 text-amber-300 border border-amber-400/40"
                            : "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"
                        }`}
                      >
                        {row.attempts} / {row.maxAttempts}
                      </span>
                    </td>

                    {/* Last Error & Telemetry */}
                    <td className="py-4 px-4 align-top">
                      {row.lastError ? (
                        <div className="text-xs text-rose-300 font-mono bg-rose-500/10 p-2 rounded-lg border border-rose-500/20 leading-relaxed max-w-sm">
                          {row.lastError}
                        </div>
                      ) : null}
                      <div className="text-xs text-slate-400 mt-1 font-mono">
                        {row.telemetryNote}
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        {isAmber && (
                          <button
                            type="button"
                            onClick={() => handleRetrySingle(row.id)}
                            className="px-2.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-sm transition-all"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Retry</span>
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedEvent(row);
                            setPayloadModalOpen(true);
                          }}
                          className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-1 transition-colors"
                        >
                          <Code className="w-3 h-3" />
                          <span>Payload</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 bg-slate-950/40">
          <span>Displaying {filteredEvents.length} active relay event envelopes</span>
          <div className="font-mono text-[11px] text-slate-500">
            Relay Daemon Channel: SSL/mTLS 1.3 Certified
          </div>
        </div>
      </section>

      {/* Payload Modal */}
      {selectedEvent && (
        <PayloadInspectorModal
          isOpen={payloadModalOpen}
          onClose={() => setPayloadModalOpen(false)}
          event={selectedEvent}
        />
      )}
    </main>
  );
};
