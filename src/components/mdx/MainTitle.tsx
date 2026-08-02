import Link from "next/link";

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
        col-span-2 row-span-2
        md:col-span-4 md:col-start-2 md:row-span-2
        lg:col-span-6 lg:col-start-2 lg:row-span-2
        3xl:col-span-12 4xl:col-start-3 4xl:row-s pan-3
        relative
      "
    >
      <h1
        className="
          text-[45px] leading-[50px] font-medium
          md:text-[45px] md:leading-[50px]
          lg:text-[70px] lg:leading-[80px] 
          3xl:text-[80px] 3xl:leading-[100px]
        "
        id={id}
        data-toc={toc}
      >
        {title}
      </h1>

      <Link
        href="/research"
        className="
          absolute left-1 page-nav-size text-(--background-research)
          top-[-40px] md:top-[-30px]"
      >
        &lt; - Back to Research -
      </Link>

      <div
        className="
        page-nav-size
        absolute left-0 bottom-[-40px] transform -translate-y-full"
      >
        {date}
      </div>
    </div>
  );
}
