import { ConcertDetail } from "@/types/concerts";

import ChatHeader from "@/components/concert/chat/ChatHeader";
import ChatRoom from "@/components/concert/chat/ChatRoom";
import ChatAside from "@/components/concert/chat/ChatAside";

export default function ChatClient({ concert }: { concert: ConcertDetail | null }) {
  return (
    <>
      <ChatHeader concert={concert} />
      <div className="border-border bg-bg-main flex h-[calc(100dvh-92px)] overflow-hidden border-t">
        <ChatRoom />
        <ChatAside />
      </div>
    </>
  );
}
