import BreadcrumbNavbar from "@/components/review/BreadcrumbNavbar";
import ReviewPostMain from "@/components/review/post/ReviewPostMain";
import { getConcertDetail } from "@/lib/api/concerts/concerts.server";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const concertDetail = await getConcertDetail({ concertId: id });

  // TODO: 존재하지 않는 공연 id 접근 시 404 페이지로 리다이렉트 처리 필요
  if (!concertDetail) {
    return null;
  }

  return (
    <>
      <BreadcrumbNavbar
        items={[
          { label: "홈", href: "/" },
          { label: "공연 목록", href: "/concerts" },
          { label: concertDetail?.name, href: `/concerts/${id}` },
          { label: "리뷰 상세" },
        ]}
      />
      <ReviewPostMain />
    </>
  );
}
