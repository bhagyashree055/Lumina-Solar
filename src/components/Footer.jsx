export default function Footer() {
  return (
    <footer className="bg-[#0f1e4d] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E3A8A] text-xl">
                ☀️
              </span>

              <div>
                <div className="text-lg font-bold text-white">
                  Lumina Solar
                </div>
                <div className="text-[11px] uppercase tracking-wider text-gray-400">
                  Clean Energy Solutions
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              Powering homes and businesses with reliable, affordable solar
              energy since 1999.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-[#F59E0B] hover:text-white"
              >
                Facebook
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-[#F59E0B] hover:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-[#F59E0B] hover:text-white"
              >
                Twitter
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-[#F59E0B] hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3 text-sm">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-[#F59E0B]"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>

            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Residential Solar",
                "Commercial Solar",
                "Solar Maintenance",
                "Battery Storage",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="hover:text-[#F59E0B]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>

            <ul className="mt-5 space-y-3 text-sm">
              <li>📍 123 Solar Way, San Francisco, CA</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ hello@luminasolar.com</li>
            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Lumina Solar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}