import { getMe } from "@/lib/auth/auth.server";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
  let isLoggedIn = false;

  try {
    await getMe();
    isLoggedIn = true;
  } catch {}

  if (!isLoggedIn) {
    redirect("/sign-in");
  }

  return <>{children}</>;
}
