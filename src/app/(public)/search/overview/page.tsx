import BreadcrumbNavbar from "@/components/review/BreadcrumbNavbar";
import BreadcrumbLabel from "@/components/search/BreadcrumbLabel";
import SearchArtistPreview from "@/components/search/SearchArtistPreview";
import SearchConcertPreview from "@/components/search/SearchConcertPreview.";
import SearchIntro from "@/components/search/SearchIntro";
import SearchNavigation from "@/components/search/SearchNavigation";
import { cn } from "@/lib/utils";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;

  return (
    <>
      <BreadcrumbNavbar
        items={[
          { label: "홈", href: "/" },
          { label: "검색 결과", href: "/search/overview" },
          { label: <BreadcrumbLabel /> },
        ]}
      />
      <SearchIntro keyword={keyword} />
      <SearchNavigation keyword={keyword} />
      <section className={cn("flex flex-col gap-16 px-15 py-16")}>
        {/* TODO : 한줄 이상은 사라지도록 해야함 */}
        <SearchArtistPreview keyword={keyword} />
        <SearchConcertPreview keyword={keyword} />
      </section>
    </>
  );
}
