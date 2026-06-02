import { BadgeCheck, Gauge, Headphones, DollarSign, Activity, ShieldCheck } from "lucide-react";

const items = [
  { icon: BadgeCheck, title: "Certified Experts", desc: "NABCEP-certified solar professionals." },
  { icon: Gauge, title: "High Efficiency Panels", desc: "Tier-1 panels with 22%+ efficiency." },
  { icon: Headphones, title: "24/7 Support", desc: "Always-on customer care, day or night." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Flexible financing and zero-down options." },
  { icon: Activity, title: "Smart Monitoring", desc: "Real-time performance from your phone." },
  { icon: ShieldCheck, title: "Warranty Protection", desc: "25-year warranty on parts and labor." },
];

export default function Whysolar() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B]">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#1E3A8A] sm:text-4xl">
            The Lumina Solar Advantage
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#1E3A8A]/20 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1E3A8A] text-[#F59E0B]">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1E3A8A]">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        
      </div>
    </section>
  );
}
