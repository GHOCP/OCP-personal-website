import Link from "next/link";
import ResearchItem from "@/components/ResearchItem";
import { getResearchArticles } from "@/lib/reader";

export default function ResearchPage() {
  const articles = getResearchArticles();
  return (
    <main
      id="top"
      className="min-h-screen relative responsive-padding-1 bg-(--background-research) scroll-smooth"
    >
      <div className="fixed left-2 top-2 w-40 h-40 group z-99">
        <svg
          className="w-full h-auto max-w-lg absolute bottom-0
              transition-all duration-500 ease-out
              group-hover:scale-105
              group-hover:-translate-y-2
              group-hover:translate-x-2"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M68 54.3438L117.172 5.17187L122.828 10.8282L73.6562 60H128V68H68V128H60V73.6562L10.8282 122.828L5.17187 117.172L54.3438 68H0V60H60V0H68V54.3438Z"
            fill="white"
          />
        </svg>
      </div>

      <section className="grid-system relative">
        {articles.map((article) => (
          <ResearchItem
            key={article.slug}
            slug={article.slug}
            title={article.title}
            date={article.date}
            image={article.cover}
          />
        ))}
      </section>
      <nav
        className="fixed top-0 nav-top text-white page-nav-size
        left-[calc(100vw-4rem+2px)]
        md:left-[calc(100vw-4.5rem+2px)]
        lg:left-[calc(100vw-6rem+2px)]
        xl:left-[calc(100vw-10rem+2px)]
        3xl:left-[calc(100vw-20rem+2px)]
        4xl:text-[28px] 4xl:leading-[40px]
        grid gap-x-6 gap-y-[30px] auto-rows-[130px]
        "
      >
        <Link href="/" className="row-span-1">
          Homepage
        </Link>
        <p className="row-span-2">&nbsp;</p>
        <a href="#top" className="row-span-1">
          To the top
        </a>
      </nav>
    </main>
  );
}