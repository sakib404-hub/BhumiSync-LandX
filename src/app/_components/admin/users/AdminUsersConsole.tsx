"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  UserPlus,
  Search,
  Shield,
  Key,
  Edit,
  CheckCircle2,
  AlertCircle,
  Building,
  Check,
  RefreshCw,
  X,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AddStaffModal } from "@/app/_components/admin/users/AddStaffModal";

interface Officer {
  id: string;
  name: string;
  email: string;
  role: string;
  roleKey: "ac_land" | "sub_registrar" | "bank_liaison" | "judicial";
  station: string;
  nodeId: string;
  status: "Active" | "Suspended";
  clearance: string;
  initials: string;
  avatarBg: string;
}

export const AdminUsersConsole = () => {
  const { t, language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [toastNotice, setToastNotice] = useState<string | null>(null);

  const [officers, setOfficers] = useState<Officer[]>([
    {
      id: "OFF-001",
      name: "M. Rahman, BCS",
      email: "ac.savar@bhumisync.gov.bd",
      role: "Assistant Commissioner (Land)",
      roleKey: "ac_land",
      station: "Savar AC Land Office",
      nodeId: "Node ACL-DH-04",
      status: "Active",
      clearance: "Level 4 Judicial",
      initials: "MR",
      avatarBg: "from-cyan-500/30 to-blue-600/30 text-cyan-300 border-cyan-400/50",
    },
    {
      id: "OFF-002",
      name: "Kazi Farhan Ahmed",
      email: "subreg.savar@bhumisync.gov.bd",
      role: "Sub-Registrar",
      roleKey: "sub_registrar",
      station: "Savar Sub-Registry",
      nodeId: "Node SUB-REG-01",
      status: "Active",
      clearance: "Level 3 Sealed",
      initials: "KF",
      avatarBg: "from-blue-500/30 to-indigo-600/30 text-blue-300 border-blue-400/50",
    },
    {
      id: "OFF-003",
      name: "Tanvir Hasan",
      email: "tanvir.hasan@sonalibank.com.bd",
      role: "Bank Liaison Officer",
      roleKey: "bank_liaison",
      station: "Sonali Bank Savar Hub",
      nodeId: "Node BNK-SAV-09",
      status: "Active",
      clearance: "Level 2 Collateral",
      initials: "TH",
      avatarBg: "from-amber-500/30 to-orange-600/30 text-amber-300 border-amber-400/50",
    },
    {
      id: "OFF-004",
      name: "Begum Rokeya Sultana",
      email: "rokeya.sultana@judiciary.gov.bd",
      role: "Judicial Settlement Magistrate",
      roleKey: "judicial",
      station: "Senior Assistant Judge Court Savar",
      nodeId: "Node CRT-DH-02",
      status: "Active",
      clearance: "Level 4 Injunction",
      initials: "RS",
      avatarBg: "from-purple-500/30 to-pink-600/30 text-purple-300 border-purple-400/50",
    },
    {
      id: "OFF-005",
      name: "Al-Amin Shikdar",
      email: "surveyor.savar@settlement.gov.bd",
      role: "Cadastral Survey Amin",
      roleKey: "ac_land",
      station: "Savar Revenue Settlement Circle",
      nodeId: "Node SURV-SAV-11",
      status: "Active",
      clearance: "Level 2 Geofence",
      initials: "AS",
      avatarBg: "from-teal-500/30 to-emerald-600/30 text-teal-300 border-teal-400/50",
    },
    {
      id: "OFF-006",
      name: "Dr. M. Kamal Hossain",
      email: "kamal.hossain@bracbank.com",
      role: "Mortgage Escrow Liaison",
      roleKey: "bank_liaison",
      station: "BRAC Bank Corporate HQ",
      nodeId: "Node BNK-BRAC-03",
      status: "Active",
      clearance: "Level 2 NBFI Lock",
      initials: "KH",
      avatarBg: "from-amber-500/30 to-yellow-600/30 text-amber-300 border-amber-400/50",
    },
  ]);

  const showToast = (message: string) => {
    setToastNotice(message);
    setTimeout(() => setToastNotice(null), 3500);
  };

  const toggleCredentialStatus = (id: string) => {
    setOfficers((prev) =>
      prev.map((o) => {
        if (o.id === id) {
          const newStatus = o.status === "Active" ? "Suspended" : "Active";
          showToast(
            language === "bn"
              ? `${o.name} এর ক্রেডেনশিয়াল ${newStatus === "Active" ? "সক্রিয়" : "স্থগিত"} করা হয়েছে`
              : `${o.name}'s credential set to ${newStatus}`
          );
          return { ...o, status: newStatus };
        }
        return o;
      })
    );
  };

  const handleReissueKey = (officer: Officer) => {
    showToast(
      language === "bn"
        ? `${officer.name} (${officer.nodeId}) এর জন্য নতুন ED25519 সিকিউরিটি কি ইস্যু করা হয়েছে`
        : `New ED25519 HSM Keypair re-issued for ${officer.name} (${officer.nodeId})`
    );
  };

  const handleAddOfficer = (newOfficer: any) => {
    setOfficers((prev) => [
      {
        ...newOfficer,
        avatarBg: "from-sky-500/30 to-blue-600/30 text-sky-300 border-sky-400/50",
      },
      ...prev,
    ]);
    showToast(
      language === "bn"
        ? `${newOfficer.name} সফলভাবে যুক্ত হয়েছেন`
        : `Officer ${newOfficer.name} provisioned successfully`
    );
  };

  const filteredOfficers = officers.filter((officer) => {
    const matchesSearch =
      officer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      officer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      officer.station.toLowerCase().includes(searchQuery.toLowerCase()) ||
      officer.nodeId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole =
      roleFilter === "all" || officer.roleKey === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto flex flex-col gap-6 sm:gap-8">
      {/* Toast Alert */}
      <AnimatePresence>
        {toastNotice && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900/95 border border-sky-400/50 text-sky-200 text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(56,189,248,0.35)] flex items-center gap-3 backdrop-blur-xl"
          >
            <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
            <span>{toastNotice}</span>
            <button
              onClick={() => setToastNotice(null)}
              className="text-slate-400 hover:text-white ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER SECTION (Per Stitch Spec) */}
      <section className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              {language === "bn"
                ? "কর্মকর্তা ও প্রাতিষ্ঠানিক ইউজার ব্যবস্থাপনা"
                : "Staff & Institutional User Management"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
              {language === "bn"
                ? "সাভার রেজিস্ট্রি অফিস, ভূমি রাজস্ব আদালত, ব্যাংক লিয়াজোঁ ও দেওয়ানি আদালতের ক্রিপ্টোগ্রাফিক সনদ এবং অ্যাক্সেস পরিচালনা।"
                : "Manage cryptographic credentials, ledger multisig verification rights, and jurisdictional access levels across Savar registry bodies, land revenue offices, financial liaisons, and civil courts."}
            </p>
          </div>

          {/* Cyan Glow CTA Button */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(56,189,248,0.5)] hover:shadow-[0_0_32px_rgba(56,189,248,0.7)] transition-all hover:scale-[1.02] active:scale-[0.98] self-start lg:self-auto cursor-pointer"
          >
            <UserPlus className="w-5 h-5 stroke-[2.5]" />
            <span>{language === "bn" ? "+ নতুন ইউজার সংযোগ" : "+ Add Staff User"}</span>
          </button>
        </div>

        {/* Analytical Tooling Bar: Search + Role Filter Chips */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-center pt-2">
          {/* Search Box */}
          <div className="lg:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === "bn"
                  ? "নাম, ইমেইল, পদবি বা নোড আইডি দিয়ে অনুসন্ধান..."
                  : "Search staff by name, email, official node ID, or office..."
              }
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 border border-white/15 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all backdrop-blur-md"
            />
          </div>

          {/* Role Filter Chips */}
          <div className="lg:col-span-7 flex flex-wrap items-center gap-2">
            {[
              { key: "all", labelEn: "All Roles (42)", labelBn: "সকল ভূমিকা (৪২)" },
              { key: "sub_registrar", labelEn: "Sub-Registrar (8)", labelBn: "সাব-রেজিস্ট্রার (৮)" },
              { key: "ac_land", labelEn: "AC Land Officers (12)", labelBn: "এসি ল্যান্ড (১২)" },
              { key: "bank_liaison", labelEn: "Bank Liaison (14)", labelBn: "ব্যাংক লিয়াজোঁ (১৪)" },
              { key: "judicial", labelEn: "Judicial Officers (8)", labelBn: "বিচারিক কর্মকর্তা (৮)" },
            ].map((chip) => {
              const active = roleFilter === chip.key;
              return (
                <button
                  key={chip.key}
                  type="button"
                  onClick={() => setRoleFilter(chip.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    active
                      ? "bg-sky-500/25 border border-sky-400 text-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.35)]"
                      : "bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  {language === "bn" ? chip.labelBn : chip.labelEn}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* RICH FROSTED GLASS DIRECTORY TABLE (Per Stitch Spec) */}
      <section className="rounded-2xl overflow-hidden bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[780px]">
            <thead>
              <tr className="bg-slate-950/70 border-b border-white/10 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">{language === "bn" ? "কর্মকর্তা" : "STAFF MEMBER"}</th>
                <th className="py-3.5 px-4">{language === "bn" ? "প্রাতিষ্ঠানিক ভূমিকা" : "INSTITUTIONAL ROLE"}</th>
                <th className="py-3.5 px-4">{language === "bn" ? "অফিস / প্রতিষ্ঠান" : "OFFICE / INSTITUTION"}</th>
                <th className="py-3.5 px-4">{language === "bn" ? "নোড আইডি" : "JURISDICTIONAL NODE"}</th>
                <th className="py-3.5 px-4 text-center">{language === "bn" ? "সক্রিয় সনদ" : "ACTIVE CREDENTIAL"}</th>
                <th className="py-3.5 px-6 text-right">{language === "bn" ? "পদক্ষেপ" : "ACTIONS"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-xs sm:text-sm">
              {filteredOfficers.map((officer) => {
                const isActive = officer.status === "Active";

                // Role badge color helper
                const roleChipClass =
                  officer.roleKey === "ac_land"
                    ? "bg-cyan-500/15 border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                    : officer.roleKey === "sub_registrar"
                    ? "bg-blue-500/15 border-blue-400/40 text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                    : officer.roleKey === "bank_liaison"
                    ? "bg-amber-500/15 border-amber-400/40 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                    : "bg-purple-500/15 border-purple-400/40 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]";

                return (
                  <tr
                    key={officer.id}
                    className="hover:bg-white/[0.04] transition-colors group"
                  >
                    {/* Staff Member with Avatar */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-tr border flex items-center justify-center font-bold text-xs shadow-md shrink-0 ${officer.avatarBg}`}
                        >
                          {officer.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-white group-hover:text-sky-300 transition-colors flex items-center gap-2">
                            <span>{officer.name}</span>
                          </div>
                          <div className="text-xs text-slate-400 font-mono truncate">
                            {officer.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Institutional Role Chip */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${roleChipClass}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{officer.role}</span>
                      </span>
                    </td>

                    {/* Office / Institution */}
                    <td className="py-4 px-4 text-slate-200 font-medium">
                      {officer.station}
                    </td>

                    {/* Jurisdictional Node */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <code className="px-2.5 py-1 rounded-md bg-slate-900/80 text-sky-300 text-xs font-mono border border-sky-400/30">
                        {officer.nodeId}
                      </code>
                    </td>

                    {/* Active Credential Toggle Switch */}
                    <td className="py-4 px-4">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <button
                          type="button"
                          onClick={() => toggleCredentialStatus(officer.id)}
                          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            isActive
                              ? "bg-sky-500 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                              : "bg-slate-700/80"
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                              isActive ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <span className="text-[10px] font-mono text-slate-400">
                          {isActive ? "Active" : "Suspended"}
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            showToast(
                              language === "bn"
                                ? `${officer.name} এর পারমিশন এডিটর খোলা হচ্ছে`
                                : `Editing permissions for ${officer.name}`
                            )
                          }
                          className="p-2 rounded-lg text-slate-400 hover:text-sky-300 hover:bg-white/[0.08] transition-colors"
                          title="Edit Permissions"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleReissueKey(officer)}
                          className="p-2 rounded-lg text-slate-400 hover:text-emerald-300 hover:bg-white/[0.08] transition-colors"
                          title="Re-issue Ledger Key (HSM)"
                        >
                          <Key className="w-4 h-4" />
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
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {language === "bn"
                ? `মোট ${filteredOfficers.length} জন সক্রিয় প্রাতিষ্ঠানিক কর্মকর্তা প্রদর্শিত হচ্ছে`
                : `Showing ${filteredOfficers.length} authenticated institutional staff nodes`}
            </span>
          </div>
          <div className="text-[11px] text-slate-500 font-mono">
            HSM Multisig Quorum: 3-of-5 Signature Policy Enforced
          </div>
        </div>
      </section>

      {/* Add Staff Modal */}
      <AddStaffModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddOfficer={handleAddOfficer}
      />
    </main>
  );
};
