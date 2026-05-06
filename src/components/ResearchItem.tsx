import { Span } from "next/dist/server/lib/trace/tracer";

type Props = {
  title: string;
  date: string;
  image: string;
  number: number;
};

export default function ResearchItem({ title, date, image, number }: Props) {
  {
    /* Helper Functions */
  }
  const getPicRowStart = (number: number, screenSize: string) => {
    let row;
    switch (screenSize) {
      case "sm":
        row = Math.ceil((number - 1) * 5) + 2;
      case "md":
        row = Math.ceil((number - 1) * 4) + 1;
      case "xl":
        row = Math.ceil((number - 1) * 4) + 1;
      case "2xl":
        row = Math.ceil((number - 1) * 4) + 1;
    }
    return row;
  };

  const getPicRowSpan = (screenSize: string) => {
    let rowSpan;
    switch (screenSize) {
      case "sm":
        rowSpan = 2;
      case "md":
        rowSpan = 2;
      case "xl":
        rowSpan = 2;
      case "2xl":
        rowSpan = 2;
    }
    return rowSpan;
  };

  const getPicColSpan = (screenSize: string) => {
    let colSpan;
    switch (screenSize) {
      case "sm":
        colSpan = 2;
      case "md":
        colSpan = 4;
      case "xl":
        colSpan = 4;
      case "2xl":
        colSpan = 4;
    }
    return colSpan;
  };

  return (
    <div
      className="
      col-span-2 col-start-1 row-span-4
      md:col-span-4 md:col-start-2 md:row-span-3 
      
      grid 
      grid-cols-[repeat(2,1fr)] 
      gap-x-[24px] 
      gap-y-[30px]
      auto-rows-[130px]
     "
    >
      <div
        className="col-span-2 row-span-2 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-20 right-20 text-sm text-white">
          {date}
        </div>
      </div>

      {/* Title */}
      <div className="col-span-2 row-start-3">
        <h2 className="page-semi-title-font text-[35px] leading-[40px] text-white">
          {title}
        </h2>
      </div>
    </div>
  );
}
