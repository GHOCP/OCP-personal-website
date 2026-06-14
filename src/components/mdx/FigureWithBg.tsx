import Image from "next/image";

type FigureProps = {
  src: string;
  alt?: string;
  caption?: string;
};

export default function FigureWithBg({ src, alt = "", caption }: FigureProps) {
  return (
    <figure
      className="
      lg:col-span-6 lg:row-span-3 lg:col-start-2 
      bg-(--background-grey-pic) relative"
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-4/5 mx-auto object-contain"
      />
      {caption && (
        <figcaption className="text-(--text-caption-color) text-[14px] leading-[14px] absolute left-0 bottom-[-28px] transform -translate-y-full">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
