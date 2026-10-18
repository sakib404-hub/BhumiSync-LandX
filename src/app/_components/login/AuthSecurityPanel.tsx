"use client";

import * as React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Lock, MapPin, ShieldCheck, Link2, Activity, Network, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const AuthSecurityPanel = () => {
  const { t } = useLanguage();
  const panelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!panelRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".gsap-security-badge", {
        opacity: 0,
        y: -10,
        duration: 0.5,
      })
        .from(
          ".gsap-security-title",
          {
            opacity: 0,
            y: 16,
            duration: 0.65,
          },
          "-=0.25"
        )
        .from(
          ".gsap-security-desc",
          {
            opacity: 0,
            y: 14,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".gsap-security-feature",
          {
            opacity: 0,
            x: -16,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.2"
        )
        .from(
          ".gsap-telemetry-pill",
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.4,
            stagger: 0.08,
          },
          "-=0.2"
        );
    }, panelRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: t("auth.feat1Title"),
      desc: t("auth.feat1Desc"),
      icon: <MapPin className="h-4 w-4 text-sky-400" />,
      accentBorder: "border-sky-500/20 hover:border-sky-400/50 hover:bg-sky-500/[0.04]",
      iconBg: "bg-sky-500/10 border-sky-400/30 text-sky-300",
    },
    {
      title: t("auth.feat2Title"),
      desc: t("auth.feat2Desc"),
      icon: <ShieldCheck className="h-4 w-4 text-emerald-400" />,
      accentBorder: "border-emerald-500/20 hover:border-emerald-400/50 hover:bg-emerald-500/[0.04]",
      iconBg: "bg-emerald-500/10 border-emerald-400/30 text-emerald-300",
    },
    {
      title: t("auth.feat3Title"),
      desc: t("auth.feat3Desc"),
      icon: <Link2 className="h-4 w-4 text-cyan-300" />,
      accentBorder: "border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/[0.04]",
      iconBg: "bg-cyan-400/10 border-cyan-400/30 text-cyan-200",
    },
  ];

  return (
    <section
      ref={panelRef}
      className="flex flex-col justify-between p-7 lg:p-8 rounded-3xl relative overflow-hidden backdrop-blur-2xl bg-white/[0.06] border border-white/[0.18] shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all group"
    >
      {/* Dynamic Top Ambient Prism Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

      {/* Ambient Internal Glow Flares */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Sovereign Cadastral Watermark Stamp */}
      <div className="absolute -right-8 -bottom-8 opacity-[0.035] pointer-events-none select-none text-white">
        <Shield className="w-80 h-80" strokeWidth={1} />
      </div>

      <div className="relative z-10 space-y-6">
        {/* Top Header Row with Badge & Node Indicator */}
        <div className="flex items-center justify-between gap-3">
          <div className="gsap-security-badge inline-block">
            <Badge
              variant="pending"
              className="px-3.5 py-1 text-xs bg-sky-500/15 border-sky-400/35 text-sky-200 shadow-[0_0_14px_rgba(56,189,248,0.2)]"
            >
              <Lock className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
              {t("auth.badge")}
            </Badge>
          </div>

          <div className="gsap-telemetry-pill hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/50 border border-white/10 text-[10px] font-mono text-slate-300">
            <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>12ms Latency</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2.5">
          <h1 className="gsap-security-title text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
            {t("auth.securityTitle")}
          </h1>
          <p className="gsap-security-desc text-xs sm:text-sm text-slate-300/80 leading-relaxed">
            {t("auth.securityDesc")}
          </p>
        </div>

        {/* Live Cadastral Network Telemetry Chips */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="gsap-telemetry-pill p-2.5 rounded-xl bg-slate-950/50 border border-white/[0.08] backdrop-blur-sm flex items-center gap-2">
            <Network className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] text-slate-400 truncate">Consensus Node</div>
              <div className="text-xs font-mono font-semibold text-white truncate">Dhaka-Savar.gov</div>
            </div>
          </div>

          <div className="gsap-telemetry-pill p-2.5 rounded-xl bg-slate-950/50 border border-white/[0.08] backdrop-blur-sm flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] text-slate-400 truncate">State Root</div>
              <div className="text-xs font-mono font-semibold text-emerald-300 truncate">0x9d72...e18a</div>
            </div>
          </div>
        </div>

        {/* Core Security Features */}
        <div className="space-y-3 pt-1">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className={`gsap-security-feature flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-950/45 border transition-all duration-200 shadow-sm ${feat.accentBorder}`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border shadow-inner ${feat.iconBg}`}
              >
                {feat.icon}
              </div>
              <div className="space-y-0.5">
                <h2 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                  {feat.title}
                </h2>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-normal">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Node Trust Status */}
      <div className="relative z-10 pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          </span>
          <span className="text-slate-300 font-medium tracking-wide">
            {t("auth.nodeStatus")}
          </span>
        </div>
        <span className="font-mono text-[11px] text-sky-400 font-semibold px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-400/20">
          {t("auth.nodeVersion")}
        </span>
      </div>
    </section>
  );
};
