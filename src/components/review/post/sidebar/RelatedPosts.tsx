import { Card, CardTitle } from "@/components/ui/card";
import { mockRelatedPosts } from "@/components/review/post/sidebar/relatedPosts.mock";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function RelatedPosts() {
  return (
    <Card className={"flex flex-col gap-4 p-6"}>
      <CardTitle className={"text-lg"}>관련 게시글</CardTitle>
      {/**
       * TODO:
       * - 관련 게시글 데이터 API 연동 후 상위 컴포넌트에서 posts를 내려받도록 구조 변경
       * - 현재는 퍼블리싱 확인을 위한 mock 데이터 사용
       */}
      {mockRelatedPosts.map((post, index) => {
        const isLast = index === mockRelatedPosts.length - 1;

        return (
          // TODO (UI 개선):
          // - hover 시 Item 전체(padding 영역)가 아닌 콘텐츠 영역만 hover 되도록 수정
          // - Link / Item / ItemContent 중 hover 대상 역할 재정의 필요

          <Item key={post.id} className="p-0 hover:bg-transparent focus:bg-transparent" asChild>
            <Link href={`/review/${post.id}`} className="block">
              <ItemContent className={cn(!isLast && "border-border border-b pb-4")}>
                <ItemTitle className="font-normal">{post.title}</ItemTitle>

                <div className="text-text-sub flex gap-3 text-sm">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
              </ItemContent>
            </Link>
          </Item>
        );
      })}
    </Card>
  );
}
