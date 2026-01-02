"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { Bus, BusFrontIcon, Car, CarFrontIcon, Loader2 } from "lucide-react";
import { getCarRouteSummaryByKakaoMap } from "@/lib/api/planner/transport.client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { KakaoMapSummary } from "@/types/planner";
import { Separator } from "@/components/ui/separator";

interface RouteCardProps {
  start: { lat: number; lon: number; name: string };
  end: { lat: number; lon: number; name: string };
}

export default function RouteCard({ start, end }: RouteCardProps) {
  const [transportType, setTransportType] = useState<"car" | "transit">("car");
  const [carData, setCarData] = useState<KakaoMapSummary | null>(null);
  const [loadingCar, setLoadingCar] = useState(false);
  const [loadingTransit, setLoadingTransit] = useState(false);

  const coords = useMemo(
    () => ({
      startX: start.lon,
      startY: start.lat,
      endX: end.lon,
      endY: end.lat,
    }),
    [start.lon, start.lat, end.lon, end.lat]
  );

  const fetchCar = useCallback(async () => {
    if (carData) return;
    setLoadingCar(true);
    try {
      const res = await getCarRouteSummaryByKakaoMap(coords);
      setCarData(res);
    } catch (e) {
      console.error("자동차 탐색 실패", e);
    } finally {
      setLoadingCar(false);
    }
  }, [coords, carData]);

  // TODO : 대중교통 API 연동
  const fetchTransit = useCallback(async () => {
    setLoadingTransit(true);
    setTimeout(() => setLoadingTransit(false), 500);
  }, []);

  useEffect(() => {
    fetchCar();
  }, [fetchCar]);

  const handleModeChange = (mode: "car" | "transit") => {
    setTransportType(mode);
    if (mode === "car") fetchCar();
    else fetchTransit();
  };

  return (
    <div className="relative flex gap-4 lg:gap-6">
      <div className="z-10 flex-none">
        <div className="border-bg-main bg-bg-sub flex size-10 items-center justify-center rounded-full border-2 shadow-sm lg:size-16 lg:border-4">
          {transportType === "car" ? (
            <CarFrontIcon className="size-4 lg:size-7" />
          ) : (
            <BusFrontIcon className="size-4 lg:size-7" />
          )}
        </div>
      </div>

      <div className="border-border bg-bg-sub flex-1 space-y-4 rounded-xl border p-4 shadow-sm lg:p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h4 className="text-text-main text-lg font-bold lg:text-xl">
              {transportType === "car" ? "자동차 경로" : "대중교통 경로"}
            </h4>
            <div className="text-text-sub text-sm">
              {start.name} → {end.name}
            </div>
          </div>
          <ToggleGroup
            type="single"
            value={transportType}
            onValueChange={(value) => value && handleModeChange(value as "car" | "transit")}
            className="bg-muted"
          >
            <ToggleGroupItem value="car" aria-label="자동차 경로" size="sm">
              <Car className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="transit" aria-label="대중교통 경로" size="sm">
              <Bus className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <Separator />
        {transportType === "car" ? (
          loadingCar ? (
            <div className="flex justify-center py-2">
              <Loader2 className="size-5 animate-spin text-gray-400" />
            </div>
          ) : carData ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <h5 className="text-text-sub text-xs font-medium">소요 시간</h5>
                <p className="text-text-sm">{Math.round(carData.duration / 60)} 분</p>
              </div>
              <div className="">
                <h5 className="text-text-sub text-xs font-medium">이동 거리</h5>
                <p className="text-text-sm">{(carData.distance / 1000).toFixed(1)} km</p>
              </div>
            </div>
          ) : (
            <p className="py-2 text-center text-xs text-gray-400">경로를 찾을 수 없습니다.</p>
          )
        ) : loadingTransit ? (
          <div className="flex justify-center py-2">
            <Loader2 className="text-primary size-5 animate-spin" />
          </div>
        ) : (
          <div className="py-2 text-center">
            <p className="text-sm text-gray-500">대중교통 정보 준비 중 🚧</p>
          </div>
        )}
      </div>
    </div>
  );
}
