import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Link2, Twitter } from "lucide-react";

export default function SharePosts() {
  return (
    <Card className={"flex flex-col gap-4 p-6"}>
      {/* TODO: 게시글 공유 섹션 제목 - 추후 i18n 적용 여부 검토 */}
      <CardTitle>이 게시글 공유하기</CardTitle>

      <div className={"flex flex-col gap-1.5"}>
        <div className={"flex gap-1.5"}>
          {/* TODO: 트위터 공유 기능 연결
              - 현재 게시글 URL을 포함하여 새 창으로 공유
              - window.open 또는 Web Share API 검토 */}
          <Button variant={"outline"} size={"lg"} className={"flex-1"}>
            <Twitter /> 트위터
          </Button>

          {/* TODO: 페이스북 공유 기능 연결
              - Facebook Share Dialog 사용 여부 검토 */}
          <Button variant={"outline"} size={"lg"} className={"flex-1"}>
            <Facebook /> 페이스북
          </Button>
        </div>

        <div className={"flex gap-1.5"}>
          {/* TODO: 인스타그램 공유
              - 직접 URL 공유 불가 → 스토리/외부 앱 유도 방식 검토 */}
          <Button variant={"outline"} size={"lg"} className={"flex-1"}>
            <Instagram /> 인스타그램
          </Button>

          {/* TODO: 링크 복사 기능 구현
              - navigator.clipboard.writeText 사용
              - 복사 완료 시 토스트 알림 표시 */}
          <Button variant={"outline"} size={"lg"} className={"flex-1"}>
            <Link2 /> 링크 복사
          </Button>
        </div>
      </div>
    </Card>
  );
}
