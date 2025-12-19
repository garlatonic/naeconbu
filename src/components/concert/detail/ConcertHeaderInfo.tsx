import { ConcertInfoItem } from "@/types/concerts";
import { Calendar, MapPin, Ticket, Armchair } from "lucide-react";

const iconMap = {
  date: <Calendar className="stroke-point-main size-5" />,
  location: <MapPin className="stroke-point-main size-5" />,
  price: <Ticket className="stroke-point-main size-5" />,
  capacity: <Armchair className="stroke-point-main size-5" />,
};

export default function ConcertHeaderInfo({ type, label, title, subtitle }: ConcertInfoItem) {
  return (
    <div className="flex gap-4">
      <div className="bg-bg-sub flex size-12 items-center justify-center rounded-full">
        {iconMap[type]}
      </div>
      <div className="space-y-1">
        <h3 className="text-text-sub text-xs font-medium">{label}</h3>
        <strong className="text-base">{title}</strong>
        <p className="text-text-sub text-xs">{subtitle}</p>
      </div>
    </div>
  );
}
