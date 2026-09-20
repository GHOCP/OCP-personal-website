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
    <div
      className="
        row-span-2 col-span-1
        md:col-span-3 md:row-span-2
        lg:col-span-2 lg:row-span-2 
        3xl:col-span-4 3xl:row-span-4
        grid grid-rows-2 gap-x-[24px] gap-y-[30px]
        md:grid-cols-3 lg:grid-cols-2 3xl:grid-cols-4"
    >
      <Link
        href={`/photos/${slug}`}
        className="
          md:col-start-2 md:col-span-2
          lg:col-start-1 lg:col-span-1
          3xl:col-start-1 3xl:col-span-2 3xl:row-span-2
          relative bg-cover bg-center h-[130px] 3xl:h-[290px]"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        }}
      >
        <div className="absolute bottom-20 left-1 text-white text-[14px] leading-[20px]">
          {title}
        </div>

        <div className="absolute bottom-0 left-1 page-date-size text-white">
          {date}
        </div>
      </Link>
    </div>
  );
}

