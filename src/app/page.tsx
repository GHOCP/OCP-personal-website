import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black responsive-padding-1">
      <section className="relative grid-system">
        {/* Title */}
        <header className="mb-6 text-white">
          <h1 className="absolute left-0 bottom-full page-title-font text-[40px] md:text-4xl lg:text-5xl xl:text-6xl">
            Ouchngpui
          </h1>
        </header>
        {/* Main Grid */}
        <div
          className="relative bg-(--background-grey-1) 
          col-start-1 col-span-2 row-start-1 row-span-2 
          md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-2
          lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-2
          xl:col-start-3 xl:col-span-2 xl:row-start-1 xl:row-span-2
          2xl:col-start-3 2xl:col-span-4 2xl:row-start-1 2xl:row-span-4
          flex items-center justify-center"
        >
          <Image
            src="/head.svg"
            alt="Personal logo"
            fill={false} // Do NOT use fill for SVG
            width={3000} // Any large enough base width
            height={1} // Dummy height (will auto-scale)
            className="w-full h-auto object-contain absolute bottom-0"
            priority
          />
        </div>

        <div
          className="relative bg-(--background-writing)
          col-start-1 col-span-1 row-start-3 row-span-1
          md:col-start-5 md:col-span-1 md:row-start-1 md:row-span-1
          lg:col-start-5 lg:col-span-1 lg:row-start-1 lg:row-span-1
          xl:col-start-5 xl:col-span-1 xl:row-start-1 xl:row-span-1
          2xl:col-start-7 2xl:col-span-2 2xl:row-start-1 2xl:row-span-2
          flex items-center justify-center"
        >
          <Image
            src="/writing-white.svg"
            alt="Logo of writing"
            fill={false} // Do NOT use fill for SVG
            width={1000} // Any large enough base width
            height={1} // Dummy height (will auto-scale)
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div
          className="bg-(--background-research)
          col-start-2 col-span-1 row-start-3 row-span-1
          md:col-start-6 md:col-span-1 md:row-start-1 md:row-span-1
          lg:col-start-6 lg:col-span-1 lg:row-start-1 lg:row-span-1
          xl:col-start-6 xl:col-span-1 xl:row-start-1 xl:row-span-1
          2xl:col-start-9 2xl:col-span-2 2xl:row-start-1 2xl:row-span-2
          flex items-center justify-center"
        >
          {" "}
          <Image
            src="/research-white.svg"
            alt="Logo of research"
            fill={false} // Do NOT use fill for SVG
            width={1000} // Any large enough base width
            height={1} // Dummy height (will auto-scale)
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div
          className="bg-(--background-photos) 
          col-start-1 col-span-1 row-start-4 row-span-1
          md:col-start-5 md:col-span-1 md:row-start-2 md:row-span-1
          lg:col-start-5 lg:col-span-1 lg:row-start-2 lg:row-span-1
          xl:col-start-5 xl:col-span-1 xl:row-start-2 xl:row-span-1
          2xl:col-start-7 2xl:col-span-2 2xl:row-start-3 2xl:row-span-2
          flex items-center justify-center"
        >
          {" "}
          <Image
            src="/photos-white.svg"
            alt="Logo of photos"
            fill={false} // Do NOT use fill for SVG
            width={1000} // Any large enough base width
            height={1} // Dummy height (will auto-scale)
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <div
          className="bg-(--background-design) 
          col-start-2 col-span-1 row-start-4 row-span-1
          md:col-start-6 md:col-span-1 md:row-start-2 md:row-span-1
          lg:col-start-6 lg:col-span-1 lg:row-start-2 lg:row-span-1
          xl:col-start-6 xl:col-span-1 xl:row-start-2 xl:row-span-1
          2xl:col-start-9 2xl:col-span-2 2xl:row-start-3 2xl:row-span-2
          flex items-center justify-center"
        >
          {" "}
          <Image
            src="/design-white.svg"
            alt="Logo of design"
            fill={false} // Do NOT use fill for SVG
            width={1000} // Any large enough base width
            height={1} // Dummy height (will auto-scale)
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div
          className="text-[#6A6A6A] leading-2.5 text-[8px] 2xl:text-[14px] 2xl:leading-4.5
          col-start-1 col-span-2 row-start-5 row-span-1
          md:col-start-3 md:col-span-2 md:row-start-3 md:row-span-1
          lg:col-start-3 lg:col-span-2 lg:row-start-3 lg:row-span-1
          xl:col-start-3 xl:col-span-2 xl:row-start-3 xl:row-span-1
          2xl:col-start-3 2xl:col-span-4 2xl:row-start-5 2xl:row-span-1"
        >
          <p>
            The new epoch calls for a more humane society, one that defies the
            mechanization of corporal nature. New human beings search for static
            contemplation and the fleshly sensation of dynamics. We must
            establish the unity between understanding the world and free
            self-expression through every possible form. &quot;Equality.&quot;
            Someone spoke the word. We must be better through creation. That’s
            the only answer.
          </p>
        </div>
      </section>
    </main>
  );
}
