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
        <div className="fixed semi-page-nav-size 
        lg:col-start-8 lg:col-span-1 lg:row-start-1 lg:row-span-10">
          <TOC />
        </div>
      </section>
    </main>
  );
}
