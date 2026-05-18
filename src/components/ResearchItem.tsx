type Props = {
  title: string;
  date: string;
  image: string;
  number: number;
};

export default function ResearchItem({ title, date, image, number }: Props) {
  return (
    <div
      className="
      col-span-2 col-start-1 row-span-4
      md:col-span-4 md:col-start-2 md:row-span-3 
      lg:col-span-4 lg:col-start-2 lg:row-span-3 
      xl:col-span-4 xl:col-start-2 xl:row-span-3 
      2xl:col-span-4 2xl:col-start-2 2xl:row-span-3
      4xl:col-span-8 4xl:col-start-3 4xl:row-span-5  
      grid 
      grid-cols-[repeat(2,1fr)] 
      gap-x-[24px] 
      gap-y-[30px]
      auto-rows-[130px]
     "
    >
      <div
        className="col-span-2 row-span-2 4xl:row-span-3 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-20 right-20 page-date-size text-white">
          {date}
        </div>
      </div>

      {/* Title */}
      <div className="col-span-2 row-start-3 4xl:row-start-4">
        <h2 className="page-semi-title-font page-semi-title-size 4xl:text-[60px] 4xl:leading-[80px] text-white">
          {title}
        </h2>
      </div>
    </div>
  );
}
