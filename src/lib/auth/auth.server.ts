// 사용자 정보 조회

import { cookies } from "next/headers";
import { GetMeResponse } from "@/types/auth";

export async function getMe(): Promise<GetMeResponse> {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/me`, {
      headers: { "Content-Type": "application/json", Cookie: cookieHeader },
      cache: "no-store",
    });

    let json;
    try {
      json = (await res.json()) as GetMeResponse;
    } catch {
      throw new Error("서버 응답을 처리할 수 없습니다.");
    }

    if (!res.ok || json.resultCode !== "OK") {
      throw new Error(json.msg ?? "회원 정보가 없습니다.");
    }

    return json;
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Error("서버에 연결할 수 없습니다.");
    }
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("알 수 없는 오류가 발생했습니다.");
  }
}
