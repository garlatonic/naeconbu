import ArtistListFilters from "@/components/artist/list/ArtistListFilters";
import ArtistListItems from "@/components/artist/list/ArtistListItems";
import { getArtists } from "@/lib/artists/artists.client";
import { cookies } from "next/headers";

export default async function ArtistListMain() {
  // 초기 로드는 서버함수로 사용해서
  const cookieStore = await cookies();

  const artists = await getArtists(0, 20, "NAME", cookieStore.toString());

  return (
    <section className={"bg-bg-main flex justify-center px-15 py-16"}>
      <div className={"flex w-full max-w-400 flex-col gap-8"}>
        <ArtistListFilters />
        <ArtistListItems artists={artists} />
      </div>
    </section>
  );
}
