type TextTwoColsOneRowProps = {
  string_1: string;
  string_2: string;
};

export default function TextTwoColsOneRow({ string_1, string_2 }: TextTwoColsOneRowProps) {
  return (
    <div
      className=" 
        col-span-2 row-span-4
        md:col-span-4 md:col-start-2 md:row-span-3 

        lg:col-span-6 lg:col-start-2 lg:row-span-1
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5
        grid grid-cols-2 gap-x-[24px]"
    >
      <p
        className="col-span-1 row-span-1 text-[14px] leading-[20px] whitespace-pre-wrap"
        dangerouslySetInnerHTML={{
          __html: string_1.replace(/\r?\n/g, "<br/>"),
        }}
      />
      <p
        className="col-span-1 row-span-1 text-[14px] leading-[20px] whitespace-pre-wrap"
        dangerouslySetInnerHTML={{
          __html: string_2.replace(/\r?\n/g, "<br/>"),
        }}
      />
    </div>
  );
}
