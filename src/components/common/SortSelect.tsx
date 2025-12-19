"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SortSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlerSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select onValueChange={handlerSort}>
      <SelectTrigger size="default" className="bg-point-sub w-28">
        <SelectValue placeholder="정렬" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>정렬</SelectLabel>
          <SelectItem value="LIKE">인기순</SelectItem>
          <SelectItem value="REGISTERED">최신순</SelectItem>
          <SelectItem value="UPCOMING">공연 임박순</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
