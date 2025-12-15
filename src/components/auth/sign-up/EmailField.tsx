"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { SignUpFormValues } from "@/lib/validations/auth";
import { sendEmailCode } from "@/lib/auth";
import { toast } from "sonner";

export default function EmailField() {
  const {
    register,
    getValues,
    setError,
    clearErrors,
    // formState: { errors },
  } = useFormContext<SignUpFormValues>();

  const [isCodeSent, setIsCodeSent] = useState(false);
  // const [isVerified, setIsVerified] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    if (remainingTime <= 0) return;

    const timer = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  const handleSendCode = async () => {
    const email = getValues("email");

    if (!email) {
      setError("email", {
        type: "manual",
        message: "이메일을 입력해주세요",
      });
      return;
    }

    try {
      await sendEmailCode(email);

      clearErrors("email");
      setIsCodeSent(true);
      setRemainingTime(300);
      toast.success("인증 코드 전송 완료", {
        description: "이메일로 인증 코드가 전송되었습니다.",
      });
    } catch (e) {
      setError("email", {
        type: "manual",
        message: e instanceof Error ? e.message : "인증 코드 전송 중 오류가 발생했습니다.",
      });
    }
  };

  return (
    <>
      <div className="emailInput flex flex-col gap-2">
        <p className="text-sm">이메일 *</p>
        <div className="flex w-full items-center gap-2">
          <Input
            type="email"
            placeholder="Enter Your Email"
            className="bg-point-sub h-13"
            disabled={isCodeSent && remainingTime > 0}
            {...register("email")}
          />
          <Button
            type="button"
            onClick={handleSendCode}
            variant="default"
            size="lg"
            className="bg-point-main h-13"
            disabled={isCodeSent && remainingTime > 0}
          >
            {isCodeSent && remainingTime > 0
              ? `${String(Math.floor(remainingTime / 60)).padStart(2, "0")}:${String(remainingTime % 60).padStart(2, "0")}`
              : "이메일 인증"}
          </Button>
        </div>
      </div>
      {isCodeSent && (
        <div className="emailConfirm flex flex-col gap-2">
          <p className="text-sm">이메일 인증 *</p>
          <div className="flex w-full items-center gap-2">
            <Input
              type="text"
              placeholder="인증번호를 입력해주세요"
              className="bg-point-sub h-13"
              {...register("emailCode")}
            />
            <Button type="button" variant="default" size="lg" className="bg-point-main h-13">
              Confirm
            </Button>
          </div>
          <p className="text-text-sub text-xs">인증번호를 입력하세요.</p>
        </div>
      )}
    </>
  );
}
