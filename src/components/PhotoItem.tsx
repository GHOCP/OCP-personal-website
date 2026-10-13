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

export default function PhotoItem({
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
    <div
      className="
        row-span-2 col-span-1
        md:col-span-3 md:row-span-2
        lg:col-span-2 lg:row-span-2
        3xl:col-span-4 3xl:row-span-4
        grid grid-rows-2 gap-x-[24px] gap-y-[30px]
        md:grid-cols-3 lg:grid-cols-2 3xl:grid-cols-4
      "
    >
      <Link
        href={`/photos/${slug}`}
        className="
          md:col-start-2 md:col-span-2
          lg:col-start-1 lg:col-span-1
          3xl:col-start-1 3xl:col-span-2 3xl:row-span-2
          relative isolate overflow-hidden
          h-[130px] 3xl:h-[290px]
        "
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="
              (min-width: 2560px) 600px,
              (min-width: 1024px) 25vw,
              (min-width: 768px) 50vw,
              100vw
            "
            className="object-cover object-center"
          />
        )}

        <div className="absolute bottom-20 left-1 z-10 text-white text-[14px] leading-[20px]">
          {title}
        </div>

        <div className="absolute bottom-0 left-1 z-10 page-date-size text-white">
          {date}
        </div>
      </Link>
    </div>
  );
}
