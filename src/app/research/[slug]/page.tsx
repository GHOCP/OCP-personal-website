import { getResearchArticle, getResearchSlugs } from "@/lib/reader";
import { mdxComponents } from "@/components/mdx-components";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getResearchSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const article = getResearchArticle(slug);

  const ArticleContent = (
    await import(`@/content/research/${slug}.mdx`)
  ).default;

  return (
    <main className="min-h-screen responsive-padding-1">
      <h1>{article.frontmatter.title}</h1>
      <article className="prose">
        <ArticleContent components={mdxComponents} />
      </article>
    </main>
  );
}
