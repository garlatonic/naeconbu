export type ConcertData = {
  id: number;
  name: string;
  placeName: string;
  ticketTime?: string | null;
  ticketEndTime?: string | null;
  startDate: string;
  endDate: string;
  posterUrl: string;
  maxPrice?: number;
  minPrice?: number;
  viewCount?: number;
  likeCount?: number;
};

export type ConcertDataWithLiked = ConcertData & {
  isLiked?: boolean;
};

export type SortSelectProps = {
  onValueChange?: (value: string) => void;
  sortList?: {
    value: string;
    name: string;
  }[];
};

export type QuickActionsProps = {
  Icon1: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  Icon2?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
