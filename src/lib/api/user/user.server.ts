import { User } from "@/types/user";
import ServerApi from "@/utils/helpers/serverApi";

// 현재 로그인 된 사용자 정보 조회
export const getUsersMe = async (): Promise<User | null> => {
  try {
    const res = await ServerApi("/api/v1/users/me", { method: "GET" });
    // 401 / 403 → 비회원 (정상 상태)
    if (res.status === 401 || res.status === 403) {
      return null;
    }

    // 그 외 실패 → 진짜 에러
    if (!res.ok) {
      throw new Error("사용자 정보를 불러오는데 실패했습니다.");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};
