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

export default function WritingsItem({ slug, title, date, image }: Props) {
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
        row-span-2 col-span-2
        md:col-span-6 md:row-span-2
        lg:col-span-8 lg:row-span-2
        3xl:col-span-4 3xl:row-span-4
        grid grid-rows-2 gap-x-[24px] gap-y-[30px]
        md:grid-cols-6 md:grid-rows-2 lg:grid-cols-8 lg:grid-rows-2 3xl:grid-cols-16 3xl:grid-rows-2 relative"
    >
      <Link
        href={`/Writingss/${slug}`}
        className="
          row-start-1
          md:col-start-1 md:col-span-1
          lg:col-start-1 lg:col-span-1
          3xl:col-start-1 3xl:col-span-2 3xl:row-start-1 3xl:row-span-2
          relative isolate
          h-[130px] 3xl:h-[290px]"
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
              100vw"
            className="object-cover object-center"
          />
        )}
      </Link>
      <Link
        href={`/Writingss/${slug}`}
        className="
          row-start-2 row-span-1 
          md:col-start-2 md:row-start-1 md:col-span-4
          lg:col-start-2 lg:row-start-1 lg:col-span-5
          3xl:row-start-3 3xl:col-start-3
        text-white z-99 
        text-[20px] leading-[25px]
        md:text-[25px] md:leading-[30px]
        lg:text-[32px] lg:leading-[40px] 
        3xl:text-[60px] 3xl:leading-[80px]"
      >
        {title}
      </Link>
      <div
        className="absolute 
          bottom-[25px] left-0 
          md:bottom-[100px] lg:bottom- 3xl:bottom-
          z-99 page-date-size text-white"
      >
        {date}
      </div>
    </div>
  );
}
