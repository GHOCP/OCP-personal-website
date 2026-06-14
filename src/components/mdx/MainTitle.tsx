
type MainTitleProps = {
  title: string;
  date: string;
};

export default function MainTitle({ title, date }: MainTitleProps) {
  return (
    <div
      className=" 
        col-span-2 col-start-1 row-span-4
        md:col-span-4 md:col-start-2 md:row-span-3 

        lg:col-span-6 lg:col-start-2 lg:row-start-1 lg:row-span-2
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5
        relative
        "
    >
      <h1 className="lg:text-[64px] lg:leading-[80px] 3xl:text-[80px] 3xl:leading-[100px]">
        {title}
      </h1>
      <div className="text-[14px] leading-[20px] absolute left-0 bottom-[-40px] transform -translate-y-full">
        {date}
      </div>
    </div>
  );
}