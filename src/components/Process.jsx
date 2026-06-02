const steps = [
  { n: "01", title: "Consultation", desc: "Free site survey and energy assessment." },
  { n: "02", title: "Design", desc: "Custom system design with 3D modeling." },
  { n: "03", title: "Installation", desc: "Professional install in as little as one day." },
  { n: "04", title: "Support", desc: "Ongoing monitoring, maintenance and care." },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B]">Our Process</span>
          <h2 className="mt-3 text-3xl font-bold text-[#1E3A8A] sm:text-4xl">How It Works</h2>
        </div>
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute top-8 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-[#1E3A8A] via-[#F59E0B] to-[#1E3A8A] md:block" />
          {steps.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1E3A8A] text-lg font-bold text-white ring-8 ring-gray-50">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#1E3A8A]">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}