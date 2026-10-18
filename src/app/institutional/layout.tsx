import { Metadata } from "next";
import { InstitutionalShell } from "@/app/_components/institutional/InstitutionalShell";

export const metadata: Metadata = {
  title: "Institutional Legal & Encumbrance Portal | BhumiSync",
  description:
    "Institutional banking mortgage lien registry and civil court injunction administration for BhumiSync sovereign cadastre.",
};

const InstitutionalLayout = ({ children }: { children: React.ReactNode }) => {
  return <InstitutionalShell>{children}</InstitutionalShell>;
};

export default InstitutionalLayout;
