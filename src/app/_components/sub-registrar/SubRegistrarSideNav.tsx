"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Landmark,
  LayoutDashboard,
  ShieldCheck,
  FileSignature,
  FolderOpen,
  Users,
  Building2,
  UserCircle2,
  LogOut,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface SideNavProps {
  mobileOpen?: boolean;
  onClose?: () => void;
  onOpenRegisterModal?: () => void;
}

export const SubRegistrarSideNav = ({
  mobileOpen = false,
  onClose,
  onOpenRegisterModal,
}: SideNavProps) => {
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
      href: "/sub-registrar/dashboard",
      labelKey: "subRegistrar.navDashboard",
      icon: LayoutDashboard,
      isActive: pathname === "/sub-registrar/dashboard",
    },
    {
      href: "/sub-registrar/validate",
      labelKey: "subRegistrar.navValidate",
      icon: ShieldCheck,
      isActive: pathname === "/sub-registrar/validate",
    },
    {
      href: "/sub-registrar/register",
      labelKey: "subRegistrar.navRegister",
      icon: FileSignature,
      isActive: pathname === "/sub-registrar/register",
      onClick: (e: React.MouseEvent) => {
        if (onOpenRegisterModal) {
          e.preventDefault();
          onOpenRegisterModal();
          if (onClose) onClose();
        }
      },
    },
    {
      href: "/sub-registrar/deeds",
      labelKey: "subRegistrar.navMyDeeds",
      icon: FolderOpen,
      isActive: pathname === "/sub-registrar/deeds" || pathname.startsWith("/sub-registrar/deed"),
    },
    {
      href: "/sub-registrar/parties",
      labelKey: "subRegistrar.navParties",
      icon: Users,
      isActive: pathname === "/sub-registrar/parties",
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full p-4 w-full">
      {/* Top Branding & Main Navigation */}
      <div className="flex flex-col gap-6">
        {/* Brand Header */}
        <div className="flex items-center justify-between px-2 pt-1">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-sky-500/15 border border-sky-400/35 flex items-center justify-center text-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.35)] shrink-0 group-hover:scale-105 transition-transform">
              <Landmark className="w-5 h-5 text-sky-300" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-sky-200 transition-colors">
                {language === "bn" ? "ভূমি" : "Bhumi"}
                <span className="text-sky-400">{language === "bn" ? "সিঙ্ক" : "Sync"}</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 -mt-0.5 truncate font-medium">
                {t("subRegistrar.brandTagline")}
              </span>
            </div>
          </Link>

          {/* Close button on mobile */}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation Links */}
        <nav aria-label="Main Navigation" className="flex flex-col gap-1.5">
          {navLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={item.onClick || onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 text-xs sm:text-sm font-semibold ${
                  item.isActive
                    ? "bg-white/[0.08] text-sky-300 border-l-2 border-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.25)] font-bold"
                    : "text-slate-400 hover:bg-white/5 hover:text-white border-l-2 border-transparent"
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    item.isActive ? "text-sky-400 stroke-[2.5]" : "text-slate-400"
                  }`}
                />
                <span>{t(item.labelKey)}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Office & Official Badges */}
      <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
        {/* Savar Sub-Registry Jurisdiction */}
        <div className="px-3 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <Building2 className="w-4 h-4 text-sky-400 shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold text-white truncate">
                {language === "bn" ? "সাভার সাব-রেজিস্ট্রি" : "Savar Sub-Registry"}
              </span>
              <span className="text-[10px] text-slate-400 truncate">
                {language === "bn" ? "ঢাকা ক্যাডাস্ট্রে • জোন ৪" : "Dhaka Cadastre • Zone 4"}
              </span>
            </div>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0" />
        </div>

        {/* Official Profile Capsule */}
        <div className="px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <UserCircle2 className="w-6 h-6 text-slate-300" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white leading-tight">
                {language === "bn" ? "সাব-রেজিস্ট্রার কর্মকর্তা" : "Sub-Registrar Official"}
              </span>
              <span className="text-[10px] text-sky-400 font-mono">SR-OFF-092</span>
            </div>
          </div>
        </div>

        {/* Logout Action */}
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-red-300 hover:bg-red-500/10 border border-transparent hover:border-red-500/30 transition-all cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>{t("subRegistrar.logout")}</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Desktop Fixed Sidebar (w-[260px]) */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[260px] z-40 bg-slate-950/90 backdrop-blur-2xl border-r border-white/10 shadow-2xl">
        {sidebarContent}
      </aside>

      {/* 2. Mobile / Tablet Collapsible Drawer Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 h-screen w-[270px] bg-slate-950/95 backdrop-blur-2xl border-r border-white/15 shadow-2xl"
            >
              {sidebarContent}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
