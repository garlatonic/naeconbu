export type TicketVendor = "nol" | "ticketlink" | "melon";

export type ChatResponse = {
  status: number;
  resultCode: string;
  msg: string;
  data: ChatMessageData[];
};

// TODO: 나중에 profileImage 추가되면 수정
export type ChatMessageData = {
  messageId: string;
  concertId: number;
  senderId: number;
  senderName: string;
  content: string;
  sentDate: string;
  profileImage?: string;
};

export type ChatMessageProps = {
  profileImage?: string;
  username: string;
  message: string;
  time: string; // 화면에 표시될 포맷팅된 시간 (예: "오후 5:46")
  isMe: boolean;
};
