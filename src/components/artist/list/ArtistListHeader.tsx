export default function ArtistListHeader() {
  return (
    <section
      className={"bg-bg-sub border-border flex items-center justify-center border-b px-15 py-16"}
    >
      <div className={"flex w-full max-w-400 flex-col gap-4"}>
        <h2 className={"text-4xl font-bold"}>아티스트 둘러보기</h2>
        <p className={"text-text-sub text-base"}>
          다양한 아티스트의 공연과 소식을 한눈에 확인해보세요
        </p>
      </div>
    </section>
  );
}
