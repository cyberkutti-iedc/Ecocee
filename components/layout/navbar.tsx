"use client";

import React, { useState } from "react";
import { Contact2Icon, Menu } from "lucide-react";
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

// 🧠 Clerk Components
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

// Interface for routes and features
interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  { href: "/#services", label: "Services" },
  { href: "/Team", label: "Team" },
  { href: "/#contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
  { href: "/careers", label: "Careers" },
];

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
    description: "Experienced professionals dedicated to your success.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[95%] md:w-[80%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card/90 backdrop-blur-xl">
      {/* Logo Section */}
      <Link href="/" className="font-bold text-2xl flex items-center gap-2 tracking-tight bg-gradient-to-r from-green-600 via-blue-600 to-violet-600 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif' }}>
        ECOCEE
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
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card/95 border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
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
                    className="justify-start text-base rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
              {/* Mobile Auth Buttons */}
              <div className="mt-2">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button size="sm" variant="outline" className="w-full rounded-xl">
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <SignOutButton>
                    <Button size="sm" variant="outline" className="w-full mt-2 rounded-xl">
                      Sign Out
                    </Button>
                  </SignOutButton>
                </SignedIn>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {/* Features Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`
              bg-card text-base font-semibold rounded-xl px-4 py-2 transition-all
              hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50
              dark:hover:bg-gradient-to-r dark:hover:from-green-900 dark:hover:to-blue-900
              text-gray-900 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-green-400
            `}>
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-6 p-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-black dark:bg-gray-900 rounded-2xl flex items-center justify-center w-48 h-48">
                    <Image
                      src="/logo.png"
                      alt="My Logo"
                      className="w-36 h-36 object-contain"
                      width={192}
                      height={192}
                    />
                  </div>
                  <span className="mt-4 text-lg font-bold bg-gradient-to-r from-green-600 via-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-green-300 dark:via-blue-400 dark:to-violet-400">Ecocee</span>
                </div>
                <ul className="flex flex-col gap-4">
                  {featureList.map(({ title, description }, idx) => (
                    <li
                      key={title}
                      className="rounded-xl p-4 bg-gradient-to-br from-blue-50 via-green-50 to-violet-50 dark:from-gray-900 dark:via-green-950 dark:to-blue-950 hover:from-blue-100 hover:to-green-100 dark:hover:from-gray-800 dark:hover:to-green-900 shadow group transition-all duration-200 border border-transparent hover:border-blue-200 dark:hover:border-green-700"
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`inline-block w-3 h-3 rounded-full ${idx === 0 ? "bg-green-400 dark:bg-green-600" : idx === 1 ? "bg-blue-400 dark:bg-blue-600" : "bg-violet-400 dark:bg-violet-600"}`}></span>
                        <p className="font-semibold text-base text-foreground group-hover:text-blue-700 dark:text-green-200 dark:group-hover:text-blue-300">{title}</p>
                      </div>
                      <p className="line-clamp-2 text-muted-foreground text-sm group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-300">{description}</p>
                    </li>
                  ))}
                  <li className="rounded-xl p-4 bg-gradient-to-br from-green-50 via-blue-50 to-violet-50 dark:from-gray-900 dark:via-blue-950 dark:to-violet-950 shadow border border-dashed border-green-200 dark:border-green-700 flex items-center gap-2 mt-2">
                    <Contact2Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-green-700 dark:text-green-300">Talk to our experts for a custom solution!</span>
                  </li>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Route Links */}
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href}
                  className={`
                    text-base px-3 py-2 rounded-xl font-medium transition-all
                    hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50
                    dark:hover:bg-gradient-to-r dark:hover:from-green-900 dark:hover:to-blue-900
                    text-gray-900 dark:text-gray-100
                    focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-green-400
                  `}
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Additional Actions - Desktop */}
      <div className="hidden lg:flex items-center gap-2">
        <ToggleTheme />
        <SignedOut>
          <SignInButton mode="modal">
            <Button size="sm" variant="outline" className="rounded-xl">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
};
