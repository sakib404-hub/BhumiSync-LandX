import { Metadata } from "next";
import { InstitutionalInjunctionsConsole } from "@/app/_components/institutional/injunctions/InstitutionalInjunctionsConsole";

export const metadata: Metadata = {
  title: "Judicial Injunction Restraints & Court Orders | BhumiSync Institutional",
  description:
    "Register Civil Court and High Court injunctions, stay orders, and CPC Order 39 restraints to instantaneously freeze cadastral mutation and transfer pipelines.",
};

const Page = () => {
  return <InstitutionalInjunctionsConsole />;
};

export default Page;
