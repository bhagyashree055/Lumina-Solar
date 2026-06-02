import { Home, Award, Smile, Zap } from "lucide-react";

const stats = [
  { icon: Home, value: "10,000+", label: "Installations" },
  { icon: Award, value: "25", label: "Years Experience" },
  { icon: Smile, value: "98%", label: "Customer Satisfaction" },
  { icon: Zap, value: "500 MW", label: "Energy Generated" },
];

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] transition-colors group-hover:bg-[#F59E0B] group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <div className="mt-4 text-3xl font-bold text-[#1E3A8A]">{value}</div>
              <div className="mt-1 text-sm font-medium text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}