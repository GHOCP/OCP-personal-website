// import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black responsive-padding-1">
      <section className="relative grid-system">
        {/* Title */}
        <header className="mb-6 text-white">
          <h1 className="absolute left-0 bottom-full page-title-font text-[40px] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl">
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
          {/* <Image
            src="/head.svg"
            alt="Personal logo"
            fill={false} // Do NOT use fill for SVG
            width={3000} // Any large enough base width
            height={1} // Dummy height (will auto-scale)
            className="w-full h-auto object-contain absolute bottom-0"
            priority
          /> */}
          <svg
            className="w-full h-auto max-w-lg absolute bottom-0 svg-draw"
            viewBox="0 0 273 227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="drawClip">
                <rect
                  className="origin-left animate-[draw-reveal_1.2s_ease-out_forwards]"
                  width="273"
                  height="273"
                />
              </clipPath>
            </defs>

            <g clipPath="url(#drawClip)">
              <path
                d="M50.6942 78.2353C91.6138 78.2353 124.786 111.511 124.786 152.559C124.786 193.607 91.6138 226.882 50.6942 226.882V219.059C87.3065 219.059 116.987 189.286 116.987 152.559C116.987 115.832 87.3065 86.0588 50.6942 86.0588V78.2353ZM179.379 176.029C179.379 199.794 198.584 219.059 222.275 219.059C245.965 219.059 265.17 199.794 265.17 176.029H272.969C272.969 204.114 250.272 226.882 222.275 226.882C194.277 226.882 171.58 204.114 171.58 176.029H179.379ZM271.827 157.616L266.311 163.149L242.914 139.678L248.43 134.145L271.827 157.616ZM159.882 0C204.065 0 244.065 17.9885 273 47.0482L267.484 52.5796C239.954 24.9289 201.913 7.82352 159.882 7.82352C75.8888 7.82352 7.79911 76.1264 7.79911 160.382H0C0 71.8056 71.5815 0 159.882 0ZM222.275 82.147C239.504 82.147 253.471 96.1579 253.471 113.441C253.471 130.725 239.504 144.735 222.275 144.735C205.045 144.735 191.078 130.725 191.078 113.441C191.078 96.1579 205.045 82.147 222.275 82.147ZM222.275 89.9706C209.353 89.9706 198.877 100.479 198.877 113.441C198.877 126.403 209.353 136.912 222.275 136.912C235.196 136.912 245.672 126.403 245.672 113.441C245.672 100.479 235.196 89.9706 222.275 89.9706ZM222.275 97.7941C230.889 97.7941 237.873 104.8 237.873 113.441C237.873 122.083 230.889 129.088 222.275 129.088C213.66 129.088 206.676 122.083 206.676 113.441C206.676 104.8 213.66 97.7941 222.275 97.7941ZM222.275 105.618C217.968 105.618 214.475 109.12 214.475 113.441C214.475 117.761 217.968 121.265 222.275 121.265C226.581 121.265 230.074 117.761 230.074 113.441C230.074 109.12 226.581 105.618 222.275 105.618ZM201.635 87.2048L196.119 92.7364L172.722 69.2658L178.238 63.7342L201.635 87.2048Z"
                fill="black"
                stroke="none"
              />
            </g>
          </svg>
        </div>

        <div
          className="relative bg-(--background-writing)
          group overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-2
          col-start-1 col-span-1 row-start-3 row-span-1
          md:col-start-5 md:col-span-1 md:row-start-1 md:row-span-1
          lg:col-start-5 lg:col-span-1 lg:row-start-1 lg:row-span-1
          xl:col-start-5 xl:col-span-1 xl:row-start-1 xl:row-span-1
          2xl:col-start-7 2xl:col-span-2 2xl:row-start-1 2xl:row-span-2
          flex items-center justify-center"
        >
          {/* <Image
            src="/writing-white.svg"
            alt="Logo of writing"
            fill={false} // Do NOT use fill for SVG
            width={1000} // Any large enough base width
            height={1} // Dummy height (will auto-scale)
            className="w-full h-auto object-contain"
            priority
          /> */}
          <svg
            className="w-full h-auto max-w-lg absolute bottom-0
              transition-all duration-500 ease-out
              group-hover:scale-105
              group-hover:-translate-y-2
              group-hover:translate-x-2"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M128 128H72V120H128V128ZM56 112H0V104H56V112ZM128 76H72V68H128V76ZM56 60H0V52H56V60ZM128 24H72V16H128V24ZM56 8H0V0H56V8Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="relative bg-(--background-research)
          group overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-2
          col-start-2 col-span-1 row-start-3 row-span-1
          md:col-start-6 md:col-span-1 md:row-start-1 md:row-span-1
          lg:col-start-6 lg:col-span-1 lg:row-start-1 lg:row-span-1
          xl:col-start-6 xl:col-span-1 xl:row-start-1 xl:row-span-1
          2xl:col-start-9 2xl:col-span-2 2xl:row-start-1 2xl:row-span-2
          flex items-center justify-center"
        >
          {/* <Image
            src="/research-white.svg"
            alt="Logo of research"
            fill={false} // Do NOT use fill for SVG
            width={1000} // Any large enough base width
            height={1} // Dummy height (will auto-scale)
            className="w-full h-auto object-contain"
            priority
          /> */}
          <svg
            className="w-full h-auto max-w-lg absolute bottom-0
              transition-all duration-500 ease-out
              group-hover:scale-105
              group-hover:-translate-y-2
              group-hover:translate-x-2"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0C19.2797 0 34.9091 15.6293 34.9091 34.9091C34.9091 51.5216 23.3022 65.4107 7.75758 68.9394V128H0V62.0606C14.9954 62.0606 27.1515 49.9045 27.1515 34.9091C27.1515 19.9137 14.9954 7.75758 0 7.75758V0ZM46.5455 46.5455C91.5316 46.5455 128 83.0138 128 128H120.242C120.242 87.2983 87.2471 54.303 46.5455 54.303V46.5455Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="relative bg-(--background-photos)
          group overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-2 
          col-start-1 col-span-1 row-start-4 row-span-1
          md:col-start-5 md:col-span-1 md:row-start-2 md:row-span-1
          lg:col-start-5 lg:col-span-1 lg:row-start-2 lg:row-span-1
          xl:col-start-5 xl:col-span-1 xl:row-start-2 xl:row-span-1
          2xl:col-start-7 2xl:col-span-2 2xl:row-start-3 2xl:row-span-2
          flex items-center justify-center"
        >
          {/* <Image
            src="/photos-white.svg"
            alt="Logo of photos"
            fill={false} // Do NOT use fill for SVG
            width={1000} // Any large enough base width
            height={1} // Dummy height (will auto-scale)
            className="w-full h-auto object-contain"
            priority
          /> */}
          <svg
            className="w-full h-auto max-w-lg absolute bottom-0
              transition-all duration-500 ease-out
              group-hover:scale-105
              group-hover:-translate-y-2
              group-hover:translate-x-2"
            viewBox="0 0 129 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.0386 23.5865C38.4965 15.3879 50.8335 10.4211 64.3346 10.4211C94.1084 10.4211 118.245 34.5506 118.245 64.3159C118.245 77.7624 113.305 90.0473 105.158 99.4887L128.962 121.962L123.668 127.556L99.7208 104.947C90.2499 113.197 77.8829 118.21 64.3346 118.21C34.5606 118.21 10.4242 94.081 10.4242 64.3159C10.4242 50.8187 15.3924 38.4853 23.5933 29.0301L0 5.44361L5.4452 0L29.0386 23.5865ZM64.3346 18.1204C38.8141 18.1204 18.1257 38.8028 18.1257 64.3159C18.1257 89.8287 38.8141 110.511 64.3346 110.511C89.8549 110.511 110.543 89.8287 110.543 64.3159C110.543 38.8028 89.8549 18.1204 64.3346 18.1204ZM64.3346 41.2181C77.095 41.2181 87.4389 51.5593 87.4389 64.3159C87.4389 77.0726 77.095 87.4134 64.3346 87.4134C51.5743 87.4134 41.2301 77.0726 41.2301 64.3159C41.2301 51.5593 51.5743 41.2181 64.3346 41.2181ZM64.3346 48.9174C55.8277 48.9174 48.9316 55.8115 48.9316 64.3159C48.9316 72.8202 55.8277 79.7142 64.3346 79.7142C72.8414 79.7142 79.7374 72.8202 79.7374 64.3159C79.7374 55.8115 72.8414 48.9174 64.3346 48.9174Z"
              fill="white"
            />
          </svg>
        </div>
        
        <div
          className="relative bg-(--background-design) 
          group overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-2
          col-start-2 col-span-1 row-start-4 row-span-1
          md:col-start-6 md:col-span-1 md:row-start-2 md:row-span-1
          lg:col-start-6 lg:col-span-1 lg:row-start-2 lg:row-span-1
          xl:col-start-6 xl:col-span-1 xl:row-start-2 xl:row-span-1
          2xl:col-start-9 2xl:col-span-2 2xl:row-start-3 2xl:row-span-2
          flex items-center justify-center"
        >
          {/* <Image
            src="/design-white.svg"
            alt="Logo of design"
            fill={false} // Do NOT use fill for SVG
            width={1000} // Any large enough base width
            height={1} // Dummy height (will auto-scale)
            className="w-full h-auto object-contain"
            priority
          /> */}
          <svg
            className="w-full h-auto max-w-lg absolute bottom-0
              transition-all duration-500 ease-out
              group-hover:scale-105
              group-hover:-translate-y-2
              group-hover:translate-x-2"
            viewBox="0 0 128 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.866 0C95.555 0 114.287 8.42391 127.833 22.0272L125.312 24.5554L122.792 27.0765C110.528 14.7616 93.5856 7.15152 74.866 7.15152C41.9232 7.15152 14.4828 30.741 8.39733 61.9961C20.8653 37.9139 45.9424 21.4545 74.866 21.4545C95.555 21.4545 114.287 29.8785 127.833 43.4817L125.312 46.0099L122.792 48.5311C110.528 36.2162 93.5856 28.6061 74.866 28.6061C41.9232 28.6061 14.4828 52.1955 8.39733 83.4503C20.8653 59.3685 45.9424 42.9091 74.866 42.9091C95.555 42.9091 114.287 51.333 127.833 64.9363L125.312 67.4644L122.792 69.9856C110.528 57.6707 93.5856 50.0606 74.866 50.0606C37.4564 50.0606 7.1301 80.4781 7.1301 118H0C0 110.543 1.1013 103.345 3.11942 96.5455H0C0 89.0886 1.1013 81.8906 3.11942 75.0909H0C0 33.6194 33.5186 0 74.866 0Z"
              fill="white"
            />
          </svg>
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
