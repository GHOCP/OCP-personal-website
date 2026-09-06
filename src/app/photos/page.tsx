import PhotoPageClient from "@/components/PhotoPageClient";
import { getArticles } from "@/lib/reader";

export default function ResearchPage() {
  const articles = getArticles("photos");

  return (
    <main
      id="top"
      className="min-h-screen relative responsive-padding-1 bg-(--background-photos) scroll-smooth"
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
            d="M29.0386 23.5865C38.4965 15.3879 50.8335 10.4211 64.3346 10.4211C94.1084 10.4211 118.245 34.5506 118.245 64.3159C118.245 77.7624 113.305 90.0473 105.158 99.4887L128.962 121.962L123.668 127.556L99.7208 104.947C90.2499 113.197 77.8829 118.21 64.3346 118.21C34.5606 118.21 10.4242 94.081 10.4242 64.3159C10.4242 50.8187 15.3924 38.4853 23.5933 29.0301L0 5.44361L5.4452 0L29.0386 23.5865ZM64.3346 18.1204C38.8141 18.1204 18.1257 38.8028 18.1257 64.3159C18.1257 89.8287 38.8141 110.511 64.3346 110.511C89.8549 110.511 110.543 89.8287 110.543 64.3159C110.543 38.8028 89.8549 18.1204 64.3346 18.1204ZM64.3346 41.2181C77.095 41.2181 87.4389 51.5593 87.4389 64.3159C87.4389 77.0726 77.095 87.4134 64.3346 87.4134C51.5743 87.4134 41.2301 77.0726 41.2301 64.3159C41.2301 51.5593 51.5743 41.2181 64.3346 41.2181ZM64.3346 48.9174C55.8277 48.9174 48.9316 55.8115 48.9316 64.3159C48.9316 72.8202 55.8277 79.7142 64.3346 79.7142C72.8414 79.7142 79.7374 72.8202 79.7374 64.3159C79.7374 55.8115 72.8414 48.9174 64.3346 48.9174Z"
            fill="white"
          />
        </svg>
      </div>

      <PhotoPageClient articles={articles} />
    </main>
  );
}