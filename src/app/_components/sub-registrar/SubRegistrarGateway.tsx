"use client";

import Link from "next/link";
import {
  Landmark,
  LayoutDashboard,
  FileSignature,
  ShieldCheck,
  FolderOpen,
  ArrowRight,
  Shield,
  Activity,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const SubRegistrarGateway = () => {
  const { t, language } = useLanguage();

  const portalCards = [
    {
      titleKey: "subRegistrar.cardDashboardTitle",
      descKey: "subRegistrar.cardDashboardDesc",
      actionKey: "subRegistrar.openDashboard",
      href: "/sub-registrar/dashboard",
      icon: LayoutDashboard,
      badge: language === "bn" ? "অপারেশনস কনসোল" : "Active Console",
      badgeColor: "bg-sky-500/15 border-sky-400/30 text-sky-300",
      iconColor: "text-sky-400",
      accentBg: "from-sky-500/10 via-sky-500/5 to-transparent",
      highlightBorder: "hover:border-sky-400/50 hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]",
      isPrimary: true,
    },
    {
      titleKey: "subRegistrar.cardRegisterTitle",
      descKey: "subRegistrar.cardRegisterDesc",
      actionKey: "subRegistrar.startRegistration",
      href: "/sub-registrar/register",
      icon: FileSignature,
      badge: language === "bn" ? "বায়োমেট্রিক নোটারি" : "Biometric Notary",
      badgeColor: "bg-emerald-500/15 border-emerald-400/30 text-emerald-300",
      iconColor: "text-emerald-400",
      accentBg: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      highlightBorder: "hover:border-emerald-400/50 hover:shadow-[0_0_24px_rgba(52,211,153,0.2)]",
      isPrimary: false,
    },
    {
      titleKey: "subRegistrar.cardValidateTitle",
      descKey: "subRegistrar.cardValidateDesc",
      actionKey: "subRegistrar.verifyDeed",
      href: "/sub-registrar/validate",
      icon: ShieldCheck,
      badge: language === "bn" ? "ক্রিপ্টোগ্রাফিক সিল" : "SHA-256 Seal",
      badgeColor: "bg-indigo-500/15 border-indigo-400/30 text-indigo-300",
      iconColor: "text-indigo-400",
      accentBg: "from-indigo-500/10 via-indigo-500/5 to-transparent",
      highlightBorder: "hover:border-indigo-400/50 hover:shadow-[0_0_24px_rgba(129,140,248,0.2)]",
      isPrimary: false,
    },
    {
      titleKey: "subRegistrar.cardArchivesTitle",
      descKey: "subRegistrar.cardArchivesDesc",
      actionKey: "subRegistrar.browseArchives",
      href: "/citizen/deeds",
      icon: FolderOpen,
      badge: language === "bn" ? "অপরিবর্তনীয় লেজার" : "Permanent Ledger",
      badgeColor: "bg-amber-500/15 border-amber-400/30 text-amber-300",
      iconColor: "text-amber-400",
      accentBg: "from-amber-500/10 via-amber-500/5 to-transparent",
      highlightBorder: "hover:border-amber-400/50 hover:shadow-[0_0_24px_rgba(251,191,36,0.2)]",
      isPrimary: false,
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-140px)] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Hero Presentation Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        {/* Institutional Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 text-sky-300 text-xs font-semibold mb-6 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
          <Landmark className="w-3.5 h-3.5 text-sky-400" />
          <span>{t("subRegistrar.gatewayBadge")}</span>
          <span className="w-1 h-1 rounded-full bg-sky-400" />
          <span className="text-slate-400 font-mono text-[11px]">SR-OFF-092</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight">
          {language === "bn" ? (
            <>
              সাব-রেজিস্ট্রার <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">অফিশিয়াল গেটওয়ে</span>
            </>
          ) : (
            <>
              Sub-Registrar <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Official Gateway</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-slate-300/90 max-w-2xl leading-relaxed">
          {t("subRegistrar.gatewaySubtitle")}
        </p>

        {/* Station Jurisdiction Card */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs text-slate-300 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-semibold text-white">{t("subRegistrar.station")}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{t("subRegistrar.stationSub")}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t("subRegistrar.sessionActive")}</span>
          </div>
        </div>

        {/* Primary Launch Action */}
        <div className="mt-8">
          <Link
            href="/sub-registrar/dashboard"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-[0_0_28px_rgba(56,189,248,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <LayoutDashboard className="w-4 h-4 text-white" />
            <span>{t("subRegistrar.enterDashboard")}</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>

      {/* Core Institutional Capability Cards */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12"
      >
        {portalCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Link
              key={idx}
              href={card.href}
              className={`group relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 ${card.highlightBorder} hover:-translate-y-1.5`}
            >
              {/* Card Top Ambient Glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${card.accentBg} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${card.iconColor} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Card Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {t(card.titleKey)}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {t(card.descKey)}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="relative z-10 pt-5 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                <span>{t(card.actionKey)}</span>
                <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </motion.div>

      {/* Security & Official Protocol Notice */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/10 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
            <Shield className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white tracking-wide">
                {t("subRegistrar.officialId")}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono text-emerald-400">Class-3 PKI Verified</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
              {t("subRegistrar.securityClearance")}
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-3 w-full md:w-auto">
          <Link
            href="/sub-registrar/dashboard"
            className="w-full md:w-auto text-center px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-sky-300 hover:text-white transition-all cursor-pointer"
          >
            {t("subRegistrar.enterDashboard")} →
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
