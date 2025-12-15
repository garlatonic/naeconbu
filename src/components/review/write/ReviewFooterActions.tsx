import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { CardFooter } from "@/components/ui/card";

/*
 * TODO: 리뷰 작성 액션 처리
 *
 * - 부모 컴포넌트에서
 *   - onSubmitReview()
 *   - onCancelReview()
 *   함수 정의
 *
 * - ReviewFooterActions에 props로 전달
 *   interface Props {
 *     onSubmit: () => void;
 *     onCancel: () => void;
 *   }
 *
 * - 각 Button 클릭 시 해당 함수 호출
 */

export default function ReviewFooterActions() {
  return (
    <CardFooter className={"flex justify-end gap-3"}>
      <Button type={"reset"} variant={"outline"} className={"cursor-pointer"}>
        취소
      </Button>
      <Button type={"submit"} className={"cursor-pointer"}>
        <Send /> 리뷰 등록하기
      </Button>
    </CardFooter>
  );
}
