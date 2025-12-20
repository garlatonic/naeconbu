// 공연 상세 정보
export type ConcertDetail = {
  concertId: number;
  concertImageUrls: string[];
  description: string | null;
  endDate: string; // "YYYY-MM-DD"
  likeCount: number;
  maxPrice: number;
  minPrice: number;
  name: string;
  placeAddress: string;
  placeName: string;
  posterUrl: string;
  startDate: string; // "YYYY-MM-DD"
  ticketTime: string | null;
  viewCount: number;
};

// 공연 상세 정보 아이템
export type ConcertInfoItem = {
  type: "date" | "location" | "price" | "ticketing";
  label: string;
  title: string;
  subtitle?: string;
};
