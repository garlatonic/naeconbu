import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function SocialButton() {
  return (
    <>
      <div className="social bg-bg-main flex w-full flex-col gap-3">
        <Button
          className="kakao bg-point-main cursor-pointer"
          variant="default"
          size="lg"
          asChild={false}
        >
          <MessageCircle />
          Kakao로 계속하기
        </Button>

        <Button
          className="google bg-point-sub cursor-pointer"
          variant="outline"
          size="lg"
          asChild={false}
        >
          <Image src="/googleIcon.svg" alt="Google icon" width={15} height={15} />
          Google로 계속하기
        </Button>
      </div>
    </>
  );
}
