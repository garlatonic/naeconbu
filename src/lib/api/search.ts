import { AutoCompleteConcerts } from "@/types/search";
import ClientApi from "@/utils/helpers/clientApi";
import ServerApi from "@/utils/helpers/serverApi";

export const getSearchConcerts = async ({
  keyword,
  page,
  size,
}: {
  keyword: string;
  page: number;
  size: number;
}) => {
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
    return data.data;
  } catch (error) {
    console.error("Error fetching search concerts:", error);
    return [];
  }
};

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
