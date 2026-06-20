import Image from "next/image";

type FigureProps = {
  src: string;
  alt?: string;
  caption?: string;
  bgcolor: string;
};

export default function FigureWithBg({ src, alt = "", caption, bgcolor }: FigureProps) {
  return (
    <figure
      className="
      lg:col-span-6 lg:row-span-3 lg:col-start-2 relative"
      style={{ backgroundColor: bgcolor }}
    >
      <div className="grid place-items-center h-100">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="w-4/5 mx-auto object-contain block"
        />
      </div>

      {caption && (
        <figcaption className="text-(--text-caption-color) text-[14px] leading-[14px] absolute left-0 bottom-[-28px] transform -translate-y-full">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
