import { Star } from "lucide-react";
import { CardDescription } from "@/components/ui/card";

export default function ReviewDetailRating({ title }: { title: string }) {
  return (
    <CardDescription className={"flex justify-between"}>
      <p>{title}</p>
      <div className="text-text-main flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`${title} ${index + 1}점`}
            className="cursor-pointer"
            /*
             * TODO: 세부 평점 기능 구현
             * - useState로 rating 상태 (0~5) 추가
             * - 클릭 시 setRating(index + 1)
             * - index < rating 인 별만 fill 처리
             * - 최종 rating 값은 리뷰 제출 시 함께 전송
             */
          >
            <Star className="h-5 w-5" />
          </button>
        ))}
      </div>
    </CardDescription>
  );
}
