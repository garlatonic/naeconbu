"use client";

import { useState } from "react";
import { TicketVendor } from "@/types/chat";
import ChatTimeCard from "@/components/concert/chat/ChatTimeCard";
import ConcertInfoCard from "@/components/concert/chat/ConcertInfoCard";
import ChatRulesCard from "@/components/concert/chat/ChatRulesCard";
import ActiveParticipantsCard from "@/components/concert/chat/ActiveParticipantsCard";

export default function ChatAside() {
  const [vendor, setVendor] = useState<TicketVendor>("nol");

  return (
    <aside className="bg-bg-sub flex max-w-400 flex-col gap-6 p-10">
      <ChatTimeCard vendor={vendor} setVendor={setVendor} />
      <ConcertInfoCard />
      <ChatRulesCard />
      <ActiveParticipantsCard />
    </aside>
  );
}
