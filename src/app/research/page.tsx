import ResearchItem from "@/components/ResearchItem";

export default function ResearchPage() {
  return (
    <main className="min-h-screen responsive-padding-1 bg-(--background-research) relative">
      <div className="absolute left-2 top-2 w-30 h-30 overflow-hidden pointer-events-none group">
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

      <section className="grid-system">
        <ResearchItem
          title="In id turpis urna. Pellentesque sodales turpis"
          date="2026-04-20"
          image="/images/placeholderPic.png"
          number={1}
        />

        <ResearchItem
          title="Energy Consumption Behavior"
          date="2026-04-10"
          image="/images/placeholderPic.png"
          number={2}
        />
      </section>
    </main>
  );
}
