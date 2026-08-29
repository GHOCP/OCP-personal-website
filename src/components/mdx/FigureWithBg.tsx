import LightboxImage from "./LightboxImage";

type FigureProps = {
  src: string;
  alt?: string;
  caption?: string;
  bgcolor: string;
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
        col-span-2 row-span-2
        md:col-span-4 md:col-start-2 md:row-span-2
        lg:col-span-6 lg:col-start-2 lg:row-span-3
        3xl:col-span-12 3xl:col-start-3 3xl:row-span-6
        h-[290px] lg:h-[450px] 3xl:h-[930]
        relative"
      style={{ backgroundColor: bgcolor }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <LightboxImage
          src={src}
          alt={alt}
          bgcolor={bgcolor}
          className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
        />
      </div>

      {caption && (
        <figcaption className="text-(--text-caption-color) page-nav-size absolute left-0 bottom-[-40px] transform -translate-y-full">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
