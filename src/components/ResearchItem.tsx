"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCosImageUrl } from "@/lib/cos";

type Props = {
  slug: string;
  title: string;
  date: string;
  image: string;
};

export default function ResearchItem({
  slug,
  title,
  date,
  image,
}: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadImage() {
      const url = await getCosImageUrl(image);

      if (!cancelled) {
        setImageUrl(url);
      }
    }

    loadImage();

    return () => {
      cancelled = true;
    };
  }, [image]);

  return (
    <Link
      href={`/research/${slug}`}
      className="
        col-span-2 col-start-1 row-span-4
        md:col-span-3 md:row-span-4
        lg:col-span-4 lg:row-span-4
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5
        grid
        grid-cols-[repeat(2,1fr)]
        md:grid-cols-[repeat(3,1fr)]
        lg:grid-cols-[repeat(4,1fr)]
        gap-x-[24px]
        gap-y-[30px]
        auto-rows-[130px]
      "
    >
      {/* Cover image */}
      <div
        className="
          col-span-2 row-span-2
          lg:col-span-2
          relative
          overflow-hidden
        "
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="
              (min-width: 2560px) 50vw,
              (min-width: 768px) 50vw,
              100vw"
            className="object-cover object-center"
          />
        )}

        <div className="absolute bottom-20 right-20 z-10 page-date-size text-white">
          {date}
        </div>
      </div>

      {/* Title */}
      <div className="
        col-span-2 row-span-2 row-start-3 
        lg:col-span-2
        3xl:row-start-4"
      >
        <h2 className="page-semi-title-font page-semi-title-size text-[35px] leading-[40px] 3xl:text-[60px] 3xl:leading-[80px] text-white">
          {title}
        </h2>
      </div>
    </Link>
  );
}
