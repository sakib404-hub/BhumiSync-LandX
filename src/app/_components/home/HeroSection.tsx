"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  MapPin,
  Building2,
  Layers,
  Tag,
  Info,
  QrCode,
  ShieldCheck,
  Search,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection = () => {
  const router = useRouter();
  const { t, language } = useLanguage();
  const [district, setDistrict] = React.useState(language === "bn" ? "ঢাকা" : "Dhaka");
  const [upazila, setUpazila] = React.useState(language === "bn" ? "সাভার" : "Savar");
  const [mouza, setMouza] = React.useState(language === "bn" ? "সিন-সাভার" : "SYN-Savar");
  const [daag, setDaag] = React.useState(language === "bn" ? "৪৫২/১" : "452/1");

  React.useEffect(() => {
    setDistrict(language === "bn" ? "ঢাকা" : "Dhaka");
    setUpazila(language === "bn" ? "সাভার" : "Savar");
    setMouza(language === "bn" ? "সিন-সাভার" : "SYN-Savar");
    setDaag(language === "bn" ? "৪৫২/১" : "452/1");
  }, [language]);

  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".gsap-hero-badge", {
        opacity: 0,
        y: -12,
        duration: 0.6,
      })
        .from(
          ".gsap-hero-title",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".gsap-hero-desc",
          {
            opacity: 0,
            y: 16,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/verify/plot/452-1");
  };

  return (
    <section className="flex flex-col items-center text-center space-y-6 sm:space-y-8 pt-2 sm:pt-4 w-full" id="verify">
      {/* GSAP Orchestrated Headline & Subline */}
      <div ref={headerRef} className="max-w-3xl space-y-3 sm:space-y-4 px-1">
        <div className="gsap-hero-badge">
          <Badge variant="pending" className="px-3.5 py-1 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse mr-2" />
            {t("hero.badge")}
          </Badge>
        </div>

        <h1 className="gsap-hero-title text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight sm:leading-tight">
          {t("hero.titlePre")}{" "}
          <span className="bg-gradient-to-r from-white via-sky-300 to-sky-400 bg-clip-text text-transparent">
            {t("hero.titleHighlight")}
          </span>
        </h1>

        <p className="gsap-hero-desc text-xs sm:text-base lg:text-lg text-slate-300/80 max-w-2xl mx-auto leading-relaxed px-1">
          {t("hero.description")}
        </p>
      </div>

      {/* Framer Motion Animated Search Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl"
      >
        <Card level={1} className="w-full rounded-2xl p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 text-left relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

          <form onSubmit={handleVerify} className="space-y-5 sm:space-y-6">
            {/* 4-Column Search Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {/* District */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider">
                  {t("hero.district")}
                </label>
                <div className="relative">
                  <Input
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder={t("hero.district")}
                    className="pr-9"
                  />
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
                </div>
              </div>

              {/* Upazila */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider">
                  {t("hero.upazila")}
                </label>
                <div className="relative">
                  <Input
                    value={upazila}
                    onChange={(e) => setUpazila(e.target.value)}
                    placeholder={t("hero.upazila")}
                    className="pr-9"
                  />
                  <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
                </div>
              </div>

              {/* Mouza */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider">
                  {t("hero.mouza")}
                </label>
                <div className="relative">
                  <Input
                    value={mouza}
                    onChange={(e) => setMouza(e.target.value)}
                    placeholder={t("hero.mouza")}
                    className="pr-9"
                  />
                  <Layers className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
                </div>
              </div>

              {/* Daag number */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider">
                  {t("hero.daag")}
                </label>
                <div className="relative">
                  <Input
                    value={daag}
                    onChange={(e) => setDaag(e.target.value)}
                    placeholder={language === "bn" ? "যেমন: ৪৫২/১" : "e.g. 452/1"}
                    className="pr-9 font-mono font-medium"
                  />
                  <Tag className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Interactive Verification Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
              {/* Quick Deed Sample Pill */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-[#94a3b8] w-full sm:w-auto justify-center sm:justify-start overflow-hidden">
                <Info className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span className="truncate">{t("hero.sampleDeed")}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <Link href="/verify/qr" className="w-full sm:w-auto">
                  <Button
                    type="button"
                    variant="secondary"
                    className="w-full sm:w-auto justify-center min-h-[42px] px-4 text-xs sm:text-sm"
                  >
                    <QrCode className="h-4 w-4 shrink-0" />
                    <span>{t("hero.scanQr")}</span>
                  </Button>
                </Link>

                <Button
                  type="submit"
                  variant="default"
                  className="w-full sm:w-auto justify-center min-h-[42px] px-4 text-xs sm:text-sm"
                >
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span>{t("hero.verifyRecord")}</span>
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </motion.div>
    </section>
  );
};
