"use client";

import { useEffect, useState } from "react";

type TocItem = {
  title: string;
  id: string;
};

export default function TOC() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll("[data-toc]");

    const titles = Array.from(elements).map((item) => ({
      title: item.getAttribute("data-toc") || "",
      id: item.id,
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(titles);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-5% 0px -70% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      {items.map((item) => (
        <div key={item.id}>
          <a
            href={`#${item.id}`}
            className={`block py-1 transition-colors ${
              activeId === item.id
                ? "text-black"
                : "text-(--text-caption-color)"
            }`}
          >
            {item.title}
          </a>
        </div>
      ))}
    </nav>
  );
}
