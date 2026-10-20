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

export default function DesignItem({ slug, title, date, image }: Props) {
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
      href={`/designs/${slug}`}
      className="
        row-span-2 col-span-1
        md:col-span-3 md:row-span-2
        lg:col-span-2 lg:row-span-3
        3xl:col-span-4 3xl:row-span-4
        grid grid-rows-2 gap-x-[24px] gap-y-[30px]
        md:grid-cols-3 lg:grid-cols-2 lg:grid-rows-3 3xl:grid-cols-4 3xl:grid-rows-4"
    >
      <div
        className="
          row-start-1
          md:col-start-2 md:col-span-1
          lg:col-start-1 lg:col-span-1
          3xl:col-start-1 3xl:col-span-2 3xl:row-start-1 3xl:row-span-2
          relative isolate overflow-hidden
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
        <div className="absolute bottom-0 left-1 z-10 page-date-size text-white">
          {date}
        </div>
      </div>
      <div
        className="
          row-start-2
          md:col-start-3
          lg:row-start-2 lg:col-start-2
          3xl:row-start-3 3xl:col-start-3
        text-white z-99 text-[32px] leading-[40px] 3xl:text-[60px] 3xl:leading-[80px]"
      >
        {title}
      </div>
    </Link>
  );
}
