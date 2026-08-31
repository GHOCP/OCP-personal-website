"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PhotoItem from "@/components/PhotoItem";

type Photo = {
  slug: string;
  title: string;
  date: string;
  cover?: string;
  category?: string;
};

type Props = {
  articles: Photo[];
};

export default function PhotoPageClient({ articles }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        articles
          .map((article) => article.category)
          .filter((category): category is string => Boolean(category)),
      ),
    );

    return ["All", ...uniqueCategories];
  }, [articles]);

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <>
      <section className="grid-system relative">
        {filteredArticles.map((article) => (
          <PhotoItem
            key={article.slug}
            slug={article.slug}
            title={article.title}
            date={article.date}
            image={article.cover ?? ""}
          />
        ))}
      </section>

      <nav
        className="fixed top-0 nav-top text-white page-nav-size 
          left-[calc(100vw-4rem+2px)]
          md:left-[calc(100vw-4.5rem+2px)]
          lg:left-[calc(100vw-6rem+2px)]
          xl:left-[calc(100vw-10rem+2px)]
          3xl:left-[calc(100vw-20rem+2px)]
          4xl:text-[28px] 4xl:leading-[40px]
          grid gap-x-6 gap-y-[30px] auto-rows-[130px]"
      >
        <Link href="/" className="row-span-1">
          Homepage
        </Link>

        <div className="row-span-2 flex flex-col">
          {categories.map((category) => {
            const isSelected = (selectedCategory === category);

            return (
              <span
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="grid grid-cols-[8px_auto] gap-2 items-center cursor-pointer text-left"
              >
                <span
                  className={`
                    block
                    w-2
                    h-2
                    rounded-full
                    bg-white
                    ${isSelected ? "opacity-100" : "opacity-0"}
                  `}
                />
                <span>{category}</span>
              </span>
            );
          })}
        </div>

        <a href="#top" className="row-span-1">
          To the top
        </a>
      </nav>
    </>
  );
}

