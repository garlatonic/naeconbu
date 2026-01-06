"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewRatingBar from "@/components/concert/detail/ReviewRatingBar";
import { twMerge } from "tailwind-merge";
import ConcertReviewCard from "@/components/concert/detail/ConcertReviewCard";
import LoadMoreBtn from "@/components/common/LoadMoreBtn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ConcertReviewListResponse } from "@/types/community/concert-review";
import { getConcertReviewList } from "@/lib/api/community/concert-review/review.client";
import ConcertReviewSummarySkeleton from "@/components/concert/detail/ConcertReviewSummarySkeleton";

export default function ConcertDetailReview({
  concertId,
  isLoggedIn,
}: {
  concertId: string;
  isLoggedIn: boolean;
}) {
  const [data, setData] = useState<ConcertReviewListResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!concertId) return;

    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const result = await getConcertReviewList(Number(concertId));
        setData(result);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [concertId]);

  if (isLoading) {
    return (
      <div className="review flex flex-col gap-6">
        <h2 className="text-text-main text-3xl font-bold">리뷰 게시판</h2>

        <ConcertReviewSummarySkeleton />
      </div>
    );
  }

  if (!data) {
    return <div>리뷰 정보를 불러올 수 없습니다.</div>;
  }

  const { summary } = data;
  const filledStarCount = Math.floor(summary.averageRating);

  return (
    <div className="review flex flex-col gap-6">
      <h2 className="text-text-main text-3xl font-bold">리뷰 게시판</h2>

      <div className={twMerge(`bg-bg-sub flex flex-col gap-6 rounded-xl p-6`)}>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <strong className="text-4xl">{summary.averageRating.toFixed(1)}</strong>
            <div>
              <div className="flex gap-1" aria-label={`평점 ${summary.averageRating}점`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 text-yellow-400"
                    fill={index < filledStarCount ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-text-sub text-sm">리뷰 {summary.totalCount.toLocaleString()} 개</p>
            </div>
          </div>
          {isLoggedIn && (
            <Link href={`/concerts/${concertId}/review/write`}>
              <Button
                variant="outline"
                size="sm"
                className="border-border-point hover:bg-border px-4 py-2"
              >
                리뷰 작성
              </Button>
            </Link>
          )}
        </div>
        <ReviewRatingBar
          ratingDistribution={summary.ratingDistribution}
          totalCount={summary.totalCount}
        />
      </div>
      {Array.from({ length: 3 }).map((_, index) => (
        <ConcertReviewCard key={index} />
      ))}

      <LoadMoreBtn />
    </div>
  );
}
