import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbff] px-4 py-8 sm:px-6 md:py-12">
      <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#571553] via-[#8d1c77] to-[#1769aa] px-6 py-16 text-center text-white shadow-2xl sm:px-10 md:px-16">
        <div className="mb-6 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
          Pure • Fresh • Safe
        </div>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Anors.Z Global
          <span className="block text-cyan-200">Water Station</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg md:text-xl">
          Advanced water purification solutions providing accessible,
          reliable and safe drinking water for institutions, businesses,
          communities and homes.
        </p>

        <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <button
            type="button"
            className="rounded-full bg-white px-7 py-3.5 font-semibold text-[#681761] transition hover:-translate-y-1 hover:shadow-xl"
          >
            Explore Our Solutions
          </button>

          <button
            type="button"
            className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Make an Enquiry
          </button>
        </div>
      </section>
    </main>
  );
}
