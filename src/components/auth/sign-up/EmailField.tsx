import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EmailField() {
  return (
    <>
      <div className="emailInput flex flex-col gap-2">
        <p className="text-sm">이메일 *</p>
        <div className="flex w-full items-center gap-2">
          <Input type="email" placeholder="Enter Your Email" className="bg-point-sub h-13" />
          <Button type="submit" variant="default" size="lg" className="bg-point-main h-13">
            Confirm
          </Button>
        </div>
        <p className="text-text-sub text-xs">인증을 완료하세요.</p>
      </div>
      <div className="emailConfirm flex flex-col gap-2">
        <p className="text-sm">이메일 인증 *</p>
        <div className="flex w-full items-center gap-2">
          <Input
            type="number"
            placeholder="Enter Validation Number"
            className="bg-point-sub h-13"
          />
          <Button type="submit" variant="default" size="lg" className="bg-point-main h-13">
            Confirm
          </Button>
        </div>
        <p className="text-text-sub text-xs">인증번호를 입력하세요.</p>
      </div>
    </>
  );
}
