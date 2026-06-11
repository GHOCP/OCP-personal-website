"use client";

import { useEffect, useState, type ComponentType } from "react";
import { researchImports } from "@/lib/research-imports";

type ResearchArticleContentProps = {
  slug: string;
};

type MDXComponent = ComponentType<unknown>;

export default function ResearchArticleContent({ slug }: ResearchArticleContentProps) {
  const [Content, setContent] = useState<MDXComponent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const importer = researchImports[slug as keyof typeof researchImports];

    if (!importer) {
      setError("Article content not found.");
      return;
    }

    importer()
      .then((mod) => {
        const Component = mod.default as MDXComponent | undefined;

        if (!Component) {
          console.error("MDX module default export missing", mod);
          setError("Failed to load article content.");
          return;
        }

        setContent(Component);
      })
      .catch((err) => {
        console.error("Import failed:", err);
        setError("Failed to load article content.");
      });
  }, [slug]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!Content) {
    return <p>Loading article...</p>;
  }

  return <Content />;
}

