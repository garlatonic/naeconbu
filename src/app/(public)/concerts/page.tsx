import ConcertListIntro from "@/components/concert/list/ConcertListIntro";
import ConcertListWrapper from "@/components/concert/list/ConcertListWrapper";
import ConcertListsSkeleton from "@/components/loading/concert/list/ConcertListsSkeleton";
import BreadcrumbNavbar from "@/components/review/BreadcrumbNavbar";
import { Suspense } from "react";

export const metadata = {
  title: "공연 목록 | 내 콘서트를 부탁해",
  description: "Play Your Life, Live Your Music. 다양한 공연을 찾아보고 예매하세요.",
};

export default async function Page({ searchParams }: { searchParams: Promise<{ sort?: string }> }) {
  const resolvedParams = await searchParams;

  return (
    <>
      <BreadcrumbNavbar items={[{ label: "홈", href: "/" }, { label: "공연 목록" }]} />
      <ConcertListIntro />
      <Suspense fallback={<ConcertListsSkeleton />}>
        <ConcertListWrapper searchParams={resolvedParams} />
      </Suspense>
    </>
  );
}
