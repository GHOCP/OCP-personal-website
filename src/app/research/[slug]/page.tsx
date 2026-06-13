import { getResearchArticle } from "@/lib/reader";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResearchArticle(slug);

  return (
    <main>
      <h1>{article.frontmatter.title}</h1>
    </main>
  );
}
