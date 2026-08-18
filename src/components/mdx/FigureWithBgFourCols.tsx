import LightboxImage from "./LightboxImage";

type FigureProps = {
  srcs: string;
  alts?: string;
  captions?: string;
  bgcolor: string;
};

export default function FigureWithBgFourCols({
  srcs = "",
  alts = "",
  captions = "",
  bgcolor,
}: FigureProps) {
  const srcArray = srcs.split("&&&").filter((s): s is string => !!s);
  const altArray = alts?.split("&&&").filter((s): s is string => !!s);
  const captionArray = captions?.split("&&&").filter((s): s is string => !!s);
  return (
    <ul
      className="
        col-span-2 row-span-2
        md:col-span-4 md:col-start-2 md:row-span-2 
        lg:col-span-6 lg:col-start-2 lg:row-span-2
        3xl:col-span-1 4xl:col-start-3 4xl:row-span-5
        grid grid-cols-2 gap-x-[24px] gap-y-[30px]
        lg:grid-cols-4"
    >
      {srcArray.map((src, index) => (
        <li key={src} className="h-[130px] md:h-[130px] lg:h-[290px]">
          <figure
            className="relative h-full flex items-center justify-center"
            style={{ backgroundColor: bgcolor }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <LightboxImage
                src={src}
                alt={altArray[index] || ""}
                className="max-w-[90%] max-h-[90%] w-auto h-auto object-contain"
              />
            </div>

            {captionArray[index] && (
              <figcaption
                className="
                  text-(--text-caption-color)
                  page-nav-size
                  absolute
                  left-0
                  bottom-[-40px]
                  transform -translate-y-full
                "
              >
                {captionArray[index]}
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}
