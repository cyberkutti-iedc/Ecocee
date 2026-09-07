import Link from "next/link";
import Image from "next/image";

export const FooterSection = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-16 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="Ecocee"
                width={160}
                height={40}
                className="h-24 lg:h-28 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              Technology company building intelligent products across AI, software and connected systems.
            </p>
            <p className="text-xs text-gray-600">
              Kodungallur, Kerala, India
            </p>
          </div>

          {/* Work */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">Work</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Ordato", href: "/#work" },
                { label: "Adara", href: "/#work" },
                { label: "Navicentra", href: "/#work" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">Capabilities</h3>
            <ul className="space-y-2.5">
              {[
                { label: "AI & Intelligence", href: "/#capabilities" },
                { label: "Software", href: "/#capabilities" },
                { label: "Embedded", href: "/#capabilities" },
                { label: "Cloud", href: "/#capabilities" },
                { label: "IoT", href: "/#capabilities" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "mailto:info@ecocee.in" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms", href: "/terms-and-conditions" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} Ecocee Technologies.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/ecocee" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:info@ecocee.in" className="text-xs text-gray-600 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
