import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function AgreeField() {
  return (
    <>
      <div className="agreeCheckbox flex items-center gap-2">
        <Checkbox className="cursor-pointer" />
        <Label className="text-text-sub">서비스 약관 및 개인정보 처리방침에 동의합니다.</Label>
      </div>
      <div className="alarmCheckbox flex items-center gap-2">
        <Checkbox className="cursor-pointer" />
        <Label className="text-text-sub">콘서트 소식과 프로모션 이메일을 보내주세요.</Label>
      </div>
    </>
  );
}
