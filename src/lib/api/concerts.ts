import { ConcertDetail } from "@/types/concerts";
import { Concert, ConcertWithTicket, ResponseData } from "@/types/home";
import ClientApi from "@/utils/helpers/clientApi";

const createEmptyResponse = (message: string): ResponseData<ConcertWithTicket[]> => ({
  status: 500,
  resultCode: "ERROR",
  msg: message,
  data: [],
});

export const getUpcomingConcerts = async ({
  page = 0,
  size = 20,
}: {
  page?: number;
  size?: number;
} = {}): Promise<ResponseData<ConcertWithTicket[]>> => {
  try {
    const res = await ClientApi(`/api/v1/concerts/list/UPCOMING?page=${page}&size=${size}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API Error:", res.status, res.statusText);
      return createEmptyResponse(`API 요청 실패: ${res.status}`);
    }

    const data = await res.json();

    const concertsWithTicketLinks = await Promise.all(
      data.data.map(async (concert: Concert) => {
        try {
          const ticketRes = await ClientApi(
            `/api/v1/concerts/ticketOffices?concertId=${concert.id}`,
            {
              method: "GET",
              cache: "no-store",
            }
          );

          if (!ticketRes.ok) {
            console.error(`Ticket API Error for concert ${concert.id}:`, ticketRes.status);
            return concert;
          }

          const ticketOffices = await ticketRes.json();

          return {
            ...concert,
            ticketOfficeName: ticketOffices.data[0]?.ticketOfficeName,
            ticketOfficeUrl: ticketOffices.data[0]?.ticketOfficeUrl,
          };
        } catch (error) {
          console.error(`Error fetching ticket info for concert ${concert.id}:`, error);
          return concert;
        }
      })
    );

    return {
      ...data,
      data: concertsWithTicketLinks,
    };
  } catch (error) {
    console.error("Error fetching upcoming concerts:", error);
    return createEmptyResponse("콘서트 목록을 가져오는데 실패했습니다");
  }
};

// 공연 정보 상세 가져오기
export const getConcertDetail = async ({
  concertId,
}: {
  concertId: string;
}): Promise<ConcertDetail | null> => {
  try {
    const res = await ClientApi(`/api/v1/concerts/concertDetail?concertId=${concertId}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API Error:", res.status, res.statusText);
      return null;
    }

    const data = await res.json();

    // 좋아요 여부까지 가져오기
    // const likeRes = await ClientApi(`/api/v1/concerts/isLike/${concertId}`, {
    //   method: "GET",
    //   cache: "no-store",
    // });

    // if (!likeRes.ok) {
    //   console.error("Like API Error:", likeRes.status);
    //   return data; // 좋아요 정보 없이 기본 데이터 반환
    // }

    // const likeData = await likeRes.json();

    return data;
  } catch (error) {
    console.error("Error fetching concert detail:", error);
    return null;
  }
};

// 공연장 정보 가져오기
export const getConcertVenueInfo = async ({ concertId }: { concertId: string }) => {
  try {
    const res = await ClientApi(`/api/v1/concerts/placeDetail?concertId=${concertId}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API Error:", res.status, res.statusText);
      return createEmptyResponse(`API 요청 실패: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching concert venue info:", error);
    return createEmptyResponse("공연장 정보를 가져오는데 실패했습니다");
  }
};
