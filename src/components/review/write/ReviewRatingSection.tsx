import { CardContent, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import ReviewDetailRating from "@/components/review/write/ReviewDetailRating";

/*
 * TODO: 종합 평점 별점 기능 구현
 *
 * 1. useState로 rating 상태(number, 0~5) 추가
 *    const [rating, setRating] = useState(0)
 *
 * 2. 각 Star 버튼 클릭 시
 *    - setRating(index + 1) 호출
 *
 * 3. 현재 rating 값보다 작거나 같은 index의 Star만
 *    fill="currentColor"로 채우기
 *
 * 4. (선택) hover 시 미리보기 평점 표시
 *    - hoverRating 상태 추가
 *    - onMouseEnter / onMouseLeave 처리
 *
 * 5. 최종 rating 값은 리뷰 제출 시 서버로 전송
 */

export default function ReviewRatingSection() {
  return (
    <>
      <CardContent>
        <CardTitle className={"flex items-center justify-between"}>
          <CardTitle>
            종합 평점 <span className={"text-text-sub"}>*</span>
          </CardTitle>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                key={index}
                type="button"
                className="cursor-pointer"
                aria-label={`${index + 1}점`}
              >
                <Star
                  className="h-5 w-5 text-yellow-400"
                  fill={index < 4 ? "currentColor" : "none"} // 임시
                />
              </button>
            ))}
          </div>
        </CardTitle>
      </CardContent>

      <CardContent className={"flex flex-col gap-4"}>
        <CardTitle>세부 평가</CardTitle>
        <ReviewDetailRating title={"퍼포먼스 완성도"} />
        <ReviewDetailRating title={"공연장 & 시설"} />
        <ReviewDetailRating title={"음향 퀄리티"} />
        <ReviewDetailRating title={"가격 대비 만족도"} />
      </CardContent>
    </>
  );
}
