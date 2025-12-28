"use client";

import { useState } from "react";
import ArtistListFilters from "@/components/artist/list/ArtistListFilters";
import ArtistListItems from "@/components/artist/list/ArtistListItems";
import { getArtists } from "@/lib/artists/artists.client";
import { ArtistListContent } from "@/types/artists";

export default function ArtistListClient({
  initialArtists,
}: {
  initialArtists: ArtistListContent[];
}) {
  const [artists, setArtists] = useState(initialArtists);
  // const [sort, setSort] = useState<"NAME" | "LIKE">("NAME");

  const handleSortChange = async (value: string) => {
    const nextArtists = await getArtists(0, 20, value);
    setArtists(nextArtists);
  };

  return (
    <>
      <ArtistListFilters onSortChange={handleSortChange} />
      <ArtistListItems artists={artists} />
    </>
  );
}
