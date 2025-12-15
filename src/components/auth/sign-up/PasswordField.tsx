import PasswordInput from "@/components/auth/PasswordInput";

export default function PasswordField() {
  return (
    <>
      {/*TODO: PasswordInput 나중에 수정*/}
      <div className="passwordInput flex flex-col gap-2">
        <p className="text-sm">비밀번호 *</p>
        <PasswordInput value={""} onChange={() => {}} />
        <p className="text-text-sub text-xs">영문, 숫자 8자 이상 입력하세요.</p>
      </div>
      <div className="passwordConfirm flex flex-col gap-2">
        <p className="text-sm">비밀번호 확인 *</p>
        <PasswordInput value={""} onChange={() => {}} />
        <p className="text-text-sub text-xs">동일한 비밀번호를 입력하세요.</p>
      </div>
    </>
  );
}
