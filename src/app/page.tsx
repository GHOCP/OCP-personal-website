import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-(--background-grey-1) responsive-padding-1 h-full">
      <section className="relative grid-system">
        {/* Title */}
        <header
          className="
            col-start-1 col-span-2 row-start-1 row-span-1
            text-black page-title-font text-[55px] leading-[60px] md:text-[64px] md:leading-[80px] lg:text-[60px] lg:leanding-[80px] z-10"
        >
          <h1>Ouchngpui</h1>
        </header>

        {/* Writing */}
        <div
          className="
            relative bg-(--background-writing) group overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-2
            col-start-1 col-span-1 row-start-3 row-span-1
            md:col-start-5 md:col-span-1 md:row-start-1 md:row-span-1
            lg:col-start-5 lg:col-span-1 lg:row-start-1 lg:row-span-1
            xl:col-start-5 xl:col-span-1 xl:row-start-1 xl:row-span-1
            2xl:col-start-7 2xl:col-span-2 2xl:row-start-1 2xl:row-span-2
            flex items-center justify-center z-10"
        >
          <svg
            className="w-99/100 h-99/100 object-contain
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

        {/* Research */}
        <div
          className="relative bg-(--background-research)
          group overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-2
          col-start-2 col-span-1 row-start-3 row-span-1
          md:col-start-6 md:col-span-1 md:row-start-1 md:row-span-1
          lg:col-start-6 lg:col-span-1 lg:row-start-1 lg:row-span-1
          xl:col-start-6 xl:col-span-1 xl:row-start-1 xl:row-span-1
          2xl:col-start-9 2xl:col-span-2 2xl:row-start-1 2xl:row-span-2
          flex items-center justify-center z-10"
        >
          <Link href="/research">
            <svg
              className="w-99/100 h-99/100 object-contain
              transition-all duration-500 ease-out
              group-hover:scale-105
              group-hover:-translate-y-2
              group-hover:translate-x-2"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68 54.3438L117.172 5.17187L122.828 10.8282L73.6562 60H128V68H68V128H60V73.6562L10.8282 122.828L5.17187 117.172L54.3438 68H0V60H60V0H68V54.3438Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        {/* Photos */}
        <div
          className="relative bg-(--background-photos)
          group overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-2 
          col-start-1 col-span-1 row-start-4 row-span-1
          md:col-start-5 md:col-span-1 md:row-start-2 md:row-span-1
          lg:col-start-5 lg:col-span-1 lg:row-start-2 lg:row-span-1
          xl:col-start-5 xl:col-span-1 xl:row-start-2 xl:row-span-1
          2xl:col-start-7 2xl:col-span-2 2xl:row-start-3 2xl:row-span-2
          flex items-center justify-center z-10"
        >
          <Link href="/photos">
            <svg
              className="w-99/100 h-99/100 object-contain
              transition-all duration-500 ease-out
              group-hover:scale-105
              group-hover:-translate-y-2
              group-hover:translate-x-2"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0386 23.5865C38.4965 15.3879 50.8335 10.4211 64.3346 10.4211C94.1084 10.4211 118.245 34.5506 118.245 64.3159C118.245 77.7624 113.305 90.0473 105.158 99.4887L128.962 121.962L123.668 127.556L99.7208 104.947C90.2499 113.197 77.8829 118.21 64.3346 118.21C34.5606 118.21 10.4242 94.081 10.4242 64.3159C10.4242 50.8187 15.3924 38.4853 23.5933 29.0301L0 5.44361L5.4452 0L29.0386 23.5865ZM64.3346 18.1204C38.8141 18.1204 18.1257 38.8028 18.1257 64.3159C18.1257 89.8287 38.8141 110.511 64.3346 110.511C89.8549 110.511 110.543 89.8287 110.543 64.3159C110.543 38.8028 89.8549 18.1204 64.3346 18.1204ZM64.3346 41.2181C77.095 41.2181 87.4389 51.5593 87.4389 64.3159C87.4389 77.0726 77.095 87.4134 64.3346 87.4134C51.5743 87.4134 41.2301 77.0726 41.2301 64.3159C41.2301 51.5593 51.5743 41.2181 64.3346 41.2181ZM64.3346 48.9174C55.8277 48.9174 48.9316 55.8115 48.9316 64.3159C48.9316 72.8202 55.8277 79.7142 64.3346 79.7142C72.8414 79.7142 79.7374 72.8202 79.7374 64.3159C79.7374 55.8115 72.8414 48.9174 64.3346 48.9174Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        {/* Design */}
        <div
          className="relative bg-(--background-design) 
          group overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-2
          col-start-2 col-span-1 row-start-4 row-span-1
          md:col-start-6 md:col-span-1 md:row-start-2 md:row-span-1
          lg:col-start-6 lg:col-span-1 lg:row-start-2 lg:row-span-1
          xl:col-start-6 xl:col-span-1 xl:row-start-2 xl:row-span-1
          2xl:col-start-9 2xl:col-span-2 2xl:row-start-3 2xl:row-span-2
          flex items-center justify-center z-10"
        >
          <svg
            className="w-99/100 h-99/100 object-contains
              transition-all duration-500 ease-out
              group-hover:scale-105
              group-hover:-translate-y-2
              group-hover:translate-x-2"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.866 0C95.555 0 114.287 8.42391 127.833 22.0272L125.312 24.5554L122.792 27.0765C110.528 14.7616 93.5856 7.15152 74.866 7.15152C41.9232 7.15152 14.4828 30.741 8.39733 61.9961C20.8653 37.9139 45.9424 21.4545 74.866 21.4545C95.555 21.4545 114.287 29.8785 127.833 43.4817L125.312 46.0099L122.792 48.5311C110.528 36.2162 93.5856 28.6061 74.866 28.6061C41.9232 28.6061 14.4828 52.1955 8.39733 83.4503C20.8653 59.3685 45.9424 42.9091 74.866 42.9091C95.555 42.9091 114.287 51.333 127.833 64.9363L125.312 67.4644L122.792 69.9856C110.528 57.6707 93.5856 50.0606 74.866 50.0606C37.4564 50.0606 7.1301 80.4781 7.1301 118H0C0 110.543 1.1013 103.345 3.11942 96.5455H0C0 89.0886 1.1013 81.8906 3.11942 75.0909H0C0 33.6194 33.5186 0 74.866 0Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Words */}
        <div
          className="text-black leading-2.5 text-[8px] 2xl:text-[14px] 2xl:leading-4.5
          col-start-1 col-span-2 row-start-5 row-span-2
          md:col-start-3 md:col-span-2 md:row-start-3 md:row-span-1
          lg:col-start-3 lg:col-span-2 lg:row-start-3 lg:row-span-1
          xl:col-start-3 xl:col-span-2 xl:row-start-3 xl:row-span-1
          2xl:col-start-3 2xl:col-span-4 2xl:row-start-5 2xl:row-span-1 z-10"
        >
          <p>
            The new epoch calls for a more humane society, one that defies the
            mechanization of corporal nature and blind, arrogant agency. New
            human beings search for both deep contemplation and fleshly
            sensation of dynamics. Establishing the unity between understanding
            the world and free self-expression through every possible form is
            what makes a world of Equality. &quot;Equality,&quot; someone spoke
            the word. We must be better through creation. That’s the only
            answer.
          </p>
        </div>

        {/* Logo */}
        <div
          className="
          absolute bottom-5 -right-10 z-99 overflow-hidden opacity-100"
        >
          <svg
            className="w-[200px] h-[200px]"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 19.5H4.5V11.5H5V19.5ZM19.5 19.5H10.5V18.5H19.5V19.5ZM13.75 11.5C13.75 13.0188 14.9812 14.25 16.5 14.25C18.0188 14.25 19.25 13.0188 19.25 11.5H19.75C19.75 13.295 18.295 14.75 16.5 14.75C14.705 14.75 13.25 13.295 13.25 11.5H13.75ZM19.6768 10.3232L19.3232 10.6768L17.8232 9.17676L18.1768 8.82324L19.6768 10.3232ZM10.5 0C13.4016 0 16.0288 1.17792 17.9287 3.08008L17.5752 3.43359L17.2217 3.78613C15.5016 2.06412 13.1254 1 10.5 1C5.25329 1 1 5.25329 1 10.5H0C0 4.70101 4.70101 0 10.5 0ZM16.5 5.5C17.6046 5.5 18.5 6.39543 18.5 7.5C18.5 8.60457 17.6046 9.5 16.5 9.5C15.3954 9.5 14.5 8.60457 14.5 7.5C14.5 6.39543 15.3954 5.5 16.5 5.5ZM16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9C17.3284 9 18 8.32843 18 7.5C18 6.67157 17.3284 6 16.5 6ZM16.5 6.5C17.0523 6.5 17.5 6.94772 17.5 7.5C17.5 8.05228 17.0523 8.5 16.5 8.5C15.9477 8.5 15.5 8.05228 15.5 7.5C15.5 6.94772 15.9477 6.5 16.5 6.5ZM16.5 7C16.2239 7 16 7.22386 16 7.5C16 7.77614 16.2239 8 16.5 8C16.7761 8 17 7.77614 17 7.5C17 7.22386 16.7761 7 16.5 7ZM15.1768 5.82324L14.8232 6.17676L13.3232 4.67676L13.6768 4.32324L15.1768 5.82324Z"
              fill="black"
            />
          </svg>
        </div>
      </section>
    </main>
  );
}
