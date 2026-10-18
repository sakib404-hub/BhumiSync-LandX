"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Shield,
  Scale,
  Landmark,
} from "lucide-react";

export const SecurityAttributesGrid = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const attributes = [
    {
      id: "ownership",
      titleKey: "verify.attr1Title",
      descKey: "verify.attr1Desc",
      icon: ShieldCheck,
      badgeIcon: CheckCircle2,
      iconColor: "text-emerald-400",
      containerColor: "bg-emerald-500/15 border-emerald-500/30",
      hoverBorder: "hover:border-emerald-500/40",
    },
    {
      id: "encumbrance",
      titleKey: "verify.attr2Title",
      descKey: "verify.attr2Desc",
      icon: Lock,
      badgeIcon: Shield,
      iconColor: "text-sky-400",
      containerColor: "bg-sky-500/15 border-sky-400/30",
      hoverBorder: "hover:border-sky-400/40",
    },
    {
      id: "mortgage",
      titleKey: "verify.attr3Title",
      descKey: "verify.attr3Desc",
      icon: Scale,
      badgeIcon: Landmark,
      iconColor: "text-indigo-400",
      containerColor: "bg-indigo-500/15 border-indigo-500/30",
      hoverBorder: "hover:border-indigo-500/40",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {attributes.map((attr, idx) => {
        const IconComponent = attr.icon;
        const BadgeComponent = attr.badgeIcon;
        return (
          <motion.div
            key={attr.id}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2 + idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }
            }
            className={`rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-5 flex items-start gap-4 transition-colors ${attr.hoverBorder}`}
          >
            <div
              className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${attr.containerColor}`}
            >
              <IconComponent className={`h-5 w-5 ${attr.iconColor}`} />
            </div>

            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white tracking-tight leading-snug">
                  {t(attr.titleKey)}
                </h3>
                <BadgeComponent className={`h-3.5 w-3.5 shrink-0 ${attr.iconColor}`} />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t(attr.descKey)}
              </p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};
