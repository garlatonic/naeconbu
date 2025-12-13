import { twMerge } from "tailwind-merge";
import ConcertDetailVenue from "./ConcertDetailVenue";
import ConcertDetailReview from "./ConcertDetailReview";
import ConcertDetailInfo from "./ConcertDetailInfo";
import ConcertDetailSideBar from "./ConcertDetailSideBar";

export default function ConcertDetail() {
  return (
    <section className={twMerge(`header bg-bg-main px-40 py-20`)}>
      <div className="max-auto flex w-full gap-12">
        <div className={twMerge(`left flex w-full flex-2 flex-col gap-12`)}>
          <ConcertDetailInfo />
          <ConcertDetailVenue />
          <ConcertDetailReview />
        </div>

        <div className="right flex-1">
          <ConcertDetailSideBar />
        </div>
      </div>
    </section>
  );
}
