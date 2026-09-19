import Link from "next/link";

type EndingProps = {
  backLink?: string;
  color?: string;
};

export default function Ending({ 
  backLink,
  color, 
}: EndingProps) {
  const getBackLabel = () => {
    if (!backLink) return "Research";
    const stripped = backLink.replace(/^\//, "");
    return stripped.charAt(0).toUpperCase() + stripped.slice(1);
  };

  return (
    <div
      className="
        col-span-2 row-span-1
        md:col-span-4 md:col-start-2 md:row-span-1
        lg:col-span-6 lg:col-start-2 lg:row-span-1 
        3xl:col-span-12 3xl:col-start-3 3xl:row-span-5
        relative"
    >
      <h2
        className="
          font-medium text-[32px] leading-[40px]
          md:text-[35px] md:leading-[40px]
          lg:text-[35px] lg:leading-[40px]
          3xl:text-[80px] 3xl:leading-[100px] "
      >
        Telos.
      </h2>
      <Link
        href={backLink ?? "/research"}
        className="absolute left-1 page-nav-size text-(--background-research) top-[-40px]"
        style={{ color }}
      >
        {`< - Back to ${getBackLabel()}  -`}
      </Link>
    </div>
  );
}
