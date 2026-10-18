"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Layers,
  ArrowUpRight,
  Menu,
  X,
  QrCode,
  ShieldCheck,
  Home,
  FileText,
  LogOut,
  UserCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/app/_components/layout/LanguageToggle";

export const Navbar = () => {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const syncAuth = () => {
      const stored =
        typeof window !== "undefined" ? localStorage.getItem("bhumisync_auth_user") : null;
      setIsLoggedIn(Boolean(stored || pathname.startsWith("/citizen")));
    };

    syncAuth();

    window.addEventListener("storage", syncAuth);
    window.addEventListener("bhumisync_auth_change", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("bhumisync_auth_change", syncAuth);
    };
  }, [pathname]);

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
    setIsLoggedIn(false);
    setMobileMenuOpen(false);
    router.push("/login");
  };

  if (pathname !== "/sub-registrar" && pathname.startsWith("/sub-registrar")) {
    return null;
  }

  const baseNavItems = [
    {
      href: "/",
      labelKey: "nav.overview",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      href: "/how-it-works",
      labelKey: "nav.howItWorks",
      icon: FileText,
      isActive: pathname === "/how-it-works",
    },
    {
      href: "/verify",
      labelKey: "nav.verifyLand",
      icon: ShieldCheck,
      isActive: pathname.startsWith("/verify"),
    },
  ];

  // Dynamic navigation items based on portal and login state
  const navItems = pathname.startsWith("/sub-registrar")
    ? [
        ...baseNavItems,
        {
          href: "/sub-registrar/dashboard",
          labelKey: "subRegistrar.navDashboard",
          icon: Layers,
          isActive: pathname === "/sub-registrar/dashboard",
        },
      ]
    : isLoggedIn
    ? [
        ...baseNavItems,
        {
          href: "/citizen/land",
          labelKey: "nav.myLand",
          icon: Layers,
          isActive: pathname === "/citizen/land",
        },
        {
          href: "/citizen/deeds",
          labelKey: "nav.myDeeds",
          icon: FileText,
          isActive: pathname.startsWith("/citizen/deeds"),
        },
      ]
    : baseNavItems;

  const isLoginActive = pathname === "/login";
  const isSubRegistrarPortal = pathname.startsWith("/sub-registrar");
  const isCitizenPortal = pathname.startsWith("/citizen") || (isLoggedIn && !isSubRegistrarPortal);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-400/15 bg-slate-950/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link href="/" className="group flex items-center gap-2 sm:gap-2.5">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-lg shadow-blue-500/25 ring-1 ring-white/20 transition-transform group-hover:scale-105 shrink-0">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950/60 backdrop-blur-xs">
                <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-blue-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
                {language === "bn" ? "ভূমি" : "Bhumi"}
                <span className="text-blue-400">{language === "bn" ? "সিঙ্ক" : "Sync"}</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-medium text-blue-300/70 hidden sm:block">
                {t("brand.tagline")}
              </span>
            </div>
          </Link>

          {isSubRegistrarPortal ? (
            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-400/35 text-[10px] font-semibold text-indigo-300 tracking-wider">
              {language === "bn" ? "সাব-রেজিস্ট্রার পোর্টাল" : "SUB-REGISTRAR PORTAL"}
            </span>
          ) : isCitizenPortal ? (
            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full bg-sky-400/10 border border-sky-400/30 text-[10px] font-semibold text-sky-400 tracking-wider">
              {language === "bn" ? "সিটিজেন পোর্টাল" : "CITIZEN PORTAL"}
            </span>
          ) : null}
        </div>

        {/* Desktop Navigation Links with Active State & Sliding Indicator */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-sky-400/20 bg-slate-950/80 p-1 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                item.isActive
                  ? "text-sky-300"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {item.isActive && (
                <motion.span
                  layoutId="activeNavPill"
                  className="absolute inset-0 rounded-full bg-sky-500/20 border border-sky-400/40 shadow-[0_0_14px_rgba(56,189,248,0.35)] -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t(item.labelKey)}</span>
            </Link>
          ))}
        </nav>

        {/* Action & Status Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Global Language Switcher */}
          <LanguageToggle />

          {/* Authenticated Capsule & Logout OR Access Portal CTA */}
          {isLoggedIn || isSubRegistrarPortal ? (
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Link
                href={isSubRegistrarPortal ? "/sub-registrar/dashboard" : "/citizen/land"}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-colors cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <div className="flex flex-col text-left">
                  <span className="text-xs text-white font-semibold leading-tight">
                    {isSubRegistrarPortal
                      ? language === "bn"
                        ? "সাব-রেজিস্ট্রার কর্মকর্তা"
                        : "SR Official"
                      : language === "bn"
                      ? "রহিম উদ্দিন"
                      : "Rahim Uddin"}
                  </span>
                  <span className="text-[10px] text-sky-300 tracking-wider font-mono">
                    {isSubRegistrarPortal ? "SR-OFF-092" : "SYN-NID-A10021"}
                  </span>
                </div>
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-white/5 hover:bg-red-500/15 border border-white/10 hover:border-red-400/30 text-slate-300 hover:text-red-300 text-xs font-semibold transition-all cursor-pointer"
                title={t("citizenLand.logout")}
              >
                <LogOut className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{t("citizenLand.logout")}</span>
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className={`flex items-center gap-1 sm:gap-1.5 rounded-xl px-2.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all shrink-0 ${
                isLoginActive
                  ? "bg-sky-400 text-slate-950 font-bold border border-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.5)] ring-2 ring-sky-400/50"
                  : "border border-blue-400/30 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 shadow-blue-500/20 hover:border-blue-400/50 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30"
              }`}
            >
              <span className={isLoginActive ? "text-slate-950 font-bold" : "text-white"}>
                {t("nav.accessPortal")}
              </span>
              <ArrowUpRight className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${isLoginActive ? "text-slate-950" : "text-white"}`} />
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-sky-400" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl overflow-hidden px-4 py-3 space-y-1.5"
          >
            {navItems.map((item) => {
              const IconComp = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    item.isActive
                      ? "bg-sky-500/20 border border-sky-400/40 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <IconComp className={`h-4 w-4 ${item.isActive ? "text-sky-400" : "text-slate-400"}`} />
                    <span>{t(item.labelKey)}</span>
                  </div>
                  {item.isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                  )}
                </Link>
              );
            })}

            {!isLoggedIn && (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isLoginActive
                    ? "bg-sky-500/20 border border-sky-400/40 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                    : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ArrowUpRight className="h-4 w-4 text-sky-400" />
                  <span>{t("nav.accessPortal")}</span>
                </div>
                {isLoginActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                )}
              </Link>
            )}

            {isLoggedIn && (
              <button
                type="button"
                onClick={handleLogout}
                className="w-full mt-2 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-red-300 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                <span>{t("citizenLand.logout")}</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
