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
        lg:col-span-6 lg:col-start-2 lg:row-span-4
        grid 
        lg:grid-cols-3 lg:gap-x-[24px]"
    >
      {/* <pic1> */}
      <figure
        className="
          relative h-full flex items-center justify-center 
          lg:col-span-2"
        style={{ backgroundColor: bgcolor }}
      >
        <div className="grid place-items-center">
          <LightboxImage
            src={srcArray[0]}
            alt={altArray[0] || ""}
            className="w-9/10 mx-auto object-contain block"
          />
        </div>

        {captionArray[0] && (
          <figcaption className="text-(--text-caption-color) text-[14px] leading-[14px] absolute left-0 bottom-[-28px] transform -translate-y-full">
            {captionArray[0]}
          </figcaption>
        )}
      </figure>

      <div className="lg:col-span-1 grid gap-y-[30px] gap-x-[24px] auto-rows-[130px]">
        {/* <pic2> */}
        <figure
          className="
          relative h-full flex items-center justify-center 
          lg:row-span-2"
          style={{ backgroundColor: bgcolor }}
        >
          <div className="grid place-items-center">
            <LightboxImage
              src={srcArray[1]}
              alt={altArray[1] || ""}
              className="w-9/10 mx-auto object-contain block"
            />
          </div>

          {captionArray[1] && (
            <figcaption className="text-(--text-caption-color) text-[14px] leading-[14px] absolute left-0 bottom-[-28px] transform -translate-y-full">
              {captionArray[1]}
            </figcaption>
          )}
        </figure>

        {/* <pic3> */}
        <figure
          className="
          relative h-full flex items-center justify-center 
          lg:row-span-2"
          style={{ backgroundColor: bgcolor }}
        >
          <div className="grid place-items-center">
            <LightboxImage
              src={srcArray[2]}
              alt={altArray[2] || ""}
              className="w-9/10 mx-auto object-contain block"
            />
          </div>

          {captionArray[2] && (
            <figcaption className="text-(--text-caption-color) text-[14px] leading-[14px] absolute left-0 bottom-[-28px] transform -translate-y-full">
              {captionArray[2]}
            </figcaption>
          )}
        </figure>
      </div>
    </div>
  );
}
