import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import { getResearchArticle} from "@/lib/reader";
import TOC from "@/components/TOC";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getResearchArticle(slug);

  return (
    <main
      id="top"
      className="min-h-screen relative responsive-padding-1 bg-(--background-article) scroll-smooth"
    >
      <section className="grid-system relative">
        <MDXRemote source={article.content} components={mdxComponents} />
        <div className="fixed semi-page-nav-size col-start-8 col-span-1 row-start-1 row-span-10">
          <TOC />
        </div>
      </section>
      {/* <div
        className="fixed top-0 nav-top text-black page-nav-size
        left-[calc(100vw-4rem+2px)]
        md:left-[calc(100vw-4.5rem+2px)]
        lg:left-[calc(100vw-6rem+2px)]
        xl:left-[calc(100vw-10rem+2px)]
        3xl:left-[calc(100vw-20rem+2px)]
        4xl:text-[28px] 4xl:leading-[40px]
        grid gap-x-6 gap-y-[30px] auto-rows-[130px]
        "
      >
        <TOC />
      </div> */}
    </main>
  );
}
