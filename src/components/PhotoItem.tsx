"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCosImageUrl } from "@/lib/cos";

type Props = {
  slug: string;
  title: string;
  date: string;
  image: string;
};

export default function PhotoItem({
  slug,
  title,
  date,
  image,
}: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    async function loadImage() {
      const url = await getCosImageUrl(image);
      setImageUrl(url);
    }

    loadImage();
  }, [image]);

  return (
    <Link
      href={`/photos/${slug}`}
      className="
        row-span-2
        md:col-span-2 md:col-start-2 md:row-span-2
        lg:col-span-2 lg:col-start-2 lg:row-span-2 
        xl:col-span-2 xl:row-span-1 
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5"
    >
      <div
        className="
          col-span-1 row-span-2 
          relative bg-cover bg-center h-[130px] xl:col-span-1"
        style={{
          backgroundImage: imageUrl
            ? `url(${imageUrl})`
            : undefined,
        }}
      >
        <div
          className="absolute bottom-20 left-1 text-white text-[14px] leading-[20px]"
        >
          {title}
        </div>

        <div className="absolute bottom-0 left-1 page-date-size text-white">
          {date}
        </div>
      </div>
    </Link>
  );
}

