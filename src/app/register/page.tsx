import { Metadata } from "next";
import { AuthSecurityPanel } from "@/app/_components/login/AuthSecurityPanel";
import { AuthCard } from "@/app/_components/login/AuthCard";

export const metadata: Metadata = {
  title: "Citizen Registration & Key Onboarding | BhumiSync Sovereign Land Registry",
  description:
    "Register for cryptographic cadastral title management and sovereign citizen landholding vault access.",
};

const RegisterPage = () => {
  return (
    <div className="relative z-10 flex-1 flex items-center justify-center py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full min-h-[calc(100vh-8rem)]">
      {/* Radiant Glow Pools */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[18%] left-[20%] w-[550px] h-[550px] rounded-full opacity-30 blur-[130px] bg-sky-600/30" />
        <div className="absolute bottom-[18%] right-[20%] w-[500px] h-[500px] rounded-full opacity-25 blur-[140px] bg-indigo-600/25" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 w-full items-stretch relative z-10">
        {/* Left Column: Glass Brand & Security Panel (5 of 12 cols) */}
        <div className="lg:col-span-5 flex">
          <AuthSecurityPanel />
        </div>

        {/* Right Column: Glass Authentication Card (7 of 12 cols) */}
        <div className="lg:col-span-7 flex">
          <AuthCard defaultTab="register" />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
