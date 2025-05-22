"use client";

import React, { useState } from "react";
import {  Contact2Icon, Menu} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { ToggleTheme } from "./toogle-theme";


// Interface for routes and features
interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

// Route list for navigation
const routeList: RouteProps[] = [
  { href: "/#services", label: "Services" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
];

// Feature list for dropdown
const featureList: FeatureProps[] = [
  {
    title: "Innovative Approach",
    description: "Cutting-edge solutions to drive business growth.",
  },
  {
    title: "Cost-Effective",
    description: "Affordable solutions without compromising quality.",
  },
  {
    title: "Expert Team",
    description:
      "Experienced professionals dedicated to your success.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      {/* Logo Section */}
      <Link href="/" className="font-bold text-lg flex items-center">
        
        Ecocee
      </Link>

      {/* Mobile Navigation */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    Ecocee
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {/* Features Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4 ">
              <Image
    src="/logo.png" // Assuming your logo is named logo.png
    alt="My Logo"
    className="h-full w-full rounded-md object-contain bg-black p-4 rounded-md"
    width={600}
    height={600}
  />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Route Links */}
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Additional Actions */}
      <div className="hidden lg:flex items-center">
        <ToggleTheme />
        <Button asChild size="sm" variant="ghost" aria-label="Chat on WhatsApp">
          <Link
            aria-label="Chat on WhatsApp"
            href="/login"
            target="_blank"
          >
            <Contact2Icon className="size-5"/>
          </Link>
        </Button>
      </div>
    </header>
  );
};
