import MyPageLikedArtistList from "@/components/my-page/MyPageLikedArtistList";
import MyPageLikedConcertList from "@/components/my-page/MyPageLikedConcertList";
import { getLikedConcertCount, getLikedConcertList } from "@/lib/api/myPage";

export default async function Page() {
  const likedConcerts = await getLikedConcertList({ page: 0, size: 12 });
  const likedConcertsCount = await getLikedConcertCount();

  return (
    <div className="my-15 space-y-20 px-15">
      <section>
        <MyPageLikedArtistList />
      </section>
      {likedConcerts.data && (
        <section>
          <MyPageLikedConcertList
            initialList={likedConcerts.data}
            totalCount={likedConcertsCount.data || 0}
          />
        </section>
      )}
    </div>
  );
}
