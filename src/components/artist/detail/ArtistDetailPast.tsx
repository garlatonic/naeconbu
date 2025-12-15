import { Button } from "@/components/ui/button";
import Link from "next/link";
import ArtistConcertItem from "@/components/artist/detail/ArtistConcertItem";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortSelect } from "@/components/common/SortSelect";

// TODO: 나중에 api로 불러와서 데이터가 없는경우 로직도 추가 구현해야 함

export default function ArtistDetailPast() {
  return (
    <section className={"bg-bg-main px-15 py-16"}>
      <div className={"mx-auto flex max-w-400 flex-col gap-8"}>
        {/*헤더 및 분류 버튼 파트*/}
        <div className={"flex justify-between"}>
          <h2 className={"text-3xl font-bold"}>지난 공연</h2>
          <div className={"flex gap-3"}>
            <Select>
              <SelectTrigger size="default" className="bg-point-sub w-22">
                <SelectValue placeholder="필터" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>정렬</SelectLabel>
                  <SelectItem value="popular">인기순</SelectItem>
                  <SelectItem value="name">이름순</SelectItem>
                  <SelectItem value="date">날짜순</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <SortSelect />
          </div>
        </div>
        {/*TODO: 나중에 바로 아래 div에서 api로 불러온 콘서트 목록 map으로 돌리기*/}
        {/*콘서트 아이템 파트*/}
        <div>
          <ArtistConcertItem />
        </div>
        <div className={"flex justify-center"}>
          {/*콘서트 로더 버튼 파트*/}
          <Link href={"#"}>
            <Button
              size={"lg"}
              variant={"outline"}
              className={"border-border cursor-pointer border-2"}
              type={"button"}
            >
              <span className={"font-bold"}>지난 공연 더 보기</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
