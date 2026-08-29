"use client";

import { useEffect, useMemo, useState } from "react";
import LightboxImage from "./LightboxImage";

type FigureProps = {
  srcs?: string;
  alt?: string;
  caption?: string;
  bgcolor: string;
};

export default function FigureWithBg({
  srcs = "",
  alt = "",
  caption,
  bgcolor,
}: FigureProps) {
  const srcArray = useMemo(() => {
    return srcs
      .split("&&&")
      .map((s) => s.trim())
      .filter(Boolean);
  }, [srcs]);

  const [index, setIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    if (srcArray.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % srcArray.length);
    }, 1100);

    return () => clearInterval(timer);
  }, [srcArray.length]);

  // ✅ Clamp index instead of resetting via effect
  const safeIndex = srcArray.length > 0 ? index % srcArray.length : 0;

  const currentSrc = srcArray[safeIndex];

  return (
    <figure
      className="
        col-span-2 row-span-2
        md:col-span-4 md:col-start-2 md:row-span-2
        lg:col-span-6 lg:col-start-2 lg:row-span-3
        3xl:col-span-12 3xl:col-start-3 3xl:row-span-6
        relative"
      style={{ backgroundColor: bgcolor }}
    >
      <div className="flex items-center justify-center h-full w-full overflow-hidden">
        {currentSrc ? (
          <LightboxImage
            src={currentSrc}
            alt={alt}
            className="w-4/5 mx-auto object-contain block"
          />
        ) : null}
      </div>

      {caption && (
        <figcaption className="text-(--text-caption-color) page-nav-size absolute left-0 bottom-[-40px] transform -translate-y-full">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}