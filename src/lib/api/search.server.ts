import { ConcertDataWithLiked } from "@/components/concert/ConcertType";
import { AutoCompleteConcerts } from "@/types/search";
import ClientApi from "@/utils/helpers/clientApi";
import ServerApi from "@/utils/helpers/serverApi";
import { getIsLikedConcert } from "./concert.client";

/**
 * 검색어로 공연 목록을 가져옵니다.
 * 서버 사이드에서 사용됩니다.
 *
 * @param {string} keyword 검색어
 * @param {number} page 페이지 번호 (기본값: 0)
 * @param {number} size 페이지당 항목 수 (기본값: 12)
 * @returns {Promise<ConcertData[]>} 공연 목록
 */
export const getSearchConcertsServer = async ({
  keyword,
  page = 0,
  size = 12,
}: {
  keyword: string;
  page?: number;
  size?: number;
}): Promise<ConcertDataWithLiked[]> => {
  try {
    const encodeKeyword = encodeURIComponent(keyword);
    const res = await ServerApi(
      `/api/v1/concerts/search?keyword=${encodeKeyword}&page=${page}&size=${size}`,
      {
        method: "GET",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch search concerts");
    }
    const data = await res.json();

    const concertsWithLiked = await Promise.all(
      data.data.map(async (concert: ConcertDataWithLiked) => {
        const concertId = concert.id.toString();
        const isLiked = await getIsLikedConcert(concertId);
        return {
          ...concert,
          isLiked: isLiked?.isLike ?? false,
        };
      })
    );

    return concertsWithLiked;
  } catch (error) {
    console.error("Error fetching search concerts:", error);
    return [];
  }
};

/**
 * 검색어로 자동완성 공연 목록을 가져옵니다.
 * @param {string} keyword 검색어
 * @param {number} start 시작 인덱스 (기본값: 0)
 * @param {number} end 종료 인덱스 (기본값: 5)
 * @returns {Promise<AutoCompleteConcerts[]>} 자동완성 공연 목록
 */
export const getSearchConcertsAutoComplete = async ({
  keyword,
  start = 0,
  end = 5,
}: {
  keyword: string;
  start?: number;
  end?: number;
}): Promise<AutoCompleteConcerts[]> => {
  try {
    const encodeKeyword = encodeURIComponent(keyword);
    const res = await ClientApi(
      `/api/v1/concerts/autoComplete?keyword=${encodeKeyword}&start=${start}&end=${end}`,
      {
        method: "GET",
      }
    );
    if (!res.ok) {
      console.error("API Error:", res.status, res.statusText);
      return [];
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching search concerts:", error);
    return [];
  }
};
