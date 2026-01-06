import MyPageAside from "@/components/my-page/overview/MyPageAside";
import MyPageCalendar from "@/components/my-page/overview/MyPageCalendar";
import {
  getAllLikedConcerts,
  getLikedArtistList,
  getLikedArtistsConcerts,
} from "@/lib/api/myPage/myPage.server";
import { getPlanList } from "@/lib/api/planner/planner.server";

export default async function Page() {
  const likedConcerts = await getAllLikedConcerts();

  if (likedConcerts.data == null) {
    likedConcerts.data = [];
  }

  const joinedPlanners = await getPlanList();
  const likedArtists = await getLikedArtistList();

  if (likedArtists.data == null) {
    likedArtists.data = [];
  }

  const likedConcertsFromArtists = await getLikedArtistsConcerts();

  if (likedConcertsFromArtists.data != null) {
    // 좋아요한 아티스트의 공연들 중복 제거 후 찜한 공연 목록에 추가
    const existingConcertIds = new Set(likedConcerts.data.map((concert) => concert.id));
    likedConcertsFromArtists.data.forEach((artistWithConcerts) => {
      artistWithConcerts.concerts.forEach((concert) => {
        if (!existingConcertIds.has(concert.id)) {
          likedConcerts.data!.push(concert);
          existingConcertIds.add(concert.id);
        }
      });
    });
  }

  return (
    <div className="px-15 py-10">
      <div className="mx-auto flex w-full max-w-400 gap-8">
        <MyPageCalendar concerts={likedConcerts.data} planners={joinedPlanners} />
        <MyPageAside
          likedConcerts={likedConcerts.data}
          likedArtists={likedArtists.data}
          joinedPlanners={joinedPlanners}
        />
      </div>
    </div>
  );
}
