"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { UserCheck, Stamp, Building, Scale, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

export const EcosystemValueGrid = () => {
  const shouldReduceMotion = useReducedMotion();
  const trackRef = React.useRef<HTMLDivElement>(null);
  const tweenRef = React.useRef<gsap.core.Tween | null>(null);
  const [isPaused, setIsPaused] = React.useState(false);
  const { t, language } = useLanguage();

  const stakeholders = [
    {
      role: t("ecosystem.citizenRole"),
      description: t("ecosystem.citizenDesc"),
      icon: <UserCheck className="h-5 w-5 text-sky-400" />,
      link: "/citizen/my-land",
      actionText: t("ecosystem.citizenAction"),
    },
    {
      role: t("ecosystem.subRegistrarRole"),
      description: t("ecosystem.subRegistrarDesc"),
      icon: <Stamp className="h-5 w-5 text-sky-400" />,
      link: "/sub-registrar/dashboard",
      actionText: t("ecosystem.subRegistrarAction"),
    },
    {
      role: t("ecosystem.acLandRole"),
      description: t("ecosystem.acLandDesc"),
      icon: <Building className="h-5 w-5 text-sky-400" />,
      link: "/ac-land/queue",
      actionText: t("ecosystem.acLandAction"),
    },
    {
      role: t("ecosystem.bankCourtRole"),
      description: t("ecosystem.bankCourtDesc"),
      icon: <Scale className="h-5 w-5 text-sky-400" />,
      link: "/institutional/mortgages",
      actionText: t("ecosystem.bankCourtAction"),
    },
  ];

  // Duplicate items twice to create a seamless infinite loop track
  const loopItems = [...stakeholders, ...stakeholders];

  React.useEffect(() => {
    if (shouldReduceMotion || !trackRef.current) return;

    // Moving left to right continuously: animate xPercent from -50% to 0%
    const tween = gsap.fromTo(
      trackRef.current,
      { xPercent: -50 },
      {
        xPercent: 0,
        duration: 30,
        ease: "none",
        repeat: -1,
      }
    );

    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, [shouldReduceMotion, language]);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      tweenRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      tweenRef.current.play();
      setIsPaused(false);
    }
  };

  return (
    <section className="space-y-8 overflow-hidden" id="ecosystem">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2">
          <Badge variant="glass" className="px-3 py-1 text-xs">
            <span
              className={`w-1.5 h-1.5 rounded-full mr-1.5 transition-colors ${
                isPaused ? "bg-amber-400" : "bg-sky-400 animate-pulse"
              }`}
            />
            {isPaused ? t("ecosystem.tagPaused") : t("ecosystem.tag")}
          </Badge>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {t("ecosystem.title")}
        </h2>
        <p className="text-sm sm:text-base text-slate-300/80 max-w-xl mx-auto leading-relaxed">
          {t("ecosystem.description")}
        </p>
      </div>

      {/* Marquee Track Container with Ambient Gradient Edge Masks */}
      <div
        className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-6 select-none will-change-transform"
        >
          {loopItems.map((item, index) => (
            <motion.div
              key={`${item.role}-${index}`}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              }}
              whileTap={{ scale: 0.98 }}
              className="w-[300px] sm:w-[350px] shrink-0"
            >
              <Card
                level={1}
                interactive
                className="rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full bg-[#0a1526]/75 border-white/[0.14] shadow-[0_12px_36px_rgba(0,0,0,0.45)] hover:border-sky-400/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(56,189,248,0.2)]"
              >
                <div className="space-y-3">
                  <div className="flex h-11 w-11 rounded-xl bg-sky-500/10 border border-sky-500/20 items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed min-h-[48px]">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-200 transition-colors pt-3 border-t border-white/[0.08]"
                >
                  <span>{item.actionText}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


