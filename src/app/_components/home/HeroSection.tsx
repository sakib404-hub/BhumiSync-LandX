"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

export const HeroSection = () => {
  const router = useRouter();
  const [district, setDistrict] = React.useState("Dhaka");
  const [upazila, setUpazila] = React.useState("Savar");
  const [mouza, setMouza] = React.useState("SYN-Savar");
  const [daag, setDaag] = React.useState("452/1");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/verify/plot/452-1");
  };

  return (
    <section className="flex flex-col items-center text-center space-y-8 pt-4" id="verify">
      {/* Headline & Subline */}
      <div className="max-w-3xl space-y-4">
        <Badge variant="pending" className="px-3.5 py-1 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse mr-2" />
          Decentralized Land Ledger
        </Badge>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Verify land{" "}
          <span className="bg-gradient-to-r from-white via-sky-300 to-sky-400 bg-clip-text text-transparent">
            before you buy
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300/80 max-w-2xl mx-auto leading-relaxed">
          Instant cadastral deed verification and cryptographic ownership audit across all 64
          land offices.
        </p>
      </div>

      {/* Cadastral Search Glass Card */}
      <Card level={1} className="w-full max-w-4xl rounded-2xl p-6 lg:p-8 space-y-6 text-left relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-48 h-48 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

        <form onSubmit={handleVerify} className="space-y-6">
          {/* 4-Column Search Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* District */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider">
                District
              </label>
              <div className="relative">
                <Input
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="Select District"
                  className="pr-9"
                />
                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
              </div>
            </div>

            {/* Upazila */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider">
                Upazila
              </label>
              <div className="relative">
                <Input
                  value={upazila}
                  onChange={(e) => setUpazila(e.target.value)}
                  placeholder="Select Upazila"
                  className="pr-9"
                />
                <Building2 className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
              </div>
            </div>

            {/* Mouza */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider">
                Mouza
              </label>
              <div className="relative">
                <Input
                  value={mouza}
                  onChange={(e) => setMouza(e.target.value)}
                  placeholder="Select Mouza"
                  className="pr-9"
                />
                <Layers className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
              </div>
            </div>

            {/* Daag number */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-semibold text-[#94a3b8] uppercase tracking-wider">
                Daag Number
              </label>
              <div className="relative">
                <Input
                  value={daag}
                  onChange={(e) => setDaag(e.target.value)}
                  placeholder="e.g. 452/1"
                  className="pr-9 font-mono font-medium"
                />
                <Tag className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Interactive Verification Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
            {/* Quick Deed Sample Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-[#94a3b8]">
              <Info className="h-4 w-4 text-sky-400 shrink-0" />
              <span className="truncate">Sample: Deed SYN-D-0001 • Khatian 1187 (BS) • Seller SYN Rahim Uddin</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link href="/verify/qr" className="flex-1 sm:flex-initial">
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  <QrCode className="h-4 w-4" />
                  <span>Scan QR</span>
                </Button>
              </Link>

              <Button
                type="submit"
                variant="default"
                className="flex-1 sm:flex-initial"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Verify Record</span>
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </section>
  );
}
