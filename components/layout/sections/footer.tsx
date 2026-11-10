
import Link from "next/link";
import Image from "next/image";

const footerGroups = [
  {
    title: "Products",
    links: [
      { label: "Mero", href: "/mero" },
      { label: "Dotpaper", href: "/dotpaper" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "AI & Intelligence", href: "/#capabilities" },
      { label: "Software", href: "/#capabilities" },
      { label: "Embedded Systems", href: "/#capabilities" },
      { label: "Cloud Infrastructure", href: "/#capabilities" },
      { label: "IoT & Connected Systems", href: "/#capabilities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "mailto:info@ecocee.in" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

export const FooterSection = () => {
  // Static value to keep the homepage prerenderable.
  const currentYear = 2026;

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-14 border-b border-white/15 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Ecocee homepage"
              className="mb-7 inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Ecocee"
                width={160}
                height={40}
                className="h-16 w-auto brightness-0 invert lg:h-20"
              />
            </Link>

            <p className="mb-8 max-w-sm text-sm leading-7 text-white/50">
              Engineering intelligent products across AI, software,
              embedded systems and connected technologies.
            </p>

            <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">
              Bits that Build the Future.
            </p>
          </div>

          {/* Navigation groups */}
          {footerGroups.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="mb-6 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                {group.title}
              </h3>

              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
              Get in touch
            </h3>

            <a
              href="mailto:info@ecocee.in"
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              info@ecocee.in
            </a>

            <p className="mt-6 max-w-[180px] text-sm leading-7 text-white/40">
              Kerala, India
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {currentYear} Ecocee. All rights reserved.
          </p>

          <div className="flex items-center gap-7">
            <a
              href="https://www.linkedin.com/company/ecocee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:info@ecocee.in"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Email
            </a>

            <Link
              href="/"
              className="text-xs text-white/45 transition-colors hover:text-white"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
