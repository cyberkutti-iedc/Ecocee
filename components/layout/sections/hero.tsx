"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
//import { useTheme } from "next-themes";
//import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const router = useRouter();
 // const { theme } = useTheme();

  const handleClick = () => {
    router.push("/ideas"); // Redirect to Ideas Hub
  };

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Discover</Badge>
            </span>
            <span> Cutting-Edge Innovation </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1 className="text-3xl md:text-5xl">
              Drive Progress with
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Ecocee
              </span>
              Solutions
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Experience exceptional solutions crafted by visionary creators and engineers, designed to exceed expectations.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="https://wa.me/+918891325138" target="_blank">
                Contact Us on WhatsApp
              </Link>
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            {/* Animated Idea Hub Button */}
            <Button
              onClick={handleClick}
              className="relative w-5/6 md:w-1/4 font-bold text-white px-6 py-3 rounded-lg 
                         shadow-lg transition-all duration-300 transform hover:scale-105 
                         bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500
                         before:absolute before:inset-0 before:bg-white/10 before:blur-lg before:opacity-0 
                         hover:before:opacity-100 before:transition-opacity
                         after:absolute after:inset-0 after:w-full after:h-full after:bg-gradient-to-r
                         after:from-transparent after:via-white/30 after:to-transparent after:opacity-0
                         after:hover:opacity-100 after:transition-opacity after:duration-700"
            >
              Idea Hub 🚀
            </Button>
          </div>
        </div>

        {/* <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
            src={
              theme === "light"
                ? "/hero-image-light.jpg"
                : "/hero-image-dark.jpg"
            }
            alt="Ecocee Solutions Dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div> */}
      </div>
    </section>
  );
};
