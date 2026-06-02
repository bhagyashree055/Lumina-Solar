const projects = [
  { img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80", title: "Desert Mega Farm", location: "Nevada, USA", capacity: "120 MW", desc: "Utility-scale solar array powering 30,000 homes." },
  { img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80", title: "Coastal Rooftop", location: "California, USA", capacity: "8 kW", desc: "Residential rooftop with battery backup." },
  { img: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80", title: "Corporate HQ", location: "Texas, USA", capacity: "2.4 MW", desc: "Net-zero campus for a Fortune 500 client." },
  { img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80", title: "Mountain Resort", location: "Colorado, USA", capacity: "450 kW", desc: "Off-grid resort powered entirely by sun." },
  { img: "https://jmhpower.com/wp-content/uploads/2024/07/solar-panels-for-school.jpg", title: "School District", location: "Arizona, USA", capacity: "1.1 MW", desc: "Powering 12 schools with clean energy." },
  { img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=800&q=80", title: "Industrial Park", location: "Florida, USA", capacity: "5.6 MW", desc: "Hybrid solar + storage for manufacturing." },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#F59E0B]">Featured Projects</span>
            <h2 className="mt-3 text-3xl font-bold text-[#1E3A8A] sm:text-4xl">Our Recent Installations</h2>
          </div>
          <p className="max-w-md text-gray-600">Real projects, real results — explore the impact of solar across homes, businesses, and utilities.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-gray-500">{p.location}</span>
                  <span className="rounded-full bg-[#F59E0B]/15 px-3 py-1 text-[#b8770a]">{p.capacity}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-[#1E3A8A]">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}