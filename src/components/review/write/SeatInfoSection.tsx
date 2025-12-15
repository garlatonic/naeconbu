import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/*
 * TODO: 좌석 정보 입력 기능 구현
 *
 * - 좌석 정보는 선택 입력(Optional)
 *   - 구역(section)
 *   - 열/좌석 번호(seat)
 *
 * - 상태는 부모 컴포넌트에서 관리
 *
 * Props 예시:
 * type SeatInfoSectionProps = {
 *   section: string;
 *   seat: string;
 *   onChangeSection: (value: string) => void;
 *   onChangeSeat: (value: string) => void;
 * };
 *
 * - submit 시 좌석 정보가 입력된 경우에만 서버로 전달
 */

export default function SeatInfoSection() {
  return (
    <CardContent className={"flex flex-col gap-2"}>
      <CardTitle>좌석 정보</CardTitle>
      <div className={"flex gap-2"}>
        <Input className={"h-13"} placeholder={"구역 (예: A구역, 스탠딩)"} />
        <Input className={"h-13"} placeholder={"열 / 좌석 번호 (예: 12열 15번)"} />
      </div>
      <CardDescription className={"text-xs"}>
        이 자리, 잘 보였나요? 후기로 알려주세요
      </CardDescription>
    </CardContent>
  );
}
