import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-background text-foreground py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-white">E</span>
              </div>
              <span className="font-semibold text-white">Ecocee</span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              AI and Edge Computing Research Startup in Kerala, India.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/ecocee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/ecocee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@ecocee.in"
                className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products & Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#systems-architecture"
                  className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Systems Architecture
                </a>
              </li>
              <li>
                <a
                  href="/#engineering-domains"
                  className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Engineering Domains
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Research & Technology */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Research
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#research"
                  className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Research Initiatives
                </a>
              </li>
              <li>
                <a
                  href="/#infrastructure-vision"
                  className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Infrastructure Vision
                </a>
              </li>
              <li>
                <a
                  href="/ideas"
                  className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Ideas
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/Team"
                  className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Engineering</p>
                <a
                  href="mailto:engineering@ecocee.in"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                 info@ecocee.in
                </a>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              <a
                href="/privacy-policy"
                className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="/niti"
                className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
              >
                Policies
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-400 md:text-right">
              &copy; {currentYear} Ecocee. All rights reserved.
            </div>
          </div>

          {/* Developed By */}
          <div className="text-xs text-gray-500 border-t border-gray-800 pt-6">
            <p>
              Developed by{" "}
              <a
                href="https://github.com/cyberkutti-iedc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                Ecocee Engineering
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
