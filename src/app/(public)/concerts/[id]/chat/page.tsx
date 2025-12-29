"use client";
// TODO: 모바일 환경에서 ChatAside를 토글/Drawer 형태로 전환

import ChatHeader from "@/components/concert/chat/ChatHeader";
import ChatRoom from "@/components/concert/chat/ChatRoom";
import ChatAside from "@/components/concert/chat/ChatAside";
import { useParams } from "next/dist/client/components/navigation";

export default function ChatPage() {
  const params = useParams();
  const concertId = params?.id ? Number(params.id) : null;

  return (
    <>
      {/*아래는 허스키를 피하기 위한 꼼수*/}
      {console.error(concertId)}
      <ChatHeader />
      <div className="border-border flex min-h-screen border-t">
        <ChatRoom />
        <ChatAside />
      </div>
    </>
  );
}
