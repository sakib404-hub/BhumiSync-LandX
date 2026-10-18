"use client";

import { motion } from "framer-motion";
import { UserCheck, Stamp, Building, Scale, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const EcosystemValueGrid = () => {
  const stakeholders = [
    {
      role: "Citizen",
      description: "Verify ownership, seller share, and encumbrances before committing funds.",
      icon: <UserCheck className="h-5 w-5 text-sky-400" />,
      link: "/citizen/my-land",
      actionText: "Citizen Portal",
    },
    {
      role: "Sub-Registrar",
      description: "Prevent overlapping deeds with instant biometric and cadastral spatial validation.",
      icon: <Stamp className="h-5 w-5 text-sky-400" />,
      link: "/sub-registrar/dashboard",
      actionText: "Registrar Pipeline",
    },
    {
      role: "AC Land",
      description: "Process and update mutation records automatically without cumbersome paper delays.",
      icon: <Building className="h-5 w-5 text-sky-400" />,
      link: "/ac-land/queue",
      actionText: "Mutation Court",
    },
    {
      role: "Bank & Court",
      description: "Query authentic mortgage liens and freeze disputed land parcels with judicial permanence.",
      icon: <Scale className="h-5 w-5 text-sky-400" />,
      link: "/institutional/mortgages",
      actionText: "Institutional Access",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Institutional Ecosystem Value
        </h2>
        <p className="text-sm sm:text-base text-slate-300/80 max-w-xl mx-auto leading-relaxed">
          Synchronized administrative access across public citizens, revenue officers, and judiciary bodies.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stakeholders.map((item) => (
          <motion.div
            key={item.role}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
            whileTap={{ scale: 0.98 }}
            className="h-full"
          >
            <Card
              level={1}
              interactive
              className="rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full"
            >
              <div className="space-y-3">
                <div className="flex h-11 w-11 rounded-xl bg-sky-500/10 border border-sky-500/20 items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {item.role}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
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
      </motion.div>
    </section>
  );
};

