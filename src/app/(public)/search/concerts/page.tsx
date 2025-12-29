import BreadcrumbNavbar from "@/components/review/BreadcrumbNavbar";
import BreadcrumbLabel from "@/components/search/BreadcrumbLabel";
import SearchConcerts from "@/components/search/SearchConcerts";
import SearchIntro from "@/components/search/SearchIntro";
import SearchNavigation from "@/components/search/SearchNavigation";
import { getSearchConcertsServer } from "@/lib/api/search.server";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;
  const concerts = await getSearchConcertsServer({ keyword: keyword });

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
      <SearchConcerts initialConcerts={concerts} keyword={keyword} />
    </>
  );
}
