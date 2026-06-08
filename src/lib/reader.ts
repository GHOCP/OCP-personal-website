import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "src/content/research");

type FrontmatterDate = string | Date | undefined;

function normalizeDate(date: FrontmatterDate) {
  if (!date) return "";
  if (date instanceof Date) {
    return date.toISOString().split("T")[0];
  }
  return String(date);
}

export function getResearchArticles() {
  const filenames = fs.readdirSync(articlesDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(articlesDirectory, filename);

    const fileContent = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: normalizeDate(data.date),
      cover: data.cover,
      number: data.number,
    };
  });
}

export function getResearchArticle(slug: string) {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return {
    frontmatter: {
      ...data,
      date: normalizeDate(data.date),
    },
    content,
  };
}