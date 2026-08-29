
type SemiTitleProps = {
  title: string;
  toc?: string;
};

export default function SemiTitle({ title, toc }: SemiTitleProps) {
  const id = toc?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className="
        scroll-mt-8 col-span-2 row-span-1
        md:col-span-4 md:col-start-2 md:row-span-1
        lg:col-span-6 lg:col-start-2 lg:row-span-1 
        3xl:col-span-12 3xl:col-start-3 3xl:row-span-2
        "
    >
      <h2
        id={id}
        data-toc={toc}
        className="
          font-medium text-[32px] leading-[40px]
          md:text-[35px] leading-[40px]
          lg:text-[35px] lg:leading-[40px]
          3xl:text-[90px] 3xl:leading-[100px] 
          relative scroll-mt-[5vh]"
      >
        {title}
      </h2>
    </div>
  );
}

// before:absolute
// before:left-[-64px]
// before:top-[20%]
// before:h-[12px]
// before:w-[19.42px]
// before:bg-black
// before:content-['']