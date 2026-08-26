import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export const FooterSection = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-14 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Ecocee"
                width={1200}
                height={300}
                className="h-16 w-auto invert dark:invert-0 object-contain"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
              Built in Kerala. Serving businesses worldwide.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/ecocee", label: "LinkedIn" },
                { icon: Mail, href: "mailto:info@ecocee.in", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wider">Capabilities</h3>
            <ul className="space-y-2.5">
              {[
                { label: "AI Business Automation", href: "/#solutions" },
                { label: "Private AI Systems", href: "/#solutions" },
                { label: "Edge AI & IoT", href: "/#solutions" },
                { label: "Hardware Integration", href: "/#solutions" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Team", href: "/about#team" },
                { label: "Careers", href: "/careers" },
                { label: "FAQ", href: "/#faq" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@ecocee.in" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150">
                  info@ecocee.in
                </a>
              </li>
              <li>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Kodungallur, Kerala, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Policies", href: "/niti" },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Ecocee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
