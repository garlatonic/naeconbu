import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NicknameField() {
  return (
    <div className="nicknameInput flex flex-col gap-2">
      <p className="text-sm">닉네임 *</p>
      <div className="flex w-full items-center gap-2">
        <Input type="text" placeholder="Enter Your Nickname" className="bg-point-sub h-13" />
        <Button type="submit" variant="default" size="lg" className="bg-point-main h-13">
          Confirm
        </Button>
      </div>
      <p className="text-text-sub text-xs">중복된 닉네임입니다.</p>
    </div>
  );
}
