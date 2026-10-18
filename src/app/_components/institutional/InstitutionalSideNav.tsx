"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Building2,
  Landmark,
  Gavel,
  ShieldCheck,
  User,
  LogOut,
  X,
  FileCheck2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface InstitutionalSideNavProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

export const InstitutionalSideNav = ({
  mobileOpen = false,
  onClose,
}: InstitutionalSideNavProps) => {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("bhumisync_auth_user");
      const logoutAlert = {
        type: "logout" as const,
      };
      sessionStorage.setItem("bhumisync_alert", JSON.stringify(logoutAlert));
      window.dispatchEvent(new Event("bhumisync_auth_change"));
      window.dispatchEvent(
        new CustomEvent("bhumisync_alert", {
          detail: logoutAlert,
        })
      );
    }
    if (onClose) onClose();
    router.push("/login");
  };

  const navLinks = [
    {
      href: "/institutional/mortgages",
      label: language === "bn" ? "ব্যাংক বন্ধক (Mortgages)" : "Mortgages",
      icon: Landmark,
      isActive:
        pathname === "/institutional" ||
        pathname === "/institutional/mortgages",
    },
    {
      href: "/institutional/injunctions",
      label: language === "bn" ? "আদালতের নিষেধাজ্ঞা (Injunctions)" : "Injunctions",
      icon: Gavel,
      isActive: pathname === "/institutional/injunctions",
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full p-4 w-full">
      {/* Top Brand & Navigation */}
      <div className="space-y-6">
        {/* Brand Header */}
        <div className="px-2 pt-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/30 border border-white/20 group-hover:scale-105 transition-transform">
              <Landmark className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div className="leading-tight">
              <h1 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                BhumiSync
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  L3
                </span>
              </h1>
              <p className="text-[11px] text-slate-400">Legal & Encumbrance Portal</p>
            </div>
          </Link>

          {/* Mobile Close Button */}
          {mobileOpen && (
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5 pt-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                  link.isActive
                    ? "bg-sky-500/15 border-l-4 border-sky-400 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    link.isActive ? "text-sky-400" : "text-slate-400"
                  }`}
                />
                <span className="tracking-wide flex-1">{link.label}</span>
                {link.isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_6px_#38bdf8]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Institutional Authority & Officer Profile Footer */}
      <div className="pt-4 border-t border-white/10 space-y-4">
        {/* Institutional Authority Card */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
          <div className="flex items-center gap-2 mb-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              {language === "bn" ? "অনুমোদিত প্রতিষ্ঠান" : "Institutional Authority"}
            </span>
          </div>
          <p className="text-xs font-semibold text-white leading-tight">Sonali Bank PLC</p>
          <p className="text-[10px] text-slate-400 leading-snug mt-0.5">
            Savar Corporate Branch & Liaison
          </p>
        </div>

        {/* Officer Liaison Mini Card */}
        <div className="px-2 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500/20 to-blue-600/20 border border-sky-400/40 flex items-center justify-center text-sky-300 font-bold text-xs shrink-0">
              SC
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white leading-none truncate">
                BNK-SAV-09
              </p>
              <p className="text-[10px] text-slate-400 mt-1 truncate">
                Sr. Credit Officer
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed SideNav */}
      <aside className="hidden lg:block fixed top-0 left-0 h-screen w-[260px] z-30 bg-slate-950/80 backdrop-blur-xl border-r border-white/10 shadow-2xl">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] max-w-[85vw] h-full bg-[#081324] border-r border-white/15 z-10 flex flex-col shadow-2xl"
            >
              {sidebarContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
