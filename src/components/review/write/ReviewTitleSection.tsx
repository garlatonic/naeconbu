import { CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/*
 * TODO: 리뷰 제목 입력 기능 구현
 *
 * - 리뷰 제목은 부모 컴포넌트에서 상태 관리
 *   (예: title: string)
 *
 * - ReviewTitleSection은
 *   - value
 *   - onChange
 *   를 props로 전달받는 controlled input으로 변경
 *
 * Props 예시:
 * type ReviewTitleSectionProps = {
 *   value: string;
 *   onChange: (value: string) => void;
 * };
 */

export default function ReviewTitleSection() {
  return (
    <CardContent className={"flex flex-col gap-2"}>
      <CardTitle>
        리뷰 제목 <span className={"text-text-sub"}>*</span>
      </CardTitle>
      <Input className={"h-13"} placeholder={"리뷰 제목을 입력해주세요."} />
      <p className={"text-text-sub text-xs"}>공연의 인상을 한 문장으로 표현해보세요</p>
    </CardContent>
  );
}
