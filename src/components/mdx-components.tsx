import FigureWithBg from "./mdx/FigureWithBg";
import MainTitle from "./mdx/MainTitle";
import SemiTitle from "./mdx/SemiTitle";
import Divider from "./mdx/Divider";
import TextTwoCol from "./mdx/TextTwoCol";
import Rtags from "./mdx/Rtags";
import TitleAndText from "./mdx/TitleAndText";

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className=" 
        col-span-2 col-start-1 row-span-4
        md:col-span-4 md:col-start-2 md:row-span-3 

        lg:col-span-6 lg:col-start-2 lg:row-start-1 lg:row-span-2
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5
        
        lg:text-[64px] lg:leading-[80px]
        3xl:text-[80px] 3xl:leading-[100px]

      "
      {...props}
    />
  ),

  Divider,
  MainTitle,
  FigureWithBg,
  SemiTitle,
  TextTwoCol,
  Rtags,
  TitleAndText,
};
