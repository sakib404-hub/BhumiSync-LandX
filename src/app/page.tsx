import Link from "next/link";
import {
  Sparkles,
  Search,
  ShieldCheck,
  MapPin,
  Activity,
  FileText,
  ArrowRight,
  Database,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="w-full max-w-5xl text-center space-y-6 pt-6 pb-12">
        {/* Glass Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300 backdrop-blur-md shadow-sm shadow-blue-500/10">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span>Next-Generation Land Registry & Cadastral Intelligence</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Intelligent Land Records with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
            Blue Glass
          </span>{" "}
          Precision
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
          BhumiSync connects cadastral records, title registries, ownership lineages,
          and GIS mapping into a single, unified, tamper-proof system.
        </p>

        {/* Quick Search Glass Bar */}
        <div className="mx-auto max-w-xl pt-2">
          <div className="relative flex items-center rounded-2xl border border-blue-400/25 bg-slate-900/50 p-2 shadow-2xl shadow-blue-950/50 backdrop-blur-xl transition-all focus-within:border-blue-400/60 focus-within:ring-2 focus-within:ring-blue-500/20">
            <Search className="ml-3 h-5 w-5 text-blue-400 shrink-0" />
            <input
              type="text"
              placeholder="Search by Plot Number, Khatian, or Owner ID..."
              className="w-full bg-transparent px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="button"
              className="rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/25 backdrop-blur-md transition-all hover:from-blue-500 hover:to-indigo-500"
            >
              Verify
            </button>
          </div>
        </div>
      </div>

      {/* Feature Glass Cards Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 pb-12">
        {/* Card 1 */}
        <div className="group relative rounded-2xl border border-blue-400/15 bg-gradient-to-b from-blue-950/40 to-slate-950/60 p-6 backdrop-blur-xl shadow-xl shadow-blue-950/30 transition-all hover:-translate-y-1 hover:border-blue-400/35 hover:shadow-blue-500/10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-400/20 text-blue-300 mb-4 transition-transform group-hover:scale-110">
            <Activity className="h-6 w-6 text-blue-400" />
          </div>
          <h2 className="text-lg font-semibold text-white tracking-tight mb-2">
            Real-Time Mutation
          </h2>
          <p className="text-sm text-slate-300/80 leading-relaxed mb-4">
            Instantaneous synchronization between revenue offices, land records, and citizen applications.
          </p>
          <div className="flex items-center text-xs font-medium text-cyan-300 gap-1.5 pt-2 border-t border-blue-400/10">
            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
            <span>99.98% sync precision</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative rounded-2xl border border-blue-400/15 bg-gradient-to-b from-blue-950/40 to-slate-950/60 p-6 backdrop-blur-xl shadow-xl shadow-blue-950/30 transition-all hover:-translate-y-1 hover:border-blue-400/35 hover:shadow-blue-500/10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-400/20 text-cyan-300 mb-4 transition-transform group-hover:scale-110">
            <MapPin className="h-6 w-6 text-cyan-400" />
          </div>
          <h2 className="text-lg font-semibold text-white tracking-tight mb-2">
            Cadastral GIS Mapping
          </h2>
          <p className="text-sm text-slate-300/80 leading-relaxed mb-4">
            Interactive geo-referenced satellite overlays with precise plot boundaries and dispute alerts.
          </p>
          <div className="flex items-center text-xs font-medium text-blue-300 gap-1.5 pt-2 border-t border-blue-400/10">
            <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
            <span>Sub-meter accuracy</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative rounded-2xl border border-blue-400/15 bg-gradient-to-b from-blue-950/40 to-slate-950/60 p-6 backdrop-blur-xl shadow-xl shadow-blue-950/30 transition-all hover:-translate-y-1 hover:border-blue-400/35 hover:shadow-blue-500/10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-400/20 text-indigo-300 mb-4 transition-transform group-hover:scale-110">
            <ShieldCheck className="h-6 w-6 text-indigo-300" />
          </div>
          <h2 className="text-lg font-semibold text-white tracking-tight mb-2">
            Tamper-Proof Titles
          </h2>
          <p className="text-sm text-slate-300/80 leading-relaxed mb-4">
            Cryptographically sealed ownership trails to eradicate duplicate claims and fraudulent sales.
          </p>
          <div className="flex items-center text-xs font-medium text-indigo-300 gap-1.5 pt-2 border-t border-blue-400/10">
            <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
            <span>Cryptographic audit trail</span>
          </div>
        </div>
      </div>
    </div>
  );
}
