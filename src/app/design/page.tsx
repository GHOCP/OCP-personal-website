import DesignPageClient from "@/components/DesignPageClient";
import { getArticles } from "@/lib/reader";

export default function ResearchPage() {
  const articles = getArticles("design");

  return (
    <main
      id="top"
      className="min-h-screen relative responsive-padding-1 bg-(--background-design) scroll-smooth"
    >
      <div className="fixed left-2 top-2 w-40 h-40 group z-99">
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
            d="M74.866 0C95.555 0 114.287 8.42391 127.833 22.0272L125.312 24.5554L122.792 27.0765C110.528 14.7616 93.5856 7.15152 74.866 7.15152C41.9232 7.15152 14.4828 30.741 8.39733 61.9961C20.8653 37.9139 45.9424 21.4545 74.866 21.4545C95.555 21.4545 114.287 29.8785 127.833 43.4817L125.312 46.0099L122.792 48.5311C110.528 36.2162 93.5856 28.6061 74.866 28.6061C41.9232 28.6061 14.4828 52.1955 8.39733 83.4503C20.8653 59.3685 45.9424 42.9091 74.866 42.9091C95.555 42.9091 114.287 51.333 127.833 64.9363L125.312 67.4644L122.792 69.9856C110.528 57.6707 93.5856 50.0606 74.866 50.0606C37.4564 50.0606 7.1301 80.4781 7.1301 118H0C0 110.543 1.1013 103.345 3.11942 96.5455H0C0 89.0886 1.1013 81.8906 3.11942 75.0909H0C0 33.6194 33.5186 0 74.866 0Z"
            fill="white"
          />
        </svg>
      </div>

      <DesignPageClient articles={articles} />
    </main>
  );
}