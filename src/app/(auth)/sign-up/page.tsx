import { DatePicker } from "@/components/auth/DatePicker";
import PasswordInput from "@/components/auth/PasswordInput";
import SocialButton from "@/components/auth/SocialButton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="flex flex-col justify-center gap-10 px-12">
      <div className="intro flex flex-col gap-2">
        <p className="text-text-main text-3xl font-bold">계정 만들기</p>
        <span className="text-text-sub">
          Nae-Con-Bu에 가입하여 콘서트를 발견하고, 동행을 구해보세요
        </span>
      </div>

      <SocialButton />

      <div className="input flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-sm">비밀번호 *</p>
          <PasswordInput />
          <p className="text-text-sub text-xs">영문, 숫자 8자 이상 입력하세요</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">비밀번호 확인 *</p>
          <PasswordInput />
          <p className="text-text-sub text-xs">영문, 숫자 8자 이상 입력하세요</p>
        </div>
        <DatePicker />

        <div className="flex items-center gap-2">
          <Checkbox className="cursor-pointer" />
          <Label>아이디 저장</Label>
        </div>
        <Button className="login cursor-pointer" variant="default" size="lg" asChild={false}>
          회원가입
        </Button>
      </div>
    </div>
  );
}
