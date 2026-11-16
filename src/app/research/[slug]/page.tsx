import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import { getArticle } from "@/lib/reader";
import TOC from "@/components/TOC";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getArticle(slug);

  return (
    <main
      id="top"
      className="min-h-screen relative responsive-padding-1 bg-(--background-article) scroll-smooth"
    >
      <section className="grid-system relative">
        <MDXRemote source={article.content} components={mdxComponents} />
        <div
          className="fixed top-0 nav-top text-white page-nav-size 
            left-[calc(100vw-4rem-20px)]
            md:left-[calc(100vw-4.5rem-16px)]
            lg:left-[calc(100vw-160px+2px)]
            xl:left-[calc(100vw-10rem+2px)]
            3xl:left-[calc(100vw-20rem+2px)]"
        >
          <TOC />
        </div>
      </section>
    </main>
  );
}
