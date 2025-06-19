import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, Linkedin } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-secondary rounded-2xl shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Logo & About */}
          <div className="col-span-full xl:col-span-2 flex flex-col gap-3 items-start">
            <Link href="/" className="flex items-center gap-4 font-bold mb-2">
              <span className="w-200 h-200 rounded-full overflow-hidden bg-black flex items-center justify-center shadow-xl border-2 border-blue-200">
                <Image
                  src="/logo_black.png"
                  alt="Ecocee Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </span>
              <span className="text-3xl font-extrabold text-blue-700 tracking-tight">
                Ecocee
              </span>
            </Link>
            <p className="text-base text-muted-foreground mt-2 font-medium">
              MSME Registered | Embedded, IoT & AI Solutions
            </p>
           
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-1">Contact</h3>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-700" />
              <a
                href="mailto:info@ecocee.in"
                className="opacity-80 hover:opacity-100 transition"
              >
                info@ecocee.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-pink-600" />
              <a
                href="https://instagram.com/ecocee.offical"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition"
              >
                @ecocee.offical
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <a
                href="https://www.linkedin.com/company/ecocee"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition"
              >
                Ecocee
              </a>
            </div>
          </div>

           {/* Legal & Careers */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-1">Legal</h3>
            <Link
              href="/privacy-policy"
              className="opacity-60 hover:opacity-100"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="opacity-60 hover:opacity-100"
            >
              Terms &amp; Conditions
            </Link>
            <Link href="/careers" className="opacity-60 hover:opacity-100">
              Careers
            </Link>
          </div>

          {/* Help */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-1">Help</h3>
            <Link href="/contact" className="opacity-60 hover:opacity-100">
              Contact Us
            </Link>
            <Link href="/faq" className="opacity-60 hover:opacity-100">
              FAQ
            </Link>
            <Link href="#" className="opacity-60 hover:opacity-100">
              Feedback
            </Link>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-1">Socials</h3>
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-pink-600" />
              <a
                href="https://instagram.com/ecocee.offical"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition"
              >
                Instagram
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <a
                href="https://www.linkedin.com/company/ecocee"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-700" />
              <a
                href="mailto:info@ecocee.in"
                className="opacity-80 hover:opacity-100 transition"
              >
                Email
              </a>
            </div>
          </div>

         
        </div>

        <Separator className="my-8" />
        <section className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
              MSME Registered
            </span>
            <span className="text-gray-500 text-xs">| UDYAM-KL-07-*****</span>
          </div>
          <h3 className="text-sm text-muted-foreground mt-2 md:mt-0">
            &copy; 2025-26 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/cyberkutti-iedc"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Ecocee
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
