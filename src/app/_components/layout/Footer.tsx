import Link from "next/link";
import { Layers, Activity } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 mt-auto border-t border-blue-400/10 bg-slate-950/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/30 border border-blue-400/20 text-blue-300">
              <Layers className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">
              Bhumi<span className="text-blue-400">Sync</span>
            </span>
            <span className="text-xs text-blue-300/60 ml-2">
              © 2026 BhumiSync Technologies. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <Link href="/how-it-works" className="hover:text-blue-300 transition-colors">
              How It Works
            </Link>
            <Link href="/verify" className="hover:text-blue-300 transition-colors">
              Verify Land
            </Link>
            <Link href="/login" className="hover:text-blue-300 transition-colors">
              Portal Login
            </Link>
            <div className="flex items-center gap-1.5 text-blue-400/80">
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              <span>All nodes operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
