import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1E3A8A]/90 via-[#1E3A8A]/75 to-black/70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40 lg:py-48">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-flex items-center rounded-full bg-[#F59E0B]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F59E0B] ring-1 ring-[#F59E0B]/40">
            #1 Solar Energy Provider
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Powering a Sustainable Future with{" "}
            <span className="text-[#F59E0B]">Solar Energy</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Clean, reliable, and affordable solar solutions for homes and
            businesses. Cut your energy bills and your carbon footprint.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#d97706]"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
            >
              <PlayCircle className="h-5 w-5" /> Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
