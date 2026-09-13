"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CosImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function CosImage({
  src,
  alt,
  width,
  height,
  className,
}: CosImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    async function loadImage() {
      const response = await fetch(
        `/api/cos-url?key=${encodeURIComponent(src)}`,
      );

      if (!response.ok) {
        console.error("Failed to get COS URL");
        return;
      }

      const data = await response.json();
      setImageUrl(data.url);
    }

    loadImage();
  }, [src]);

  if (!imageUrl) {
    return (
      <div
        className={className}
        style={{
          width,
          height,
        }}
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
