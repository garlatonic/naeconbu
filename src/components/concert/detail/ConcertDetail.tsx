import ConcertDetailVenue from "@/components/concert/detail/ConcertDetailVenue";
import ConcertDetailReview from "@/components/concert/detail/ConcertDetailReview";
import ConcertDetailInfo from "@/components/concert/detail/ConcertDetailInfo";
import ConcertDetailSideBar from "@/components/concert/detail/ConcertDetailSideBar";
import { type ConcertVenueInfo, type ConcertDetail } from "@/types/concerts";

export default function ConcertDetail({
  concertDetail,
  concertVenueData,
}: {
  concertDetail: ConcertDetail | null;
  concertVenueData: ConcertVenueInfo | null;
}) {
  if (!concertDetail && !concertVenueData) {
    return null;
  }

  return (
    <section className="bg-bg-main px-15 py-10">
      <div className="mx-auto flex w-full max-w-400 gap-12">
        <div className="flex-2 space-y-20">
          <ConcertDetailInfo
            concertImageUrls={concertDetail?.concertImageUrls}
            alt={concertDetail?.name}
          />
          <ConcertDetailVenue concertVenue={concertVenueData} />
          <ConcertDetailReview />
        </div>

        <div className="right relative flex-1">
          <ConcertDetailSideBar />
        </div>
      </div>
    </section>
  );
}
