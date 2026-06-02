
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#1E3A8A] shadow-md">
            <img
              src="https://i.pinimg.com/1200x/07/bd/8e/07bd8ef8c2bcc2fdae27aa9813f8d802.jpg"
              alt="Lumina Solar Logo"
              className="h-full w-full object-cover"
            />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-[#1E3A8A]">
              Lumina Solar
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
              Clean Energy Solutions
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#1E3A8A]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#F59E0B] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-[#d97706]"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#1E3A8A] hover:bg-gray-100 md:hidden"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A]"
              >
                {l.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-[#F59E0B] px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}