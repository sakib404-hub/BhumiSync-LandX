"use client";

import { useState } from "react";
import { X, UserPlus, Shield, Key, Building2, Hash, Mail, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface AddStaffModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddOfficer: (officer: any) => void;
}

export const AddStaffModal = ({
  isOpen,
  onClose,
  onAddOfficer,
}: AddStaffModalProps) => {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("ac_land");
  const [station, setStation] = useState("Savar AC Land Court");
  const [nodeId, setNodeId] = useState("Node ACL-DH-05");
  const [authorityLevel, setAuthorityLevel] = useState("Level 4 Judicial");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      onAddOfficer({
        id: `OFF-00${Math.floor(Math.random() * 90) + 10}`,
        name,
        email,
        role:
          role === "ac_land"
            ? "Assistant Commissioner (Land)"
            : role === "sub_registrar"
            ? "Sub-Registrar"
            : role === "bank_liaison"
            ? "Bank Liaison Officer"
            : "Judicial Settlement Magistrate",
        station,
        nodeId,
        status: "Active",
        clearance: authorityLevel,
        roleKey: role,
        initials: name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)
          .toUpperCase(),
      });
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0b172a] border border-white/20 shadow-[0_16px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(56,189,248,0.2)] p-6 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <UserPlus className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {language === "bn" ? "নতুন কর্মকর্তা সংযোগ করুন" : "Add Institutional Staff User"}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === "bn"
                  ? "সাভার রেজিস্ট্রি ও রাজস্ব প্রশাসনের জন্য অনুমোদিত কর্মকর্তা সংযোগ"
                  : "Provision institutional credentials, HSM keys, and jurisdictional rights."}
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                {language === "bn" ? "পূর্ণ নাম" : "Full Legal Name"}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Kazi Arif Rahman"
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                />
              </div>
            </div>

            {/* Official Email */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                {language === "bn" ? "অফিসিয়াল ইমেইল" : "Official Gov Email"}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="officer@bhumisync.gov.bd"
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-mono"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Department / Role */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                {language === "bn" ? "প্রতিষ্ঠানিক পদবি" : "Institutional Role"}
              </label>
              <select
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  if (e.target.value === "ac_land") {
                    setStation("Savar AC Land Court");
                    setNodeId("Node ACL-DH-05");
                    setAuthorityLevel("Level 4 Judicial");
                  } else if (e.target.value === "sub_registrar") {
                    setStation("Savar Sub-Registry Office");
                    setNodeId("Node SUB-REG-02");
                    setAuthorityLevel("Level 3 Sealed");
                  } else if (e.target.value === "bank_liaison") {
                    setStation("Sonali Bank Savar Hub");
                    setNodeId("Node BNK-SAV-12");
                    setAuthorityLevel("Level 2 Collateral");
                  } else {
                    setStation("Dhaka Senior Court");
                    setNodeId("Node CRT-DH-03");
                    setAuthorityLevel("Level 4 Injunction");
                  }
                }}
                className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all cursor-pointer"
              >
                <option value="ac_land">Assistant Commissioner (Land)</option>
                <option value="sub_registrar">Sub-Registrar</option>
                <option value="bank_liaison">Bank Liaison Officer</option>
                <option value="judicial">Judicial Settlement Magistrate</option>
              </select>
            </div>

            {/* Jurisdictional Node */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                {language === "bn" ? "নোড আইডি" : "Jurisdictional Node ID"}
              </label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={nodeId}
                  onChange={(e) => setNodeId(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/80 border border-white/15 text-sky-300 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-mono"
                />
              </div>
            </div>
          </div>

          {/* Station / Jurisdiction */}
          <div>
            <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              {language === "bn" ? "অফিস / এখতিয়ার" : "Station & Office Jurisdiction"}
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                required
                value={station}
                onChange={(e) => setStation(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
              />
            </div>
          </div>

          {/* Security & HSM Notice */}
          <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-start gap-2.5">
            <Key className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-sky-200/90 leading-relaxed">
              {language === "bn"
                ? "কর্মকর্তা সংযোগ সম্পন্ন হলে স্বয়ংক্রিয়ভাবে একটি ED25519 সিকিউর ক্রিপ্টোগ্রাফিক কি-পেয়ার জেনারেট হয়ে হার্ডওয়্যার সিকিউরিটি মডিউলে জমা হবে।"
                : "Upon provisioning, an ED25519 signing keypair will be minted and bound to this institutional node with multisig validation rights."}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold transition-colors"
            >
              {language === "bn" ? "বাতিল" : "Cancel"}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all disabled:opacity-50"
            >
              <UserPlus className="w-4 h-4 stroke-[2.5]" />
              <span>
                {isSubmitting
                  ? language === "bn"
                    ? "যুক্ত হচ্ছে..."
                    : "Provisioning..."
                  : language === "bn"
                  ? "কর্মকর্তা সংযোগ নিশ্চিত করুন"
                  : "Provision Officer"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
