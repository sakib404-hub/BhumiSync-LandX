"use client";

import * as React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Lock, MapPin, ShieldCheck, Link2, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const AuthSecurityPanel = () => {
  const { t, language } = useLanguage();
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
        );
    }, panelRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: t("auth.feat1Title"),
      desc: t("auth.feat1Desc"),
      icon: <MapPin className="h-4 w-4 text-sky-400" />,
      accentBorder: "border-sky-500/20 hover:border-sky-400/40",
      iconBg: "bg-sky-500/10 border-sky-400/25",
    },
    {
      title: t("auth.feat2Title"),
      desc: t("auth.feat2Desc"),
      icon: <ShieldCheck className="h-4 w-4 text-emerald-400" />,
      accentBorder: "border-emerald-500/20 hover:border-emerald-400/40",
      iconBg: "bg-emerald-500/10 border-emerald-400/25",
    },
    {
      title: t("auth.feat3Title"),
      desc: t("auth.feat3Desc"),
      icon: <Link2 className="h-4 w-4 text-sky-300" />,
      accentBorder: "border-sky-500/20 hover:border-sky-300/40",
      iconBg: "bg-sky-400/10 border-sky-400/25",
    },
  ];

  return (
    <section
      ref={panelRef}
      className="flex flex-col justify-between p-7 lg:p-8 rounded-2xl relative overflow-hidden backdrop-blur-xl bg-white/[0.04] border border-white/[0.14] shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
    >
      {/* Ambient Internal Glow Flare */}
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Lock Node Header Badge */}
        <div className="gsap-security-badge inline-block">
          <Badge variant="pending" className="px-3.5 py-1 text-xs">
            <Lock className="w-3.5 h-3.5 mr-1.5 text-sky-400" />
            {t("auth.badge")}
          </Badge>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h1 className="gsap-security-title text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
            {t("auth.securityTitle")}
          </h1>
          <p className="gsap-security-desc text-xs sm:text-sm text-slate-300/80 leading-relaxed">
            {t("auth.securityDesc")}
          </p>
        </div>

        {/* Core Security Features */}
        <div className="space-y-3 pt-2">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className={`gsap-security-feature flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/40 border transition-all ${feat.accentBorder}`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${feat.iconBg}`}
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
      <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#10b981]" />
          </span>
          <span className="text-slate-300 font-medium">
            {t("auth.nodeStatus")}
          </span>
        </div>
        <span className="font-mono text-[11px] text-sky-400/80">
          {t("auth.nodeVersion")}
        </span>
      </div>
    </section>
  );
};
