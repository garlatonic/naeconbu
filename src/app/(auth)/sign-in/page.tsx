import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Eye, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex h-screen">
      {/* TODO: 왼쪽 이미지 */}
      <div className="bg-point-main flex-1"></div>
      <div className="bg-bg-main flex flex-1 justify-center">
        <div className="flex flex-col justify-center gap-10 px-12">
          <div className="intro flex flex-col gap-2">
            <p className="text-text-main text-3xl font-bold">환영합니다</p>
            <span className="text-text-sub">계정에 로그인하여 계속 진행하세요</span>
          </div>

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

          <div className="separator flex items-center gap-3">
            <div className="border-border h-px w-full border-t"></div>
            <p className="text-text-sub">OR</p>
            <div className="border-border h-px w-full border-t"></div>
          </div>

          <div className="input flex flex-col gap-3">
            <Input placeholder="Email Address" className="h-13" />
            <InputGroup className="h-13">
              <InputGroupInput placeholder="Password" className="h-13" />
              <InputGroupAddon align="inline-end">
                <Eye />
              </InputGroupAddon>
            </InputGroup>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox className="cursor-pointer" />
                <Label>아이디 저장</Label>
              </div>
              {/* <Link href="/sign-up" className="text-text-sub cursor-pointer hover:text-text-main">
                비밀번호를 잊으셨나요?
              </Link> */}
            </div>
            <Button className="login cursor-pointer" variant="default" size="lg" asChild={false}>
              로그인
            </Button>
          </div>

          <div className="signUpLink flex justify-center gap-1">
            <p className="text-text-sub">계정이 없으신가요?</p>
            <Link href="/sign-up" className="text-text-main hover:text-text-sub">
              회원가입
            </Link>
          </div>

          <p className="agreePolicy text-text-sub flex justify-center text-xs">
            계속 진행하시면 당사의 서비스 약관 및 개인정보 보호정책에 동의하는 것으로 간주됩니다.
          </p>

          {/* TODO: 반응형 */}
        </div>
      </div>
    </div>
  );
}
