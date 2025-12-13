import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import Image from "next/image";
import { Calendar, Clock4, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import ReviewDetailRating from "@/components/review/write/ReviewDetailRating";

export default function ReviewWriteMain() {
  return (
    <section className={"bg-bg-main flex justify-center px-15 py-16"}>
      <div className={"flex w-full max-w-400 flex-col gap-8"}>
        <Card className={"gap-12 p-12"}>
          {/*글 작성 헤더*/}
          <CardHeader>
            <CardTitle className={"text-2xl"}>Share Your Experience</CardTitle>
            <CardDescription>
              Tell the community about the concert you attended. Your review helps others discover
              great performances.
            </CardDescription>
          </CardHeader>

          {/*콘서트 선택 부분*/}
          <CardContent className={"flex flex-col gap-2"}>
            <CardTitle>
              Concert Selection <span className={"text-text-sub"}>*</span>
            </CardTitle>
            <Select>
              <SelectTrigger className={"w-full"}>
                <SelectValue placeholder={"Select the concert you attended"} />{" "}
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>공연명</SelectLabel>
                  {/*TODO: 나중에 value 부분을 해당 공연의 id로 바꾸기*/}
                  <SelectItem value="apple">YE LIVE IN KOREA</SelectItem>
                  <SelectItem value="banana">CIRCUS MAXIMUS in Korea</SelectItem>
                  <SelectItem value="blueberry">
                    ZUTOMAYO INTENSE II 「坐・ZOMBIE CRAB LABO」
                  </SelectItem>
                  <SelectItem value="grapes">IU HEREH World Tour</SelectItem>
                  <SelectItem value="pineapple">
                    ONE OK ROCK DETOX Asia Tour 2026 in Korea
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardContent>

          {/*불러온 콘서트 카드 부분*/}
          {/*TODO: 아래 부분은 select로 클릭했을 시 보여주는 아이템 클릭 안되면 안보이게 하기*/}
          {/*TODO: 위에 있는 SELCET에서 클릭한 id에 해당하는 콘서트를 보여주기*/}
          <CardContent>
            <Item className={"bg-bg-sub flex w-full gap-6 p-6"} variant="outline" role="listitem">
              <ItemMedia variant="image" className={"relative h-20 w-20 shrink-0"}>
                <Image
                  src={"/Madvillainy_cover.png"}
                  alt={"concert"}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className={"text-lg"}>IU HEREH World Tour</ItemTitle>
                <ItemDescription>Seoul Olympic Stadium</ItemDescription>
                <div className={"flex gap-4"}>
                  <ItemDescription className={"flex items-center justify-center gap-2 text-xs"}>
                    <Calendar size={12} />
                    <span>March 15, 2025</span>
                  </ItemDescription>
                  <ItemDescription className={"flex items-center justify-center gap-2 text-xs"}>
                    <Clock4 size={12} />
                    <span>19:00</span>
                  </ItemDescription>
                </div>
              </ItemContent>
            </Item>
          </CardContent>

          {/*리뷰 작성 제목 작성 부분*/}
          <CardContent className={"flex flex-col gap-2"}>
            <CardTitle>
              Review Title <span className={"text-text-sub"}>*</span>
            </CardTitle>
            <Input placeholder={"e.g., An unforgettable evening with amazing vocals"} />
            <p className={"text-text-sub text-xs"}>
              Write a compelling title that summarizes your experience
            </p>
          </CardContent>

          {/*총 별점 파트*/}
          <CardContent>
            <CardTitle className={"flex items-center justify-between"}>
              <CardTitle>
                Overall Rating <span className={"text-text-sub"}>*</span>
              </CardTitle>
              <div className={"flex"}>
                <Star fill="true" />
                <Star fill="true" />
                <Star fill="true" />
                <Star fill="true" />
                <Star />
              </div>
            </CardTitle>
          </CardContent>

          {/*별점 상세 파트*/}
          <CardContent className={"flex flex-col gap-4"}>
            <CardTitle>Detailed Ratings</CardTitle>
            <ReviewDetailRating title={"Performance Quality"} />
            <ReviewDetailRating title={"Venue & Facilities"} />
            <ReviewDetailRating title={"Sound Quality"} />
            <ReviewDetailRating title={"Value for Money"} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
