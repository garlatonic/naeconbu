"use client";
import { LoaderCircleIcon, MapPinIcon, MapPinnedIcon } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Place {
  id?: string;
  place_name: string;
  address_name: string;
  x?: string; // 경도
  y?: string; // 위도
}

interface SearchPlacesProps {
  placeholder?: string;
  onSelect?: (place: Place) => void;
}

export default function SearchPlaces({
  placeholder = "장소 또는 주소를 검색하세요",
  onSelect,
}: SearchPlacesProps) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = useId();

  const debouncedTerm = useDebounce(term, 500);

  useEffect(() => {
    const run = async () => {
      if (!debouncedTerm.trim()) {
        setResults([]);
        return;
      }
      setIsLoading(true);
      try {
        const res = await fetch(`/api/search-places?query=${encodeURIComponent(debouncedTerm)}`);
        if (!res.ok) throw new Error("검색 요청 실패");
        const data = await res.json();
        setResults((data?.documents ?? []) as Place[]);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("장소 검색에 실패했습니다.");
        }
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };
    run();
  }, [debouncedTerm]);

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50">
          <MapPinIcon className="stroke-text-sub size-4" />
          <span className="sr-only">Search</span>
        </div>
        <Input
          id={id}
          type="search"
          placeholder={placeholder}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="peer px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
        />
        {isLoading && (
          <div className="text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50">
            <LoaderCircleIcon className="size-4 animate-spin" />
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
      {results.length > 0 && (
        <div className="max-h-28 space-y-3 overflow-y-auto">
          <ul className="space-y-2">
            {results.map((place) => (
              <li
                key={`${place.id ?? place.place_name}-${place.address_name}`}
                className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-md p-2"
                onClick={() => {
                  // 클릭 시 입력값 반영 + 선택 콜백 전달
                  setTerm(place.place_name);
                  onSelect?.(place);
                }}
              >
                <MapPinnedIcon className="stroke-text-sub size-5" />
                <div className="space-y-0.5">
                  <strong className="text-text-main text-sm font-medium">{place.place_name}</strong>
                  <p className="text-text-sub text-xs">{place.address_name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}
