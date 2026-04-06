export default function Home() {
  return (
    <main className="min-h-screen bg-black responsive-padding-1">
      <section className="relative grid-system">
        {/* Title */}
        <header className="mb-6 text-white">
          <h1 className="absolute left-0 bottom-full page-title-font text-6xl">
            Ouchngpui
          </h1>
        </header>
        {/* Main Grid */}
        <div className="bg-(--background-grey-1) col-start-3 col-span-2 row-start-1 row-span-2 flex items-center justify-center"></div>

        <div className="bg-(--background-writing) col-start-5 col-span-1 row-start-1 row-span-1 flex items-center justify-center"></div>
        <div className="bg-(--background-research) col-start-6 col-span-1 row-start-1 row-span-1 flex items-center justify-center"></div>
        <div className="bg-(--background-photos) col-start-5 col-span-1 row-start-2 row-span-1 flex items-center justify-center"></div>
        <div className="bg-(--background-design) col-start-6 col-span-1 row-start-2 row-span-1 flex items-center justify-center"></div>

        <div className="text-[#D0D0D0] leading-2.5 text-[8px] col-start-3 col-span-2 row-start-3 row-span-1">
          <p>
            The new epoch calls for a more humane society, one that defies the
            mechanization of corporal nature. New human beings search for static
            contemplation and the fleshly sensation of dynamics. We must
            establish the unity between understanding the world and free
            self-expression through every possible form.
            &quot;Equality.&quot; Someone spoke the word. We must be better through
            creation. That’s the only answer.
          </p>
        </div>
      </section>
    </main>
  );
}
