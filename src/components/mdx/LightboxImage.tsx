"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type LightboxImageProps = {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  bgcolor?: string;
};

export default function LightboxImage({
  src,
  alt = "",
  className,
  width = 800,
  height = 600,
  bgcolor = "#F7F7F7",
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const overlay =
    open &&
    createPortal(
      <div
        className="fixed inset-0 z-9999 flex items-center justify-center p-8"
        style={{ backgroundColor: bgcolor, opacity: 0.95 }}
        onClick={close}
        role="dialog"
        aria-modal="true"
        aria-label={alt || "Enlarged image"}
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-16 right-16 cursor-pointer border-0 bg-transparent text-4xl leading-none text-black"
          aria-label="Close"
        >
          ×
        </button>
        <div
          className="relative max-h-[90vh] max-w-[90vw]"
          onClick={(event) => event.stopPropagation()}
        >
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1200}
            preload
            className="max-h-[90vh] max-w-[90vw] h-auto w-auto object-contain"
          />
        </div>
      </div>,
      document.body,
    );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-zoom-in border-0 bg-transparent p-0 w-full h-full flex items-center justify-center"
        aria-label={`View larger: ${alt || "image"}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          preload
          className={className}
        />
      </button>
      {overlay}
    </>
  );
}
