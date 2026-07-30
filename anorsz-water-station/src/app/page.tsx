export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-[#08182b]">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark blue video overlay */}
        <div className="absolute inset-0 bg-[#071c3c]/70" />

        {/* Subtle purple brand overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#681761]/30 via-transparent to-[#071c3c]/30" />

        {/* Temporary hero content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-end px-5 pb-16 pt-32 sm:px-8 md:pb-20 lg:px-12 lg:pb-24 xl:px-16">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-cyan-200">
              Anors.Z Global Water Station
            </p>

            <h1 className="text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Pure water solutions for healthier communities
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Advanced water purification technology delivering clean, safe
              and affordable drinking water for schools, businesses,
              institutions, communities and homes.
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-white px-5 py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="text-4xl font-semibold text-[#10243e]">
            Test the header scroll effect
          </h2>
        </div>
      </section>
    </main>
  );
}