import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/_components/layout/Navbar";
import { Footer } from "@/app/_components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BhumiSync | Land Management & Registry Platform",
  description:
    "Next-generation land registry synchronization and cadastral intelligence platform with seamless blue glassmorphic experience.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden">
        {/* Ambient Blue Glassmorphism Glowing Orbs */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {/* Top-left deep royal blue glow */}
          <div className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[130px]" />
          {/* Top-right vibrant cyan glow */}
          <div className="absolute top-12 -right-24 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />
          {/* Center-bottom indigo glow */}
          <div className="absolute -bottom-40 left-1/3 h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[140px]" />
          {/* Subtle grid texture overlay for glass refraction depth */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Glass Navigation Header */}
        <Navbar />

        {/* Content Body */}
        <main className="relative z-10 flex flex-1 flex-col">{children}</main>

        {/* Glass Footer */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

