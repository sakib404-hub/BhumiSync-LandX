"use client";

import * as React from "react";
import gsap from "gsap";
import { Building2, Landmark, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const ArchitectureHeader = () => {
  const { t } = useLanguage();
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".gsap-hiw-badge", {
        opacity: 0,
        y: -12,
        duration: 0.6,
      })
        .from(
          ".gsap-hiw-title",
          {
            opacity: 0,
            y: 20,
            duration: 0.75,
          },
          "-=0.3"
        )
        .from(
          ".gsap-hiw-desc",
          {
            opacity: 0,
            y: 16,
            duration: 0.65,
          },
          "-=0.35"
        )
        .from(
          ".gsap-hiw-pill",
          {
            opacity: 0,
            y: 12,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.2"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const metaPills = [
    {
      label: t("hiw.subRegistry"),
      icon: <Building2 className="h-3.5 w-3.5 text-sky-300" />,
    },
    {
      label: t("hiw.acLandOffice"),
      icon: <Landmark className="h-3.5 w-3.5 text-sky-300" />,
    },
    {
      label: t("hiw.mouzaDaag"),
      icon: <MapPin className="h-3.5 w-3.5 text-sky-400" />,
    },
    {
      label: t("hiw.khatianRef"),
      icon: <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />,
    },
  ];

  return (
    <section ref={headerRef} className="text-center space-y-4 pt-2">
      <div className="gsap-hiw-badge inline-block">
        <Badge variant="pending" className="px-3.5 py-1 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse mr-2" />
          {t("hiw.badge")}
        </Badge>
      </div>

      <h1 className="gsap-hiw-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
        {t("hiw.title")}
      </h1>

      <p className="gsap-hiw-desc text-sm sm:text-base text-slate-300/80 max-w-2xl mx-auto leading-relaxed">
        {t("hiw.subtitle")}
      </p>

      {/* Institutional Metadata Badge Strip */}
      <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 text-xs text-slate-300">
        {metaPills.map((pill, index) => (
          <div
            key={index}
            className="gsap-hiw-pill px-3 py-1.5 rounded-xl bg-slate-900/50 border border-white/[0.12] flex items-center gap-2 backdrop-blur-md shadow-inner"
          >
            {pill.icon}
            <span className="font-medium">{pill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
