import { Home, Building2, Wrench, BatteryCharging, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Solar", desc: "Custom rooftop solar systems for homes of every size." },
  { icon: Building2, title: "Commercial Solar", desc: "Scalable solar power for businesses and industries." },
  { icon: Wrench, title: "Solar Maintenance", desc: "Keep your system running at peak efficiency year-round." },
  { icon: BatteryCharging, title: "Battery Storage", desc: "Store solar power and stay powered 24/7." },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B]">Our Services</span>
          <h2 className="mt-3 text-3xl font-bold text-[#1E3A8A] sm:text-4xl">Complete Solar Solutions</h2>
          <p className="mt-4 text-gray-600">From homes to enterprises, we deliver end-to-end solar services.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-[#F59E0B]/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1E3A8A] text-[#F59E0B] transition-transform group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#1E3A8A]">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-gray-300 transition-colors group-hover:text-[#F59E0B]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}