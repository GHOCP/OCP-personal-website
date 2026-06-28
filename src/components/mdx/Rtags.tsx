type RtagsProps = {
  researchMethods: string;
  // intro: string;
  contributorMe: string;
  contributorOthers: string;
};

export default function Rtags({ researchMethods, contributorMe, contributorOthers }: RtagsProps) {
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
      <li 
        className="lg:text-[10px] lg:leading-[15px] 3xl:text-[80px] 3xl:leading-[100px] col-span-1 row-span-1 bg-black text-white"
        dangerouslySetInnerHTML={{ __html: researchMethods }}
      />
      {/* <p 
        className="lg:text-[10px] lg:leading-[15px] 3xl:text-[80px] 3xl:leading-[100px] col-span-1 row-span-1"
        dangerouslySetInnerHTML={{ __html: intro }}
      /> */}
      <li 
        className="lg:text-[10px] lg:leading-[15px] 3xl:text-[80px] 3xl:leading-[100px] col-span-1 row-span-1"
        dangerouslySetInnerHTML={{ __html: contributorMe }}
      />
      <li
        className="lg:text-[10px] lg:leading-[15px] 3xl:text-[80px] 3xl:leading-[100px] col-span-1 row-span-1"
        dangerouslySetInnerHTML={{ __html: contributorOthers }}
      />
    </ul>
  );
}
