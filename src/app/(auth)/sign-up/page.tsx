import Separator from "@/components/auth/Separator";
import SocialButton from "@/components/auth/SocialButton";

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
      <Separator />
    </div>
  );
}
