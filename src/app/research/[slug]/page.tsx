import { getResearchArticle } from "@/lib/reader";

type ResearchArticle = {
  frontmatter: {
    title: string;
    date: string;
  };
  content: string;
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getResearchArticle(slug) as ResearchArticle;

  return (
    <main>
      <h1>{article.frontmatter.title}</h1>

      <pre>{article.content}</pre>
    </main>
  );
}
