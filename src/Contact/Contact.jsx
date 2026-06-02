import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1E3A8A] py-20 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#F59E0B]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Switch to Solar?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-200">
          Join thousands of happy customers powering their lives with clean,
          affordable solar energy. Get a free, no-obligation consultation today.
        </p>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#d97706]"
        >
          Request Free Consultation <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}