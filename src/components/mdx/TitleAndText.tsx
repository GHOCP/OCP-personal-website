type TitleAndTextProps = {
  titles: string;
  texts: string;
};

export default function TitleAndText({
  titles = "",
  texts = "",
}: TitleAndTextProps) {
  const titlesArr = titles.split('&&&').filter((s): s is string => !!s); 
  const textsArr = texts.split('&&&').filter((s): s is string => !!s); 

  return (
    <ul
      className=" 
        col-span-1 row-span-1
        md:col-span-4 md:col-start-2 md:row-span-3 

        lg:col-span-6 lg:col-start-2 lg:row-span-1
        3xl:col-span-1 4xl:col-start-3 4xl:row-span-5
        grid 
        lg:grid-cols-4 lg:gap-x-[24px]"
    >
      {titlesArr.map((title, index) => (
        <li key={title} className="col-span-1 row-span-1 border-2">
          <span className="block lg:text-[30px] lg:leading-[40px] 3xl:text-[80px] 3xl:leading-[100px]">
            {title}
          </span>
          <span className="block lg:text-[10px] lg:leading-[15px] 3xl:text-[80px] 3xl:leading-[100px]">
            {textsArr[index] || ""}
          </span>
        </li>
      ))}
    </ul>
  );
}
