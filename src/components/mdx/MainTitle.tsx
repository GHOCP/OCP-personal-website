
type MainTitleProps = {
  title: string;
  date: string;
  toc?: string;
};

export default function MainTitle({ title, date, toc }: MainTitleProps) {
  const id = toc?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className=" 
        sm:col-span-2 sm:row-span-2
        md:col-span-4 md:col-start-2 md:row-span-2
        lg:col-span-6 lg:col-start-2 lg:row-span-2
        3xl:col-span-12 4xl:col-start-3 4xl:row-span-3
        relative
      "
    >
      <h1
        className="
          font-medium
          sm:tex-[64px] sm:leading-[80px]
          lg:text-[64px] lg:leading-[80px] 
          3xl:text-[80px] 3xl:leading-[100px]
        "
        id={id}
        data-toc={toc}
      >
        {title}
      </h1>
      <div className="
        text-[14px] leading-[20px] 
        absolute left-0 bottom-[-40px] transform -translate-y-full"
      >
        {date}
      </div>
    </div>
  );
}