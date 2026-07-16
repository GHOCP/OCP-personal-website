"use client";

import { useEffect, useState } from "react";

type TocItem = {
  title: string;
  id: string;
};

export default function TOC() {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-toc]");

    const titles = Array.from(elements).map((item) => ({
      title: item.getAttribute("data-toc") || "",
      id: item.id,
    }));

    setItems(titles);
  }, []);

  return (
    <nav>
      {items.map((item) => (
        <div key={item.id}>
          <a href={`#${item.id}`}>{item.title}</a>
        </div>
      ))}
    </nav>
  );
}
