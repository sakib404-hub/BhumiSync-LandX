import { Metadata } from "next";
import { InstitutionalMortgagesConsole } from "@/app/_components/institutional/mortgages/InstitutionalMortgagesConsole";

export const metadata: Metadata = {
  title: "Institutional Legal & Encumbrance Portal | BhumiSync",
  description:
    "Institutional banking mortgage lien registry and civil court injunction administration for BhumiSync sovereign cadastre.",
};

const Page = () => {
  return <InstitutionalMortgagesConsole />;
};

export default Page;
