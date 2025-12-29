import ClientApi from "@/utils/helpers/clientApi";

// 채팅방 입장 함수
export async function joinChatRoom(concertId: number) {
  try {
    const res = await ClientApi(`/api/v1/chat-room/concert/${concertId}/join`, { method: "POST" });

    if (!res.ok) {
      let message = "채팅방 입장에 실패했습니다.";

      try {
        const json = await res.json();
        if (json?.msg) {
          message = json.msg;
        }
      } catch {}

      throw new Error(message);
    }
  } catch (e) {
    // 네트워크 에러 (Failed to fetch)
    if (e instanceof TypeError) {
      throw new Error("서버에 연결할 수 없습니다. 네트워크 상태를 확인해주세요.");
    }

    // 내가 던진 Error는 그대로 전달
    if (e instanceof Error) {
      throw e;
    }

    // 정말 예외적인 케이스
    throw new Error("알 수 없는 오류가 발생했습니다.");
  }
}
