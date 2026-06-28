import Image from "next/image";

type FigureProps = {
  srcs: string;
  alts?: string;
  captions?: string;
  bgcolor: string;
};

export default function FigureWithBgThreeCols({ srcs = "", alts = "", captions = "", bgcolor }: FigureProps) {
  const srcArray = srcs.split('&&&').filter((s): s is string => !!s);
  const altArray = alts?.split('&&&').filter((s): s is string => !!s);
  const captionArray = captions?.split('&&&').filter((s): s is string => !!s);
  return (
    <ul
      className="
        col-span-1 row-span-1
        md:col-span-4 md:col-start-2 md:row-span-3 

        lg:col-span-6 lg:col-start-2 lg:row-span-2
        3xl:col-span-1 4xl:col-start-3 4xl:row-span-5
        grid 
        lg:grid-cols-3 lg:gap-x-[24px]"
    >
      {srcArray.map((src, index) => (
        <li key={src} className="">
          <figure
            className="relative col-span-1 row-span-2 h-full flex items-center justify-center"
            style={{ backgroundColor: bgcolor }}
          >
            <div className="grid place-items-center">
              <Image
                src={src}
                alt={altArray[index] || ""}
                width={800}
                height={600}
                className="w-9/10 mx-auto object-contain block"
              />
            </div>

            {captionArray[index] && (
              <figcaption className="text-(--text-caption-color) text-[14px] leading-[14px] absolute left-0 bottom-[-28px] transform -translate-y-full">
                {captionArray[index]}
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}
