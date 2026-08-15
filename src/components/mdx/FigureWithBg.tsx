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
        3xl:col-span-12 4xl:col-start-3 4xl:row-span-4
        relative
      "
      style={{ backgroundColor: bgcolor }}
    >
      <div className="grid place-items-center h-100 overflow-hidden">
        <LightboxImage
          src={src}
          alt={alt}
          bgcolor={bgcolor}
          className="w-4/5 mx-auto object-contain block"
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
