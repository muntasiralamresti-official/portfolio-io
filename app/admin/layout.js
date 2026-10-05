import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin-auth";

export default async function AdminLayout({children}) {
  if (!await isAuthenticated()) redirect("/admin/login");
  return children;
}