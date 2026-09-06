import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

type FrontmatterDate = string | Date | undefined;

type ArticleFrontmatter = {
  title: string;
  date: string;
  cover?: string;
  category?: string;
  number?: number;
};

type ArticleProps = { frontmatter: ArticleFrontmatter; content: string };

function getContentDirectory(folder: string) {
  return path.join(contentDirectory, folder);
}

function normalizeDate(date: FrontmatterDate) {
  if (!date) return "";
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }
  return String(date);
}

export function getArticles(folder: string = "research") {
  const directory = getContentDirectory(folder);

  const filenames = fs.readdirSync(directory);

  const articles = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(directory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        cover: data.cover,
        category: data.category,
        number: data.number,
      };
    });

  return articles.sort(
    (a, b) => (b.number ?? Infinity) - (a.number ?? Infinity),
  );
}

export function getArticle(
  slug: string,
  folder: string = "research",
): ArticleProps {
  const directory = getContentDirectory(folder);
  const filePath = path.join(directory, `${slug}.mdx`);

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent) as unknown as {
    data: {
      title: string;
      date?: string | Date;
      cover?: string;
      category?: string;
      number?: number;
    };
    content: string;
  };

  return {
    frontmatter: {
      title: data.title,
      date: normalizeDate(data.date),
      cover: data.cover,
      category: data.category,
      number: data.number,
    },
    content,
  };
}

export function getArticleSlugs(folder: string = "research") {
  const directory = getContentDirectory(folder);

  const filenames = fs.readdirSync(directory);

  return filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => filename.replace(/\.mdx$/, ""));
}

export function slugifySectionTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&ldquo;|&rdquo;|&quot;|&amp;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getSections(content: string) {
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