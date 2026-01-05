import BreadcrumbNavbar from "@/components/review/BreadcrumbNavbar";
import ReviewPostMain from "@/components/review/post/ReviewPostMain";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <>
      <BreadcrumbNavbar
        items={[
          { label: "홈", href: "/home" },
          { label: "리뷰 게시판", href: "/review" },
          { label: "글 상세" },
        ]}
      />
      <ReviewPostMain params={params} />
    </>
  );
}
