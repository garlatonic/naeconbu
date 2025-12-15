import { Button } from "@/components/ui/button";

export type ButtonProps = React.ComponentProps<"button"> & React.ComponentProps<typeof Button>;

export type ScheduleType = "TRANSPORT" | "MEAL" | "WAITING" | "ACTIVITY" | "OTHER" | "CONCERT";

export type TransportType = "WALK" | "PUBLIC_TRANSPORT" | "CAR" | null;

export type ScheduleProps = {
  schedule_id: number;
  plan_id: number;
  schedule_type: ScheduleType;
  title: string;
  start_at: string;
  duration: number;
  location: string;
  location_lat: number;
  location_lon: number;
  estimated_cost: number;
  details: string;
  sequence_order: number;
  start_place_lat?: number | null;
  start_place_lon?: number | null;
  end_place_lat?: number | null;
  end_place_lon?: number | null;
  distance?: number | null;
  transport_type?: TransportType;
  created_date: string;
  modified_date: string;
};

export type ScheduleLocationProps = {
  place_name: string;
  address_name: string;
  x?: string; // 경도
  y?: string; // 위도
};

export type ScheduleFormData = {
  title: string;
  type: ScheduleType;
  time: string;
  duration: string;
  location: string;
  notes: string;
  coords?: { lat?: string; lng?: string };
};
