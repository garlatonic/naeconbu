import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { ConcertCartProp } from "@/components/concert/ConcertType";
import Link from "next/link";

export default function ConcertCard({ image, title, date, location }: ConcertCartProp) {
  return (
    <Link href="#" className="flex cursor-pointer flex-col gap-5">
      <Image
        src={image}
        alt="Concert Poster"
        width={375}
        height={500}
        className="aspect-3/4 w-full rounded-lg"
      />
      <div className="flex flex-col gap-3">
        <strong className="text-2xl">{title}</strong>
        <div className="text-text-sub flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <p>{date}</p>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <p>{location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
