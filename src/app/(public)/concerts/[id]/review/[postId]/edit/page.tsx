import { getConcertDetail } from "@/lib/api/concerts/concerts.server";
import { notFound } from "next/navigation";
import BreadcrumbNavbar from "@/components/review/BreadcrumbNavbar";
import ReviewEditMain from "@/components/review/edit/ReviewEditMain";
import { getReviewDetail } from "@/lib/api/community/concert-review/review.server";

export default async function page({
  params,
}: {
  params: Promise<{ id: string; postId: string }>;
}) {
  const { id, postId } = await params;
  const concertDetail = await getConcertDetail({ concertId: id });
  const reviewDetail = await getReviewDetail(Number(postId));

  if (!concertDetail || !reviewDetail) {
    notFound();
  }

  return (
    <>
      <BreadcrumbNavbar
        items={[
          { label: "홈", href: "/" },
          { label: "공연 목록", href: "/concerts" },
          { label: concertDetail?.name, href: `/concerts/${id}` },
          { label: "리뷰 수정" },
        ]}
      />
      <ReviewEditMain concertId={Number(id)} postId={Number(postId)} reviewDetail={reviewDetail} />
    </>
  );
}
