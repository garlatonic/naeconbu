import { SortSelect } from "@/components/common/SortSelect";

export default function ArtistListFilters() {
  return (
    <div className={"item flex justify-end"}>
      {/*<ArtistListButtons />*/}
      <SortSelect />
    </div>
  );
}
