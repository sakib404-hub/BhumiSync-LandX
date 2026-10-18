import { Metadata } from "next";
import { AuthSecurityPanel } from "@/app/_components/login/AuthSecurityPanel";
import { AuthCard } from "@/app/_components/login/AuthCard";

export const metadata: Metadata = {
  title: "Login & Registration | BhumiSync Sovereign Land Registry Ledger",
  description:
    "Cryptographically secure cadastral title verification and role-based portal access for Citizens, Sub-Registrars, AC Land Officers, Banks, and Administrators.",
};

const LoginPage = () => {
  return (
    <div className="relative z-10 flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full min-h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch">
        {/* Left Column: Glass Brand & Security Panel (5 of 12 cols) */}
        <div className="lg:col-span-5 flex">
          <AuthSecurityPanel />
        </div>

        {/* Right Column: Glass Authentication Card (7 of 12 cols) */}
        <div className="lg:col-span-7 flex">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
