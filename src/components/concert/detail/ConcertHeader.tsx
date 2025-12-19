import Image from "next/image";
import ConcertHeaderArtist from "@/components/concert/detail/ConcertHeaderArtist";
import ConcertHeaderBtn from "@/components/concert/detail/ConcertHeaderBtn";
import { ConcertDetail } from "@/types/concerts";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { HeartIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ConcertHeaderInfo from "./ConcertHeaderInfo";
import { formatDateRange, formatPrice } from "@/utils/helpers/formatters";

export default function ConcertHeader({ concertDetail }: { concertDetail: ConcertDetail | null }) {
  if (!concertDetail) {
    return null;
  }

  return (
    <section className="header bg-bg-sub px-15 py-10">
      <div className="mx-auto flex w-full max-w-400 items-start gap-8">
        <div className="border-border w-2/5 overflow-hidden rounded-2xl border">
          <AspectRatio ratio={320 / 426.5}>
            <Image
              src={
                concertDetail.posterUrl ??
                // TODO : 임시 포스터 이미지 생성해서 넣기
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              }
              alt={concertDetail.name}
              className="object-cover"
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
            />
          </AspectRatio>
        </div>
        {/* className = "left" */}
        <div className="right bg-bg-main border-border flex flex-1 flex-col gap-8 rounded-2xl border p-10">
          <div className="title flex justify-between">
            <div className="flex flex-col gap-4">
              {/* TODO : 아티스트 쪽 장르? 된다면 넣기 */}
              <Badge className={twMerge(`bg-point-main text-text-point-main mr-2 text-sm`)}>
                Rock
              </Badge>
              <div className="flex flex-col gap-1">
                <h2 className="text-text-main text-4xl font-bold">{concertDetail.name}</h2>
                <p className="text-text-sub text-xl">{concertDetail.description}</p>
              </div>
            </div>
            <Button variant="outline" size="icon" className="border-border hover:bg-border">
              <HeartIcon />
            </Button>
          </div>
          <div className="border-border grid grid-cols-2 gap-x-4 gap-y-6 border-y py-8">
            <ConcertHeaderInfo
              type="date"
              label="날짜 및 시간"
              title={formatDateRange(concertDetail.startDate, concertDetail.endDate)}
              // TODO : 공연 시작정보에서 시간도 받아올 수 있는지 체크
            />
            <ConcertHeaderInfo
              type="location"
              label="장소"
              title={concertDetail.placeName}
              subtitle={concertDetail.placeAddress}
            />
            <ConcertHeaderInfo
              type="price"
              label="티켓 가격"
              title={formatPrice(concertDetail.minPrice, concertDetail.maxPrice)}
              // TODO : 좌석별 정보 체크
            />
            {/* TODO : 관람석 몇개인지 체크하는 API 있는지? 없으면 예매일정을 넣어야할 듯 */}
            <ConcertHeaderInfo
              type="capacity"
              label="관람석"
              title="14,595석"
              subtitle="12세 관람가"
            />
          </div>
          <ConcertHeaderArtist />
          <ConcertHeaderBtn />
        </div>
      </div>
    </section>
  );
}
