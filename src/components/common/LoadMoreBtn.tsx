import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoadMoreBtn() {
  // TODO : href props로 받기
  return (
    <div className={"flex justify-center"}>
      <Link href={"#"}>
        <Button
          size={"lg"}
          variant={"outline"}
          className={"border-border cursor-pointer border-2"}
          type={"button"}
        >
          <span className={"font-bold"}>더보기</span>
        </Button>
      </Link>
    </div>
  );
}
