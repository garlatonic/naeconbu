import { SortSelect } from "@/components/common/SortSelect";

type ArtistListFiltersProps = {
  onSortChange: (value: string) => void;
};

export default function ArtistListFilters({ onSortChange }: ArtistListFiltersProps) {
  return (
    <div className="item flex justify-end">
      <SortSelect
        onValueChange={onSortChange}
        sortList={[
          { value: "LIKE", name: "인기순" },
          { value: "NAME", name: "이름순" },
        ]}
      />
    </div>
  );
}
