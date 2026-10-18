import { Metadata } from "next";
import { AdminShell } from "@/app/_components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin Overview & System Telemetry | BhumiSync Sovereign Registry",
  description:
    "Institutional administrative oversight, real-time consensus telemetry, live audit trail, and cadastral fraud monitoring for BhumiSync.",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminShell>{children}</AdminShell>;
};

export default AdminLayout;
