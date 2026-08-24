import Link from "next/link";

export default function Ending() {
  return (
    <div
      className="
        col-span-2 row-span-1
        md:col-span-4 md:col-start-2 md:row-span-1
        lg:col-span-6 lg:col-start-2 lg:row-span-1 
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5
        relative"
    >
      <h2
        className="
          font-medium text-[32px] leading-[40px]
          md:text-[35px] leading-[40px]
          lg:text-[35px] lg:leading-[40px]
          3xl:text-[80px] 3xl:leading-[100px] "
      >
        Telos.
      </h2>
      <Link
        href="/research"
        className="
          absolute left-1 page-nav-size text-(--background-research)
          top-[-40px] md:top-[-30px]"
      >
        &lt; - Back to Research -
      </Link>
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
