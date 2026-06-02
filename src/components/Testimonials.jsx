import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Sarah Mitchell", role: "Homeowner, California", text: "Our energy bill dropped by 90% the very first month. The team was professional from start to finish.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" },
  { name: "David Chen", role: "CEO, GreenTech Inc.", text: "Lumina Solar powered our entire campus. ROI in under 4 years — best investment we've made.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" },
  { name: "Maria Rodriguez", role: "Homeowner, Texas", text: "Smooth installation and amazing support. Highly recommend them to anyone going solar.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B]">Testimonials</span>
          <h2 className="mt-3 text-3xl font-bold text-[#1E3A8A] sm:text-4xl">What Our Customers Say</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-[#F59E0B]/30" />
              <div className="flex gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={r.img} alt={r.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-[#1E3A8A]">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}