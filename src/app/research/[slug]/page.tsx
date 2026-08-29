import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import { getResearchArticle } from "@/lib/reader";
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

        <div
          className="
            hidden fixed page-nav-size
            md:block md:col-start-6 md:col-span-1 md:row-start-1 md:row-span-10
            lg:block lg:col-start-8 lg:col-span-1 lg:row-start-1 lg:row-span-10
            3xl:block 3xl:col-start-15 3xl:col-span-1 3xl:row-start-1 3xl:row-span-10"
        >
          <TOC />
        </div>
      </section>
    </main>
  );
}
