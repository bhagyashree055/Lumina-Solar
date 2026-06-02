export default function About() {
  const features = [
    {
      title: "Eco-Friendly",
      desc: "Reduce your carbon footprint with clean renewable energy.",
    },
    {
      title: "Save Money",
      desc: "Cut monthly electricity bills by up to 80%.",
    },
    {
      title: "25-Year Warranty",
      desc: "Premium panels backed by long-term protection.",
    },
    {
      title: "Increase Property Value",
      desc: "Solar homes sell faster and at higher prices.",
    },
  ];

  return (
    <section id="about" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 items-center">
        
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
            alt="Solar panel installation"
            className="w-full rounded-3xl object-cover shadow-2xl"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-[#F59E0B] p-6 text-white shadow-xl sm:block">
            <div className="text-3xl font-bold">25+</div>
            <div className="text-sm">Years of Excellence</div>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B]">
            About Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#1E3A8A] sm:text-4xl">
            Why Choose Solar Energy?
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Solar energy is the cleanest and most abundant renewable power source available.
            At Lumina Solar, we make the switch simple — from consultation to installation
            and ongoing support — so you can enjoy decades of reliable energy savings.
          </p>

          {/* Feature List WITHOUT ICONS */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {features.map(({ title, desc }) => (
              <div key={title}>
                <h3 className="font-semibold text-[#1E3A8A]">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}