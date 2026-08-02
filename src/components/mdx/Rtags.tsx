type RtagsProps = {
  researchMethods: string;
  intro: string;
  contributorMe: string;
  contributorOthers: string;
};

export default function Rtags({ researchMethods, intro, contributorMe, contributorOthers }: RtagsProps) {
  return (
    <ul
      className=" 
        text-[10px] leading-[15px] col-span-2 row-span-2
        md:col-span-4 md:col-start-2 md:row-span-3 
        lg:col-span-6 lg:col-start-2 lg:row-span-1
        3xl:col-span-1 4xl:col-start-3 4xl:row-span-5

        grid gap-x-[24px] gap-y-[30px] grid-cols-2
        lg:grid-cols-4"
    >
      <li
        className="
          col-span-2 row-span-1
          lg:col-span-1 lg:row-span-1
          bg-black text-white"
        dangerouslySetInnerHTML={{ __html: researchMethods }}
      />
      <li
        className="
          hidden col-span-1 row-span-1
          lg:block"
        dangerouslySetInnerHTML={{ __html: intro }}
      />
      <li
        className="
          col-span-1 row-span-1"
        dangerouslySetInnerHTML={{ __html: contributorMe }}
      />
      <li
        className="
          col-start-2 col-span-1 row-span-1
          lg:col-start-4"
        dangerouslySetInnerHTML={{ __html: contributorOthers }}
      />
    </ul>
  );
}
