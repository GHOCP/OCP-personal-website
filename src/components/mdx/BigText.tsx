type BigTextProps = {
  content: string;
};

export default function BigText({ content }: BigTextProps) {
  return (
    <p
      className="
        col-span-6 row-span-4
        md:col-span-4 md:col-start-2 md:row-span-3
        lg:col-span-6 lg:col-start-2 lg:row-span-1
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5

        lg:text-[64px] lg:leading-[80px]
        3xl:text-[80px] 3xl:leading-[100px]
      "
    >
      {content}
    </p>
  );
}
