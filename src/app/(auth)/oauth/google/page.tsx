"use client";
import { useOAuthCallback } from "@/hooks/useOAuthCallback";

// TODO: 로그인 실패 시 서버 에러 메시지 기반 분기 처리
// TODO: 네트워크 오류/타임아웃에 대한 UX 개선 (로딩/재시도)

export default function GoogleCallbackPage() {
  useOAuthCallback("google");
  return <p>구글 로그인 처리 중...</p>;
}
