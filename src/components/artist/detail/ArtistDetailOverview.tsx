import ArtistDetailAbout from "@/components/artist/detail/ArtistDetailAbout";
import Discography from "@/components/artist/detail/Discography";
import QuickStat from "@/components/artist/detail/QuickStat";
import HotTrack from "@/components/artist/detail/HotTrack";
import SimilarArtists from "@/components/artist/detail/SimilarArtists";
export default function ArtistDetailOverview() {
  return (
    <section className={"px-15 py-16"}>
      <div className="mx-auto flex w-full max-w-400 gap-12">
        {/*왼쪽 파트*/}
        <div className={"flex flex-col gap-12"}>
          <ArtistDetailAbout />
          <Discography />
        </div>
        {/*오른쪽 파트*/}
        <div className={"sticky top-34 flex w-125 shrink-0 flex-col gap-12 self-start"}>
          <QuickStat />
          <HotTrack />
          <SimilarArtists />
        </div>
      </div>
    </section>
  );
}
