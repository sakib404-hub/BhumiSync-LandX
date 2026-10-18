import { Metadata } from "next";
import { InstitutionalMortgagesConsole } from "@/app/_components/institutional/mortgages/InstitutionalMortgagesConsole";

export const metadata: Metadata = {
  title: "Mortgage Lien Registry & Charge Inscription | BhumiSync Institutional",
  description:
    "Record commercial bank mortgage encumbrances, collateral liens, and digital NOC releases against sovereign cadastral titles.",
};

const Page = () => {
  return <InstitutionalMortgagesConsole />;
};

export default Page;
