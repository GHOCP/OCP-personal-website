type TextTwoColsNRowsProps = {
  content: string;
  row_default: string;
  row_md: string;
  row_lg: string;
};

export default function TextTwoColsNRows({
  content,
  row_default,
  row_md,
  row_lg,
}: TextTwoColsNRowsProps) {
  const row_default_n = Number(row_default);
  const row_md_n = Number(row_md);
  const row_lg_n = Number(row_lg);

  const rowSpan_default = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
    5: "row-span-5",
    6: "row-span-6",
    7: "row-span-7",
    8: "row-span-8",
    9: "row-span-9",
    10: "row-span-10",
  }[row_default_n];

  const rowSpan_md = {
    1: "md:row-span-1",
    2: "md:row-span-2",
    3: "md:row-span-3",
    4: "md:row-span-4",
    5: "md:row-span-5",
    6: "md:row-span-6",
    7: "md:row-span-7",
    8: "md:row-span-8",
    9: "md:row-span-9",
    10: "md:row-span-10",
  }[row_md_n];

  const rowSpan_lg = {
    1: "lg:row-span-1",
    2: "lg:row-span-2",
    3: "lg:row-span-3",
    4: "lg:row-span-4",
    5: "lg:row-span-5",
    6: "lg:row-span-6",
    7: "lg:row-span-7",
    8: "lg:row-span-8",
    9: "lg:row-span-9",
    10: "lg:row-span-10",
  }[row_lg_n];

  return (
    <div
      className={`
        col-span-2 ${rowSpan_default}
        md:col-span-4 md:col-start-2 ${rowSpan_md}
        lg:col-span-6 lg:col-start-2 ${rowSpan_lg}
      `}
    >
      <p
        className="
          h-full
          [column-fill:auto]
          lg:columns-2
          lg:gap-[24px]
          whitespace-pre-wrap
          break-words
          [overflow-wrap:anywhere]
          page-text"
        dangerouslySetInnerHTML={{
          __html: content.replace(/\r?\n/g, "<br/>"),
        }}
      />
    </div>
  );
}
