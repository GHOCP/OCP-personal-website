import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "src/content/research");

type FrontmatterDate = string | Date | undefined;

type ResearchFrontmatter = {
  title: string;
  date: string;
  cover?: string;
  number?: number;
};

type ResearchArticle = {
  frontmatter: ResearchFrontmatter;
  content: string;
};

function normalizeDate(date: FrontmatterDate) {
  if (!date) return "";
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }
  return String(date);
}

export function getResearchArticles() {
  const filenames = fs.readdirSync(articlesDirectory);

  const articles = filenames.map((filename) => {
    const filePath = path.join(articlesDirectory, filename);

    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
      cover: data.cover,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getResearchArticle(slug: string): ResearchArticle {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent) as unknown as {
    data: { title: string; date?: string | Date; cover?: string; number?: number };
    content: string;
  };

  return {
    frontmatter: {
      title: data.title,
      date: normalizeDate(data.date),
      cover: data.cover,
    },
    content,
  };
}

export function getResearchSlugs() {
  const filenames = fs.readdirSync(articlesDirectory);

  return filenames.map((filename) => filename.replace(".mdx", ""));
}

export function slugifySectionTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&ldquo;|&rdquo;|&quot;|&amp;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getResearchSections(content: string) {
  const sectionPattern = /<SemiTitle[^>]*title="([^"]+)"/g;
  const sections: { id: string; label: string }[] = [];

  for (const match of content.matchAll(sectionPattern)) {
    const label = match[1];
    sections.push({
      id: slugifySectionTitle(label),
      label,
    });
  }

  return sections;
}