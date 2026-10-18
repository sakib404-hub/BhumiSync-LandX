"use client";

import Link from "next/link";
import {
  Clock,
  DoorOpen,
  Building,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  FolderOpen,
  CheckCircle2,
  Users,
  Radio,
  FileCheck2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface HearingsDocketListProps {
  activeDateTab: string;
  searchQuery: string;
  hearingTypeFilter: string;
}

export const HearingsDocketList = ({
  activeDateTab,
  searchQuery,
  hearingTypeFilter,
}: HearingsDocketListProps) => {
  const { t, language } = useLanguage();

  const todayHearings = [
    {
      id: "MUT-2026-000001",
      deedNo: "SYN-D-0001",
      time: "11:00 AM",
      session: "Session 02 • Room 204",
      mouza: "Mouza SYN-Savar",
      daag: "452/1",
      khatian: "1187 (BS)",
      type: "waived",
      transferor: "SYN Rahim Uddin",
      transferorNid: "SYN-NID-A10021",
      transferee: "SYN Karim Hossain",
      transfereeNid: "SYN-NID-B20045",
      share: "0.2500 (4 anna) Conveyance",
      statusChip: language === "bn" ? "নিষ্কণ্টক দলিলের জন্য শুনানি মওকুফ" : "Waived for Clear Titles (No Encumbrance)",
      auditNote: language === "bn" ? "কানুনগো মাঠ প্রতিবেদন গৃহীত • শূন্য সীমানা বিরোধ" : "Kanungo Field Report Complete • Zero Overlap",
      summonsChip: language === "bn" ? "এনআইডি টোকেনের মাধ্যমে উভয় পক্ষ উপস্থিত" : "Both Parties Present via NID Token",
      isCanonical: true,
    },
    {
      id: "MUT-2026-000004",
      deedNo: "SYN-D-8894",
      time: "10:30 AM",
      session: "Session 01 • Room 201",
      mouza: "Mouza SYN-Savar",
      daag: "310/2",
      khatian: "610 (CS)",
      type: "boundary",
      transferor: "SYN Jamir Ali",
      transferorNid: "",
      transferee: "SYN Farhana Akter",
      transfereeNid: "",
      share: "0.5000 (8 anna)",
      statusChip: language === "bn" ? "সীমানা জটিলতা / বিরোধ উত্থাপিত" : "Boundary Overlap Claimed",
      auditNote: language === "bn" ? "ক্যাডাস্ট্রাল ম্যাপ শিট ০২ সহ আমিনকে তলব করা হয়েছে" : "Surveyor Amin summoned with Cadastral Map Sheet 02",
      summonsChip: language === "bn" ? "১টি নোটিশ অপরিশোধিত" : "1 Notice Undelivered",
      isCanonical: false,
    },
    {
      id: "MUT-2026-000008",
      deedNo: "SYN-D-8712",
      time: "02:30 PM",
      session: "Session 03 • Bench Room",
      mouza: "Mouza SYN-Savar",
      daag: "119/A",
      khatian: "334 (RS)",
      type: "heir",
      transferor: "SYN A. Chowdhury",
      transferorNid: "",
      transferee: language === "bn" ? "৫ জন শরিকের উত্তরাধিকারী বিরোধ" : "5 Co-sharers Heir Dispute",
      transfereeNid: "",
      share: language === "bn" ? "সাভার সেন্ট্রাল এখতিয়ার" : "Jurisdiction: Savar Central",
      statusChip: language === "bn" ? "খতিয়ান ওয়ারিশান আপত্তি" : "Khatian Heir Contest",
      auditNote: language === "bn" ? "ওয়ারিশান সনদের প্রামাণিক যাচাইকরণ আবশ্যক" : "Succession Certificate cross-reference required",
      summonsChip: language === "bn" ? "সমন গ্রহণ নিশ্চিত" : "Summons Acknowledged",
      isCanonical: false,
    },
  ];

  const tomorrowHearings = [
    {
      id: "MUT-2026-000012",
      deedNo: "SYN-D-0009",
      time: "10:00 AM",
      session: "Session 01 • Room 201",
      mouza: "Mouza SYN-Savar",
      daag: "502/3",
      khatian: "890 (BS)",
      type: "routine",
      transferor: "SYN Tariqul Islam",
      transferorNid: "",
      transferee: "SYN Nazmul Huda",
      transfereeNid: "",
      share: "0.1250 (2 anna)",
      statusChip: language === "bn" ? "নিয়মিত রেকর্ড অন্তর্ভুক্তি" : "Routine Title Inscription",
      auditNote: language === "bn" ? "প্রাথমিক স্বয়ংক্রিয় যাচাই সম্পন্ন" : "Initial Automated Ingestion Validated",
      summonsChip: language === "bn" ? "এসএমএস প্রেরিত" : "SMS Sent",
      isCanonical: false,
    },
    {
      id: "MUT-2026-000015",
      deedNo: "SYN-D-0014",
      time: "11:30 AM",
      session: "Session 02 • Room 201",
      mouza: "Mouza SYN-Savar",
      daag: "455/1",
      khatian: "1102 (BS)",
      type: "heir",
      transferor: "SYN Begum Rokeya",
      transferorNid: "",
      transferee: language === "bn" ? "ওয়ারিশান বণ্টন (ওয়ারিশনামা যাচাইকৃত)" : "Inheritance Division (Warisnamah Verified)",
      transfereeNid: "",
      share: language === "bn" ? "বিএস খতিয়ান একত্রীকরণ" : "BS Khatian Consolidation",
      statusChip: language === "bn" ? "মাঠ যাচাই নিষ্কণ্টক" : "Field Verification Clear",
      auditNote: language === "bn" ? "ইউনিয়ন ভূমি সহকারী কর্মকর্তা (নায়েব) প্রত্যয়িত" : "Union Land Assistant Officer (ULAO) Endorsed",
      summonsChip: language === "bn" ? "বায়োমেট্রিক প্রস্তুত" : "Biometric Ready",
      isCanonical: false,
    },
  ];

  // Filter functions
  const filterList = (list: typeof todayHearings) => {
    return list.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        item.id.toLowerCase().includes(q) ||
        item.deedNo.toLowerCase().includes(q) ||
        item.daag.toLowerCase().includes(q) ||
        item.transferor.toLowerCase().includes(q) ||
        item.transferee.toLowerCase().includes(q);

      const matchType =
        hearingTypeFilter === "all" || item.type === hearingTypeFilter;

      return matchQuery && matchType;
    });
  };

  const filteredToday = activeDateTab === "tomorrow" ? [] : filterList(todayHearings);
  const filteredTomorrow = activeDateTab === "today" ? [] : filterList(tomorrowHearings);

  return (
    <section className="space-y-6">
      {/* Group 1: Today */}
      {(activeDateTab === "today" || activeDateTab === "all" || activeDateTab === "nextWeek" || activeDateTab === "past") && (
        <div className="space-y-3">
          {/* Group Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-2 gap-2">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 border border-sky-400/40 text-sky-300 flex items-center gap-1.5 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                <span>{t("mutationHearings.groupLive")}</span>
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {t("mutationHearings.groupToday")}
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              {t("mutationHearings.roomBench")}
            </span>
          </div>

          {/* Hearing Rows */}
          {filteredToday.length === 0 ? (
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/10 text-center text-slate-400 text-sm">
              {language === "bn" ? "আজকের কোনো শুনানি পাওয়া যায়নি" : "No hearings found for today matching the filters"}
            </div>
          ) : (
            filteredToday.map((h) => (
              <div
                key={h.id}
                className={`rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-200 ${
                  h.isCanonical
                    ? "bg-slate-900/80 backdrop-blur-2xl border border-sky-400/35 shadow-[0_12px_40px_0_rgba(0,0,0,0.45),0_0_20px_rgba(56,189,248,0.15)] hover:border-sky-400/60"
                    : "bg-slate-900/60 backdrop-blur-xl border border-white/15 hover:border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
                }`}
              >
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-center">
                  {/* Col 1: Time & Session (2 cols) */}
                  <div className="xl:col-span-2 space-y-1">
                    <div className="text-xl sm:text-2xl font-bold text-sky-400 tracking-tight">
                      {h.time}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-white/5 border border-white/10 text-slate-300">
                      <DoorOpen className="w-3.5 h-3.5 text-sky-400" />
                      <span>{h.session}</span>
                    </div>
                  </div>

                  {/* Col 2: Case Identifier & Cadastral Plot (3 cols) */}
                  <div className="xl:col-span-3 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-sm font-bold text-white">
                        {h.id}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[11px] bg-slate-800 border border-white/10 text-sky-300 font-mono">
                        Deed {h.deedNo}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">
                        {h.mouza} • Daag {h.daag}, Khatian {h.khatian}
                      </span>
                    </div>
                  </div>

                  {/* Col 3: Transacting Parties & Share (3 cols) */}
                  <div className="xl:col-span-3 space-y-1 text-xs">
                    <div className="text-slate-300">
                      <span className="text-slate-400">Transferor:</span>{" "}
                      <strong className="text-white font-semibold">{h.transferor}</strong>{" "}
                      {h.transferorNid && (
                        <span className="font-mono text-[10px] text-slate-400">
                          ({h.transferorNid})
                        </span>
                      )}
                    </div>
                    <div className="text-slate-300 flex items-center gap-1 flex-wrap">
                      <ArrowRight className="w-3 h-3 text-sky-400 shrink-0" />
                      <span className="text-slate-400">Transferee:</span>{" "}
                      <strong className="text-white font-semibold">{h.transferee}</strong>{" "}
                      {h.transfereeNid && (
                        <span className="font-mono text-[10px] text-slate-400">
                          ({h.transfereeNid})
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-sky-300 font-mono">
                      {h.share}
                    </div>
                  </div>

                  {/* Col 4: Statuses & Summons Compliance (2 cols) */}
                  <div className="xl:col-span-2 space-y-1.5">
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] ${
                        h.type === "boundary"
                          ? "bg-amber-500/10 border border-amber-400/30 text-amber-300"
                          : h.type === "heir"
                          ? "bg-amber-500/10 border border-amber-400/30 text-amber-300"
                          : "bg-teal-500/10 border border-teal-400/30 text-teal-300"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          h.type === "boundary" || h.type === "heir"
                            ? "bg-amber-400"
                            : "bg-teal-400 shadow-[0_0_6px_#2dd4bf]"
                        }`}
                      />
                      <span className="truncate">{h.statusChip}</span>
                    </div>

                    <div className="text-[11px] text-slate-400 leading-tight">
                      {h.auditNote}
                    </div>

                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-white/5 border border-white/10 text-slate-300">
                      <ShieldCheck className="w-3 h-3 text-teal-400 shrink-0" />
                      <span className="truncate">{h.summonsChip}</span>
                    </div>
                  </div>

                  {/* Col 5: Actions (2 cols) */}
                  <div className="xl:col-span-2 flex flex-col sm:flex-row xl:flex-col gap-2 justify-end">
                    {h.isCanonical ? (
                      <>
                        <Link
                          href={`/ac-land/case/${h.id}`}
                          className="px-3.5 py-2 rounded-xl bg-sky-400 text-slate-950 text-xs font-bold shadow-[0_0_16px_rgba(56,189,248,0.35)] hover:bg-sky-300 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 text-center"
                        >
                          <FileCheck2 className="w-3.5 h-3.5 text-slate-950" />
                          <span>{language === "bn" ? "যাচাই ও অনুমোদন" : "Inspect & Approve"}</span>
                        </Link>
                        <Link
                          href={`/ac-land/case/${h.id}`}
                          className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 text-center"
                        >
                          <FolderOpen className="w-3 h-3 text-slate-400" />
                          <span>{t("mutationHearings.openHearingDossier")}</span>
                        </Link>
                      </>
                    ) : (
                      <Link
                        href={`/ac-land/case/MUT-2026-000001`}
                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center justify-center gap-1.5 text-center"
                      >
                        <FolderOpen className="w-3.5 h-3.5 text-sky-400" />
                        <span>{language === "bn" ? "খুলুন" : "Open"}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Group 2: Tomorrow */}
      {(activeDateTab === "tomorrow" || activeDateTab === "all" || activeDateTab === "nextWeek") && (
        <div className="space-y-3 pt-4">
          {/* Group Header Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-2 gap-2">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-slate-300">
                {language === "bn" ? "আসন্ন ডকেট" : "Upcoming Docket"}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {language === "bn"
                  ? "আগামীকাল — শনিবার, ১৯ অক্টোবর ২০২৪ (২টি শুনানি)"
                  : "Tomorrow — Saturday, 19 Oct 2024 (2 Hearings)"}
              </h2>
            </div>
            <span className="text-xs text-slate-400">Savar Bench • Room 201</span>
          </div>

          {filteredTomorrow.length === 0 ? (
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-white/10 text-center text-slate-400 text-sm">
              {language === "bn" ? "আগামীকালের কোনো শুনানি পাওয়া যায়নি" : "No hearings found for tomorrow matching the filters"}
            </div>
          ) : (
            filteredTomorrow.map((h) => (
              <div
                key={h.id}
                className="rounded-2xl p-4 sm:p-5 lg:p-6 bg-slate-900/60 backdrop-blur-xl border border-white/15 hover:border-white/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-200"
              >
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-center">
                  {/* Col 1 */}
                  <div className="xl:col-span-2 space-y-1">
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {h.time}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-white/5 border border-white/10 text-slate-300">
                      <DoorOpen className="w-3.5 h-3.5 text-slate-400" />
                      <span>{h.session}</span>
                    </div>
                  </div>

                  {/* Col 2 */}
                  <div className="xl:col-span-3 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-sm font-bold text-white">
                        {h.id}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[11px] bg-slate-800 border border-white/10 text-slate-300 font-mono">
                        Deed {h.deedNo}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">
                        {h.mouza} • Daag {h.daag}, Khatian {h.khatian}
                      </span>
                    </div>
                  </div>

                  {/* Col 3 */}
                  <div className="xl:col-span-3 space-y-1 text-xs">
                    <div className="text-slate-300">
                      <span className="text-slate-400">Claimant:</span>{" "}
                      <strong className="text-white font-semibold">{h.transferor}</strong>
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      {h.transferee}
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono">
                      {h.share}
                    </div>
                  </div>

                  {/* Col 4 */}
                  <div className="xl:col-span-2 space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-sky-500/10 border border-sky-400/30 text-sky-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span className="truncate">{h.statusChip}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-tight">
                      {h.auditNote}
                    </div>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-white/5 border border-white/10 text-slate-300">
                      <ShieldCheck className="w-3 h-3 text-sky-400 shrink-0" />
                      <span className="truncate">{h.summonsChip}</span>
                    </div>
                  </div>

                  {/* Col 5 */}
                  <div className="xl:col-span-2 flex justify-end">
                    <Link
                      href={`/ac-land/case/MUT-2026-000001`}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-slate-200 hover:text-white transition-all flex items-center gap-1.5"
                    >
                      <FolderOpen className="w-3.5 h-3.5 text-sky-400" />
                      <span>{language === "bn" ? "খুলুন" : "Open"}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
};
