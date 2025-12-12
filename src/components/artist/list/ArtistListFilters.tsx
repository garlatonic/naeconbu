import { SortSelect } from "@/components/common/SortSelect";
import ArtistListButtons from "@/components/artist/list/ArtistListButtons";

export default function ArtistListFilters() {
  return (
    <div className={"item flex justify-between"}>
      <ArtistListButtons />
      <SortSelect />
    </div>
  );
}
