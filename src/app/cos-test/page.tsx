// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function CosTestPage() {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);

//   useEffect(() => {
//     async function loadImage() {
//       const key = "chungking/test-pic.jpg";

//       const response = await fetch(
//         `/api/cos-url?key=${encodeURIComponent(key)}`,
//       );

//       const data = await response.json();

//       setImageUrl(data.url);
//     }

//     loadImage();
//   }, []);

//   return (
//     <main className="p-10">
//       <h1 className="mb-6 text-2xl">COS Test</h1>

//       {imageUrl && (
//         <Image src={imageUrl} alt="COS test image" width={1200} height={800} />
//       )}
//     </main>
//   );
// }

import CosImage from "@/components/CosImage";

export default function CosTestPage() {
  return (
    <main className="p-10">
      <h1 className="mb-6 text-2xl">COS Test</h1>

      <CosImage
        src="chungking/test-pic.jpg"
        alt="COS test image"
        width={1200}
        height={800}
      />
    </main>
  );
}