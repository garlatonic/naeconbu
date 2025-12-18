import { Card, CardTitle } from "@/components/ui/card";
import InfoBadge from "@/components/concert/chat/InfoBadge";
import ParticipantItem from "@/components/concert/chat/ParticipantItem";

const PARTICIPANTS = [
  {
    id: 1,
    name: "MusicFan_2024",
    statusText: "Active now",
    online: true,
  },
  {
    id: 2,
    name: "MusicFan_2024",
    statusText: "Active 2m ago",
    online: false,
  },
] as const;

export default function ActiveParticipantsCard() {
  return (
    <Card className="gap-4 p-7">
      <div className="flex items-center justify-between">
        <CardTitle className="text-text-main text-xl font-bold">Active Participants</CardTitle>

        <InfoBadge>
          <span className="text-text-sub">{PARTICIPANTS.length}</span>
        </InfoBadge>
      </div>

      <div className="flex flex-col gap-3">
        {PARTICIPANTS.map((user) => (
          <ParticipantItem
            key={user.id}
            name={user.name}
            statusText={user.statusText}
            online={user.online}
          />
        ))}
      </div>
    </Card>
  );
}
