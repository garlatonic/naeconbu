import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import InfoRow from "@/components/concert/chat/InfoRow";
import { Calendar, MapPin, SquareArrowOutUpRight, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConcertInfoCard() {
  return (
    <Card className={"gap-4 p-7"}>
      <CardTitle className={"text-text-main text-xl font-bold"}>Concert Information</CardTitle>
      <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-gray-200">
        <Image
          src={"/images/poster-placeholder.png"}
          alt="Concert Poster"
          fill
          className="object-cover"
        />
      </div>
      <h3 className={"text-xl font-semibold"}>The Midmight Echo Live</h3>
      <div className={"flex flex-col gap-3"}>
        <InfoRow
          icon={<Calendar size={20} />}
          title="Saturday, March 15, 2025"
          sub="8:00 PM - 11:00 PM EST"
        />
        <InfoRow icon={<MapPin size={20} />} title="Madison Square Garden" sub="New York, NY" />
      </div>
      <Button
        size={"lg"}
        variant={"outline"}
        type={"button"}
        className={"flex h-15 justify-between p-4"}
      >
        <div className={"flex gap-3"}>
          <span className="inline-flex items-center">
            <Ticket className={"h-5! w-5!"} />
          </span>
          <span className={"text-base font-semibold"}>Book Official Tickets</span>
        </div>
        <span className="inline-flex items-center">
          <SquareArrowOutUpRight className={"text-text-sub h-5! w-5!"} />
        </span>
      </Button>
    </Card>
  );
}
