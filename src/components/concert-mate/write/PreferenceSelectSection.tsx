"use client";

import { CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MatePostWrite } from "@/types/community/concert-mate";
import { Controller, useFormContext } from "react-hook-form";

export default function PreferenceSelectSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<MatePostWrite>();

  return (
    <CardContent className="grid grid-cols-3 gap-2">
      <div className="flex flex-col gap-2">
        <CardTitle>
          인원 수 <span className="text-text-sub">*</span>
        </CardTitle>
        <Input
          type="number"
          {...register("maxParticipants", {
            valueAsNumber: true,
            required: "인원수를 입력해주세요",
          })}
          placeholder="ex. 2"
          className="h-13"
        />
        {errors.maxParticipants && (
          <span className="text-xs text-red-500">{errors.maxParticipants.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <CardTitle>성별</CardTitle>
        <Controller
          name="genderPreference"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="!h-13 w-full">
                <SelectValue placeholder="ex. 성별 무관" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>성별</SelectLabel>
                  <SelectItem value="ANY">성별 무관</SelectItem>
                  <SelectItem value="MALE">남성</SelectItem>
                  <SelectItem value="FEMALE">여성</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <CardTitle>연령대</CardTitle>
        <div className="flex gap-2">
          <Input
            type="number"
            {...register("ageRangeMin", { valueAsNumber: true })}
            placeholder="ex. 20 (~)"
            className="h-13"
          />
          <Input
            type="number"
            {...register("ageRangeMax", {
              valueAsNumber: true,
              // 최소값보다 작지 않은지 검증 로직
              validate: (val) => {
                const min = watch("ageRangeMin");
                return !val || !min || val >= min || "최소값보다 커야 합니다";
              },
            })}
            placeholder="ex. 29"
            className="h-13"
          />
        </div>
      </div>
    </CardContent>
  );
}
