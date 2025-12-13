import ArtistListNavbar from "@/components/artist/list/ArtistListNavbar";
import ArtistListMain from "@/components/artist/list/ArtistListMain";
import PageHeader from "@/components/common/PageHeader";

export default function page() {
  return (
    <>
      <ArtistListNavbar />
      <PageHeader
        title={"아티스트 둘러보기"}
        description={"다양한 아티스트의 공연과 소식을 한눈에 확인해보세요"}
      />
      <ArtistListMain />
    </>
  );
}
