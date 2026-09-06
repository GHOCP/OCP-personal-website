import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  date: string;
  image: string;
};

export default function PhotoItem({ slug, title, date, image }: Props) {
  return (
    <Link
      href={`/photos/${slug}`}
      className="
        row-span-2
        md:col-span-4 md:col-start-2 md:row-span-3 
        lg:col-span-4 lg:col-start-2 lg:row-span-3 
        xl:col-span-2 xl:row-span-1 
        2xl:col-span-4 2xl:col-start-2 2xl:row-span-3
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5
        xl:grid xl:grid-cols-[repeat(2,1fr)]"
    >
      <div
        className="col-span-2 row-span-2 3xl:row-span-3 relative bg-cover bg-center h-[130px] xl:col-span-1"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="
          absolute bottom-20 left-1 text-white
          text-[14px] leading-[20px]"
        >
          {title}
        </div>
        <div className="absolute bottom-0 left-1 page-date-size text-white">
          {date}
        </div>
      </div>
    </Link>
  );
}
