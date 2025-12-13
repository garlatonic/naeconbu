import ReviewWriteNavbar from "@/components/review/write/ReviewWriteNavbar";
import PageHeader from "@/components/common/PageHeader";
import ReviewWriteMain from "@/components/review/write/ReviewWriteMain";

export default function Page() {
  return (
    <>
      <ReviewWriteNavbar />
      <PageHeader
        title={"리뷰 작성하기"}
        description={
          "공연 관련 정보, 공연장 이용 팁, 예매 방법 등 유용한 자료를 커뮤니티에서 확인하고 공유하세요."
        }
      />
      <ReviewWriteMain />
    </>
  );
}
