type SemiTitleProps = {
  title: string;
};

export default function SemiTitle({ title }: SemiTitleProps) {
  return (
    <div
      className=" 
        col-span-2 row-span-4
        md:col-span-4 md:col-start-2 md:row-span-3 

        lg:col-span-6 lg:col-start-2 lg:row-span-1
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5"
    >
      <h2 className="lg:text-[35px] lg:leading-[40px] 3xl:text-[80px] 3xl:leading-[100px]">
        {title}
      </h2>
    </div>
  );
}
