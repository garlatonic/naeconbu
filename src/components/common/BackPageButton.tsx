"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ButtonProps } from "@/types/planner";

export default function BackPageButton({ children, ...rest }: ButtonProps) {
  const router = useRouter();

  // 페이지 뒤로 가기 핸들러
  const handlePageBack = () => {
    router.back();
  };

  return (
    <Button onClick={handlePageBack} {...rest}>
      {children}
    </Button>
  );
}
