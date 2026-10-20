import WritingsPageClient from "@/components/WritingsPageClient";
import { getArticles } from "@/lib/reader";

export default function ResearchPage() {
  const articles = getArticles("writings");

  return (
    <main
      id="top"
      className="min-h-screen relative responsive-padding-1 bg-(--background-writings) scroll-smooth"
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
            d="M128 128H72V120H128V128ZM56 112H0V104H56V112ZM128 76H72V68H128V76ZM56 60H0V52H56V60ZM128 24H72V16H128V24ZM56 8H0V0H56V8Z"
            fill="white"
          />
        </svg>
      </div>

      <WritingsPageClient articles={articles} />
    </main>
  );
}