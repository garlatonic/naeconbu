const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Next.js fetch 옵션 타입
type NextFetchOptions = RequestInit & {
  cache?: "force-cache" | "no-store" | "no-cache" | "reload";
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

/**
 * 공통 API 호출 함수
 *
 * @param {string} path API 경로
 * @param {NextFetchOptions} init fetch 옵션
 * @returns {Promise<Response>} fetch 응답
 */
export default async function ClientApi(path: string, init?: NextFetchOptions) {
  return await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}), // 순서 바꿔서 사용자 헤더가 우선되도록
    },
    credentials: "include",
  });
}
