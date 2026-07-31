// import LightboxImage from "./LightboxImage";

// type FigureProps = {
//   src: string;
//   alt?: string;
//   caption?: string;
//   bgcolor: string;
// };

// export default function FigureWithBg({ src, alt = "", caption, bgcolor }: FigureProps) {
//   return (
//     <figure
//       className="
//       lg:col-span-6 lg:row-span-3 lg:col-start-2 relative"
//       style={{ backgroundColor: bgcolor }}
//     >
//       <div className="flex items-center justify-center h-full w-full overflow-hidden">
//         <LightboxImage
//           src={src}
//           alt={alt}
//           className="w-4/5 mx-auto object-contain block"
//         />
//       </div>

//       {caption && (
//         <figcaption className="text-(--text-caption-color) text-[14px] leading-[14px] absolute left-0 bottom-[-28px] transform -translate-y-full">
//           {caption}
//         </figcaption>
//       )}
//     </figure>
//   );
// }

// "use client";

// type FigureProps = {
//   srcs: string;
//   alt?: string;
//   caption?: string;
//   bgcolor: string;
// };
// import { useEffect, useState } from "react";
// import LightboxImage from "./LightboxImage";

// export default function FigureWithBg({
//   srcs = "",
//   alt = "",
//   caption,
//   bgcolor,
// }: FigureProps) {
//   const [index, setIndex] = useState(0);

//     const srcArray = srcs.split("&&&").filter((s): s is string => !!s);

//   useEffect(() => {
//     if (srcArray.length <= 1) return;

//     const timer = setInterval(() => {
//       setIndex((i) => (i + 1) % srcArray.length);
//     }, 3000); // change every 3 seconds

//     return () => clearInterval(timer);
//   }, [srcArray.length]);

//   return (
//     <figure
//       className="lg:col-span-6 lg:row-span-3 lg:col-start-2 relative"
//       style={{ backgroundColor: bgcolor }}
//     >
//       <div className="flex items-center justify-center h-full w-full overflow-hidden">
//         <LightboxImage
//           src={srcArray[index]}
//           alt={alt || ""}
//           className="w-4/5 mx-auto object-contain block"
//         />
//       </div>

//       {caption && (
//         <figcaption className="text-(--text-caption-color) text-[14px] leading-[14px] absolute left-0 bottom-[-28px] transform -translate-y-full">
//           {caption}
//         </figcaption>
//       )}
//     </figure>
//   );
// }

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
        sm:col-span-2 sm:row-span-3
        md:col-span-4 md:col-start-2 md:row-span-3
        lg:col-span-6 lg:col-start-2 lg:row-span-3
        3xl:col-span-12 4xl:col-start-3 4xl:row-span-4
        relative
      "
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
        <figcaption className="text-(--text-caption-color) text-[14px] leading-[14px] absolute left-0 bottom-[-28px] transform -translate-y-full">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}