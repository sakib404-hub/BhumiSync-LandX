import { Metadata } from "next";
import { AdminUsersConsole } from "@/app/_components/admin/users/AdminUsersConsole";

export const metadata: Metadata = {
  title: "User Management & RBAC | BhumiSync Admin",
  description:
    "Provision institutional credentials, departmental roles, and cryptographic signing keys for Sub-Registrars and AC Land officers.",
};

const UsersPage = () => {
  return <AdminUsersConsole />;
};

export default UsersPage;
