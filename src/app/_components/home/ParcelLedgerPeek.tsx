import Link from "next/link";
import { Activity, ExternalLink, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ParcelLedgerPeek = () => {
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/15 border border-sky-400/25 text-sky-300">
            <Activity className="h-4 w-4" />
          </div>
          <h2 className="text-lg font-semibold text-white tracking-tight">
            Live Parcel Ledger Record
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="verified" className="px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5" />
            Verified Clear Title
          </Badge>
          <Link
            href="/verify/plot/452-1"
            className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-200 transition-colors"
          >
            <span>Full Inspection Dossier</span>
            <ExternalLink className="h-3 w-3" />
          </Link>
        </div>
      </div>

      <Card level={1} className="rounded-2xl p-6 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
              Mouza / Daag
            </span>
            <p className="text-white font-medium text-sm">SYN-Savar • 452/1</p>
            <span className="text-[11px] text-slate-400 block">Plot Class: Commercial</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
              Khatian Reference
            </span>
            <p className="text-white font-medium text-sm">1187 (BS Record)</p>
            <span className="text-[11px] text-emerald-400 font-mono block">JL No: 89</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
              Seller Registry
            </span>
            <p className="text-white font-medium text-sm truncate">SYN Rahim Uddin</p>
            <span className="text-[11px] text-slate-400 font-mono block truncate">
              NID: SYN-NID-A10021
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
              Buyer Registry
            </span>
            <p className="text-white font-medium text-sm truncate">SYN Karim Hossain</p>
            <span className="text-[11px] text-slate-400 font-mono block truncate">
              NID: SYN-NID-B20045
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
              Share Transferred
            </span>
            <p className="text-sky-400 font-mono font-bold text-sm">0.2500 (4 anna)</p>
            <span className="text-[11px] text-[#94a3b8] block font-mono">Seller Bal: 0.2500</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider block">
              Instrument & Case
            </span>
            <p className="text-white font-mono text-sm truncate">SYN-D-0001</p>
            <span className="text-[11px] text-sky-300 font-mono block truncate">
              MUT-2026-000001
            </span>
          </div>
        </div>
      </Card>
    </section>
  );
}
