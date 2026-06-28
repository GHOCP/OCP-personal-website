type TextTwoColTwoRowsProps = {
  content: string;
};

export default function TextTwoColTwoRows({ content }: TextTwoColTwoRowsProps) {
  return (
    <div
      className=" 
        col-span-2 row-span-4
        md:col-span-4 md:col-start-2 md:row-span-3 

        lg:col-span-6 lg:col-start-2 lg:row-span-2
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5"
    >
      <p
        className="columns-2 text-[14px] leading-[20px] whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: content.replace(/\r?\n/g, "<br/>") }}
      />
    </div>
  );
}
