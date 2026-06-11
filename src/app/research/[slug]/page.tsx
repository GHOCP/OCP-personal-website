import { notFound } from "next/navigation";
import { researchImports } from "@/lib/research-imports";
import { getResearchArticle } from "@/lib/reader";
import ResearchArticleContent from "@/components/ResearchArticleContent";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const importer = researchImports[slug as keyof typeof researchImports];

  if (!importer) {
    notFound();
  }

  const article = getResearchArticle(slug);

  return (
    <main>
      <h1>{article.frontmatter.title}</h1>

      <ResearchArticleContent slug={slug} />
    </main>
  );
}
