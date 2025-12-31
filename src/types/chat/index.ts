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
};
