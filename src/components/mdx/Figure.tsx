import LightboxImage from "./LightboxImage";

type FigureProps = {
  src: string;
  alt?: string;
  caption?: string;
  bgcolor?: string;
};

export default function FigureWithBg({
  src,
  alt = "",
  caption,
  bgcolor,
}: FigureProps) {
  return (
    <figure
      className="
        col-span-2 row-span-4
        md:col-span-4 md:col-start-2 md:row-span-4
        lg:col-span-6 lg:col-start-2 lg:row-span-4
        3xl:col-span-12 3xl:col-start-3 3xl:row-span-6
        h-[450px] md:h-[450px] lg:h-[450px] 3xl:h-[770px]
        grid grid-cols-1 gap-x-[24px] gap-y-[30px]
        relative"
    >
      <div className="flex items-center justify-center h-[450px] 3xl:h-[770px]">
        <LightboxImage
          src={src}
          alt={alt}
          bgcolor={bgcolor}
          className="max-w-[95%] max-h-[95%] w-auto h-auto object-contain"
        />
      </div>
      {caption && (
        <figcaption
          className="
            w-[60%]
            mx-auto
            text-(--text-caption-color)
            page-nav-size
            text-center"
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
