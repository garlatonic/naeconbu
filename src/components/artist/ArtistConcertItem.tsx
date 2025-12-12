import { Clock4, Heart, MapPin, Ticket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Item } from "@/components/ui/item";

export default function ArtistConcertItem() {
  return (
    <Item variant={"outline"} className={"hover:border-text-main h-54 items-start gap-8 p-6"}>
      {/*왼쪽 날짜 파트*/}
      <div className={"flex w-32 flex-col items-center justify-center gap-1"}>
        <span className={"text-text-sub"}>3월</span>
        <span className={"text-text-main text-3xl"}>15</span>
        <span className={"text-text-sub text-xs"}>19:00</span>
      </div>
      {/*오른쪽 정보 파트*/}
      <div className={"flex flex-1 flex-col gap-4"}>
        {/*위쪽 파트*/}
        <div className={"flex justify-between"}>
          <div className={"flex flex-col gap-2"}>
            <span className={"bold text-2xl"}>Echoes of Tommorow - Seoul</span>
            <div className={"flex gap-4"}>
              <div className={"flex items-center justify-center gap-2"}>
                <MapPin size={14} className={"text-text-sub"} />
                <span className={"text-text-sub"}>올림픽홀 - 서울</span>
              </div>
              <div className={"flex items-center justify-center gap-2"}>
                <Users size={14} className={"text-text-sub"} />
                <span className={"text-text-sub"}>2,500석</span>
              </div>
            </div>
            <div className={"flex gap-2"}>
              <div className={"bg-text-point-sub flex h-6 w-40 items-center justify-center"}>
                <span>예매 가능</span>
              </div>
              <div className={"bg-text-point-sub flex h-6 w-40 items-center justify-center"}>
                <span>추천 콘서트</span>
              </div>
            </div>
          </div>
          <div className={"flex flex-col gap-2"}>
            <div className={"flex justify-end"}>
              <span className={"text-2xl"}>65,000원</span>
            </div>
            <div className={"flex justify-end"}>
              <span className={"text-text-sub"}>최저가 기준</span>
            </div>
            <Button size={"lg"} type={"button"} className={"cursor-pointer"}>
              상세보기
            </Button>
          </div>
        </div>
        {/*아래쪽 파트*/}
        <div className={"flex gap-6 border-t pt-4"}>
          <div className={"text-text-sub flex items-center justify-center gap-2"}>
            <Clock4 size={14} />
            <span>공연 시간: 2시간 30분</span>
          </div>
          <div className="text-text-sub flex items-center justify-center gap-2">
            <Ticket size={14} />
            <span>티켓 판매: 1,204</span>
          </div>
          <div className="text-text-sub flex items-center justify-center gap-2">
            <Heart size={14} />
            <span>관심: 3,127</span>
          </div>
        </div>
      </div>
    </Item>
  );
}
