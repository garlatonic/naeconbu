import BackPageButton from "@/components/common/BackPageButton";
import { ArrowLeftIcon, Clock4Icon, MapPinIcon } from "lucide-react";

export default function PlannerTopHeader() {
  return (
    <header className="bg-linear-to-tr from-zinc-900 to-zinc-800 px-15 py-28">
      <div className="mx-auto max-w-400 space-y-6">
        <BackPageButton
          variant="ghost"
          className="flex h-auto gap-2 p-0! text-base text-zinc-400 hover:bg-transparent hover:text-zinc-200"
        >
          <ArrowLeftIcon size={16} />
          뒤로 가기
        </BackPageButton>
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-white">먼데이키즈 영접하러 출발</h2>
          <p className="flex gap-2 text-xl text-zinc-300">
            <span>먼데이프로젝트 시즌8 [급한노새 단독 콘서트 ‘Adventure Time’]</span>·
            <span>2025.12.29</span>·<span>클럽온에어</span>
          </p>
        </div>
        <ul className="flex gap-6 font-medium text-zinc-400">
          <li className="flex items-center gap-2">
            <Clock4Icon size={14} />
            <span>공연 시간: 90분</span>
          </li>
          <li className="flex items-center gap-1">
            <MapPinIcon size={14} />
            <span>서울특별시 마포구 잔다리로 44(서교동)</span>
          </li>
        </ul>
      </div>
    </header>
  );
}
