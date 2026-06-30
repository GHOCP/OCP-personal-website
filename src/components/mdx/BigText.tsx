"use client";

import { motion } from "framer-motion";
import React from "react";

type BigTextProps = {
  children: React.ReactNode;
};

export default function BigText({ children }: BigTextProps) {
  return (
    <motion.div
      className="
        col-span-6 row-span-4
        md:col-span-4 md:col-start-2 md:row-span-3
        lg:col-span-6 lg:col-start-2 lg:row-span-1
        3xl:col-span-8 4xl:col-start-3 4xl:row-span-5

        lg:text-[64px] lg:leading-[80px]
        3xl:text-[80px] 3xl:leading-[100px]
      "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 1 }}
      // transition={{ duration: 2, ease: "easeIn" }}
      transition={{
        type: "spring",
        stiffness: 30,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}


// type BigTextProps = {
//   content: string;
// };

// export default function BigText({ content }: BigTextProps) {
//   return (
//     <p
//       className="
//         col-span-6 row-span-4
//         md:col-span-4 md:col-start-2 md:row-span-3
//         lg:col-span-6 lg:col-start-2 lg:row-span-1
//         3xl:col-span-8 4xl:col-start-3 4xl:row-span-5

//         lg:text-[64px] lg:leading-[80px]
//         3xl:text-[80px] 3xl:leading-[100px]
//       "
//     >
//       {content}
//     </p>
//   );
// }
{
  /* <BigText content="What social interaction ways can help people in different stages of dementia to cope with memory loss?" />; */
}

// import react from "react";

// type BigTextProps = {
//   children: react.ReactNode;
// };

// export default function BigText({ children }: BigTextProps) {
//   return (
//     <div
//       className="
//         col-span-6 row-span-4
//         md:col-span-4 md:col-start-2 md:row-span-3
//         lg:col-span-6 lg:col-start-2 lg:row-span-1
//         3xl:col-span-8 4xl:col-start-3 4xl:row-span-5

//         lg:text-[64px] lg:leading-[80px]
//         3xl:text-[80px] 3xl:leading-[100px]
//       "
//     >
//       {children}
//     </div>
//   );
// }

{
  /* <BigText>
  What <span className="text-[#00825A]">social interaction ways</span> can help
  people in <span className="text-[#FF7F00]">different stages of dementia</span>{" "}
  to cope with <span className="text-[#DA4453]">memory loss</span>?
</BigText>; */
}
