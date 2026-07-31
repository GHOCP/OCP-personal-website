type TextTwoColsNRowsProps = {
  content: string;
  row: 2 | 3 | 4 | 5;
};

export default function TextTwoColsNRows({
  content,
  row,
}: TextTwoColsNRowsProps) {
  const rowSpan = {
    2: "lg:row-span-2",
    3: "lg:row-span-3",
    4: "lg:row-span-4",
    5: "lg:row-span-5",
  }[row];

  return (
    <div
      className={`
        col-span-2 row-span-10
        md:col-span-4 md:col-start-2 md:row-span-3
        lg:col-span-6 lg:col-start-2
        ${rowSpan}
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5
      `}
    >
      <p
        className="h-full columns-1 lg:columns-2 [column-fill:auto] whitespace-pre-wrap page-text"
        dangerouslySetInnerHTML={{
          __html: content.replace(/\r?\n/g, "<br/>"),
        }}
      />
    </div>
  );
}
