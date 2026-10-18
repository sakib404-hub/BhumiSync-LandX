"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Shield,
  LayoutDashboard,
  Users,
  ScrollText,
  Flag,
  Send,
  PlusCircle,
  User,
  LogOut,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface AdminSideNavProps {
  mobileOpen?: boolean;
  onClose?: () => void;
  onOpenNewParcelModal?: () => void;
}

export const AdminSideNav = ({
  mobileOpen = false,
  onClose,
  onOpenNewParcelModal,
}: AdminSideNavProps) => {
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
      href: "/admin",
      label: t("admin.navOverview"),
      icon: LayoutDashboard,
      isActive: pathname === "/admin" || pathname === "/admin/overview",
    },
    {
      href: "/admin/users",
      label: t("admin.navUsers"),
      icon: Users,
      isActive: pathname === "/admin/users",
    },
    {
      href: "/admin/audit",
      label: t("admin.navAudit"),
      icon: ScrollText,
      isActive: pathname === "/admin/audit",
    },
    {
      href: "/admin/fraud",
      label: t("admin.navFraud"),
      icon: Flag,
      isActive: pathname === "/admin/fraud",
      badge: "7",
      badgeClass: "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-[0_0_8px_rgba(244,63,94,0.3)]",
    },
    {
      href: "/admin/outbox",
      label: t("admin.navOutbox"),
      icon: Send,
      isActive: pathname === "/admin/outbox",
      badge: "3",
      badgeClass: "bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-[0_0_8px_rgba(56,189,248,0.3)]",
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full p-4 w-full">
      {/* Top Branding Section & Navigation */}
      <div className="flex flex-col gap-5">
        {/* Top Header Logo */}
        <div className="flex items-center justify-between px-2 pt-1">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center shadow-[0_0_18px_rgba(56,189,248,0.4)] border border-white/30 shrink-0 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-sky-200 transition-colors">
                {t("admin.brand")}
              </span>
              <span className="text-[10px] text-sky-400 font-medium tracking-wider uppercase truncate">
                {t("admin.authorityTag")}
              </span>
            </div>
          </Link>

          {/* Close button on mobile */}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Navigation"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Action CTA: New Parcel Entry */}
        <button
          type="button"
          onClick={() => {
            if (onOpenNewParcelModal) onOpenNewParcelModal();
            if (onClose) onClose();
          }}
          className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-400 text-slate-950 font-bold text-xs sm:text-sm py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.45)] hover:shadow-[0_0_26px_rgba(56,189,248,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <PlusCircle className="w-4 h-4 text-slate-950 stroke-[2.5]" />
          <span>{t("admin.newParcelEntry")}</span>
        </button>

        {/* Primary Navigation Tabs */}
        <nav aria-label="Admin Navigation" className="flex flex-col gap-1.5 pt-1">
          {navLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 text-xs sm:text-sm font-semibold ${
                  item.isActive
                    ? "bg-sky-500/15 text-sky-300 border-l-4 border-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.25)] font-bold border-y border-r border-sky-400/20"
                    : "text-slate-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      item.isActive
                        ? "text-sky-400 stroke-[2.5]"
                        : item.href === "/admin/fraud"
                        ? "text-rose-400"
                        : "text-slate-400"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile & Admin Details */}
      <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-2.5 py-2 rounded-xl bg-slate-900/60 border border-white/10">
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 border border-sky-400/40 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_10px_rgba(56,189,248,0.3)]">
              SA
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-[0_0_8px_#10b981]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white truncate">
              {t("admin.userRole")}
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {t("admin.userTitle")}
            </div>
            <div className="text-[10px] text-sky-400 font-mono font-medium truncate">
              {t("admin.userHub")}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              if (onOpenNewParcelModal) onOpenNewParcelModal();
            }}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-colors"
          >
            <User className="w-3.5 h-3.5 text-sky-400" />
            <span>{t("admin.profileSettings")}</span>
          </button>
          <button
            type="button"
            onClick={handleLogout}
            title={t("admin.signOut")}
            className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-white/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed Glass Sidebar */}
      <aside className="hidden lg:block fixed top-0 left-0 h-screen w-[260px] z-40 bg-slate-950/80 backdrop-blur-xl border-r border-white/10 shadow-2xl shadow-slate-950/60">
        {sidebarContent}
      </aside>

      {/* Mobile Sliding Drawer & Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Sidebar Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 bottom-0 left-0 w-[280px] bg-slate-950/95 backdrop-blur-2xl border-r border-white/15 shadow-2xl flex flex-col"
            >
              {sidebarContent}
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
