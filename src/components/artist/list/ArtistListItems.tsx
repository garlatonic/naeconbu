"use client";

import Link from "next/link";
import { ArtistListItem } from "@/types/artists";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { likeArtist } from "@/lib/artists/artists";
import { toast } from "sonner";

export default function ArtistListItems({ artists }: { artists: ArtistListItem[] }) {
  const handleLike = async (id: number) => {
    try {
      await likeArtist(id);
      toast.success("아티스트를 좋아요 했어요!");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("알 수 없는 오류가 발생했습니다.");
      }
    }
  };
  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {artists.map((artist) => (
        <Link
          key={artist.id}
          href={`/concerts/${artist.id}`}
          className="group flex flex-col gap-5 transition hover:opacity-90"
        >
          <div className="border-border/60 relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={artist.imageUrl || "/images/artist-placeholder.png"}
              alt="Concert Poster"
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
            <Button
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                await handleLike(artist.id);
              }}
              type="button"
              aria-label="아티스트 좋아요"
              className="absolute top-2 right-2 h-9 w-9 scale-90 rounded-full bg-black/20 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            >
              <Heart
                className={twMerge(
                  "h-5 w-5 fill-white text-white transition",
                  artist.id % 2 === 0 && "fill-red-500 text-red-500"
                )}
                strokeWidth={0}
              />
            </Button>
          </div>
          <strong className="line-clamp-1 text-2xl">{artist.artistName}</strong>
        </Link>
      ))}
    </div>
  );
}
