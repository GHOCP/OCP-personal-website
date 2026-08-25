import LightboxImage from "./LightboxImage";

type FigureProps = {
  srcs: string;
  alts?: string;
  captions?: string;
  bgcolor: string;
};

export default function FigureWithBgOnePlusTwo({
  srcs = "",
  alts = "",
  captions = "",
  bgcolor,
}: FigureProps) {
  const srcArray = srcs.split("&&&").filter((s): s is string => !!s);
  const altArray = alts?.split("&&&").filter((s): s is string => !!s);
  const captionArray = captions?.split("&&&").filter((s): s is string => !!s);
  return (
    <div
      className="
        col-span-2 row-span-3
        md:col-span-4 md:col-start-2 md:row-span-3
        lg:col-span-6 lg:col-start-2 lg:row-span-4
        grid gap-x-[24px] gap-y-[30px]
        md:grid-cols-2 lg:grid-cols-3"
    >
      {/* <pic1> */}
      <figure
        className="
          col-span-2 row-span-2 
          md:col-span-2
          lg:col-span-2 lg:row-span-4
          h-[290px] md:h-[290px] lg:h-[610px]
          relative"
        style={{ backgroundColor: bgcolor }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <LightboxImage
            src={srcArray[0]}
            alt={altArray[0] || ""}
            className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
          />
        </div>

        {captionArray[0] && (
          <figcaption className="text-(--text-caption-color) page-nav-size absolute left-0 bottom-[-40px] transform -translate-y-full">
            {captionArray[0]}
          </figcaption>
        )}
      </figure>

      <div
        className="
          col-span-2
          lg:col-span-1
          grid grid-cols-2 gap-x-[24px] gap-y-[30px]
          lg:grid-cols-1"
      >
        {/* <pic2> */}
        <figure
          className="
            col-span-1 row-span-1
            lg:col-span-1 lg:row-span-2
            h-[130px] md:h-[130px] lg:h-[290px] relative"
          style={{ backgroundColor: bgcolor }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <LightboxImage
              src={srcArray[1]}
              alt={altArray[1] || ""}
              className="max-w-[90%] max-h-[90%] w-auto h-auto object-contain"
            />
          </div>

          {captionArray[1] && (
            <figcaption className="text-(--text-caption-color) page-nav-size absolute left-0 bottom-[-40px] transform -translate-y-full">
              {captionArray[1]}
            </figcaption>
          )}
        </figure>

        {/* <pic3> */}
        <figure
          className="
            col-span-1 row-span-1
            lg:col-span-1 lg:row-span-2
            h-[130px] md:h-[130px] lg:h-[290px] relative"
          style={{ backgroundColor: bgcolor }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <LightboxImage
              src={srcArray[2]}
              alt={altArray[2] || ""}
              className="max-w-[90%] max-h-[90%] w-auto h-auto object-contain"
            />
          </div>

          {captionArray[2] && (
            <figcaption className="text-(--text-caption-color) page-nav-size absolute left-0 bottom-[-40px] transform -translate-y-full">
              {captionArray[2]}
            </figcaption>
          )}
        </figure>
      </div>
    </div>
  );
}
