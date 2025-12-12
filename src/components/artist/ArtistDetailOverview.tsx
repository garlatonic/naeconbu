import ArtistDetailAbout from "@/components/artist/ArtistDetailAbout";
import Discography from "@/components/artist/Discography";
import QuickStat from "@/components/artist/QuickStat";
import HotTrack from "@/components/artist/HotTrack";
import SimilarArtists from "@/components/artist/SimilarArtists";

export default function ArtistDetailOverview() {
  return (
    <section className={"mx-auto flex w-full max-w-400 gap-12 py-16"}>
      {/*왼쪽 파트*/}
      <div className={"flex flex-col gap-12"}>
        <ArtistDetailAbout />
        <Discography />
      </div>
      {/*오른쪽 파트*/}
      <div className={"sticky top-8 flex w-125 shrink-0 flex-col gap-12 self-start"}>
        <QuickStat />
        <HotTrack />
        <SimilarArtists />
      </div>
    </section>
  );
}
