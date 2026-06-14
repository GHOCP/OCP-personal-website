import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import { getResearchArticle } from "@/lib/reader";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getResearchArticle(slug);

  return (
    <main className="min-h-screen relative responsive-padding-1 bg-(--background-article) scroll-smooth">
      {/* <h1>{article.frontmatter.title}</h1> */}
      <section className="grid-system relative">
        <MDXRemote source={article.content} components={mdxComponents} />
      </section>
    </main>
  );
}
