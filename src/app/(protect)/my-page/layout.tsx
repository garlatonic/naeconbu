import MyPageHeader from "@/components/my-page/MyPageHeader";
import MyPageNavigation from "@/components/my-page/MyPageNavigation";
import { getMe } from "@/lib/auth/auth.server";
import { UserData } from "@/types/my-page";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const res = await getMe();
  const userData = res.data as UserData;
  return (
    <>
      <MyPageHeader userData={userData} />
      <MyPageNavigation />
      {children}
    </>
  );
}
