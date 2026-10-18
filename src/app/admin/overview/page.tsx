import { Metadata } from "next";
import { AdminOverviewConsole } from "@/app/_components/admin/overview/AdminOverviewConsole";

export const metadata: Metadata = {
  title: "Admin System Overview & Telemetry | BhumiSync",
  description:
    "Institutional administrative overview for BhumiSync sovereign cadastre: live cryptographic audit stream, active fraud detection, and inter-agency relay outbox.",
};

const Page = () => {
  return <AdminOverviewConsole />;
};

export default Page;
