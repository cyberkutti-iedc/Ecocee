// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Lightbulb } from "lucide-react";
// import { useRouter } from "next/navigation";

// export const HeroSection = () => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push("/ideas");
//   };

//   const handleBookOrder = () => {
//     router.push("/bookings");
//   };

//   const t = {
//     badge1: "Consulting & Solutions",
//     badge2: "for Embedded, IoT & AI",
//     headline1: "Have an Embedded Idea?",
//     headline2: "Let's Build It Together",
//     desc: "Ecocee offers expert consulting, product development, and custom solutions in Embedded Systems, IoT, and AI. Whether you need a prototype, a full product, or technical guidance—our team is ready to help you turn your vision into reality.",
//     bookOrder: "Book Your First Order",
//     ideas: "Get a new Idea",
//     why: "Why Choose Ecocee?",
//     whyList: [
//       "End-to-end embedded & IoT product development",
//       "Rapid prototyping & proof-of-concept services",
//       "Custom hardware, firmware, and cloud integration",
//       "Consulting for startups, enterprises, and innovators",
//       "Trusted by leading institutions and businesses in India",
//     ],
//     cta: "Have an embedded idea?",
//     consult: "Consult Now",
//   };

//   return (
//     <section className="relative w-full max-w-full overflow-hidden">
//       {/* Container with proper padding */}
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[85vh] sm:min-h-[75vh] py-8 sm:py-12 lg:py-24 gap-8 lg:gap-12">
          
//           {/* Left: Text Content */}
//           <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
            
//             {/* Badge */}
//             <div className="w-full flex justify-center lg:justify-start">
//               <Badge
//                 variant="outline"
//                 className="text-xs sm:text-sm py-2 px-4 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-sm font-bold backdrop-blur-md transition-colors duration-300"
//               >
//                 <span className="mr-2 font-semibold animate-pulse text-blue-700 dark:text-green-400">
//                   {t.badge1}
//                 </span>
//                 <span className="font-semibold text-gray-900 dark:text-white">{t.badge2}</span>
//               </Badge>
//             </div>

//             {/* Main Headline */}
//             <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white drop-shadow-lg max-w-4xl">
//               <span className="block mb-2">{t.headline1}</span>
//               <span className="block bg-gradient-to-r from-blue-700 via-green-400 to-violet-600 bg-clip-text text-transparent dark:from-green-400 dark:via-blue-400 dark:to-violet-400 font-black tracking-tight">
//                 {t.headline2}
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 font-medium bg-white/60 dark:bg-gray-900/60 rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-md backdrop-blur-md">
//               {t.desc}
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start items-stretch sm:items-center">
//               <Button
//                 className="w-full sm:w-auto font-bold flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-blue-700 to-green-400 hover:from-green-400 hover:to-blue-700 dark:from-green-700 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-green-700 text-white shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
//                 onClick={handleBookOrder}
//               >
//                 <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 {t.bookOrder}
//               </Button>
//               <Button
//                 className="w-full sm:w-auto font-bold flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 dark:from-violet-700 dark:to-pink-700 dark:hover:from-pink-700 dark:hover:to-violet-700 text-white shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
//                 onClick={handleClick}
//               >
//                 <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                 {t.ideas}
//               </Button>
//             </div>

//             {/* Why Ecocee Section */}
//             <div className="w-full max-w-2xl mt-6 sm:mt-8">
//               <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 shadow-lg px-4 sm:px-6 py-4 sm:py-5 text-left backdrop-blur-md">
//                 <h2 className="text-base sm:text-lg font-bold text-blue-700 dark:text-green-400 mb-3">{t.why}</h2>
//                 <ul className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-200 text-xs sm:text-sm lg:text-base">
//                   {t.whyList.map((item, idx) => (
//                     <li key={idx} className="flex items-start gap-2 sm:gap-3">
//                       <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
//                       <span className="leading-relaxed">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Right: Logo/Illustration */}
//           <div className="flex-1 w-full flex items-center justify-center max-w-lg mx-auto lg:mx-0 order-1 lg:order-2">
//             <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 max-w-full">
//               <div
//                 className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800
//                   bg-gradient-to-br 
//                   from-green-400 via-blue-500 to-violet-600
//                   dark:from-gray-900 dark:via-blue-900 dark:to-violet-900
//                   flex items-center justify-center relative cursor-pointer transition-all duration-500 hover:scale-105"
//               >
//                 <img
//                   src="/logo.webp"
//                   alt="Ecocee Embedded Solutions"
//                   className="w-4/5 h-4/5 object-contain object-center transition-transform duration-500 hover:scale-110 drop-shadow-2xl"
//                   loading="eager"
//                 />
                
//                 {/* Overlay for extra visual appeal */}
//                 <div className="absolute inset-0 pointer-events-none">
//                   <div className="w-full h-full bg-gradient-to-tr from-orange-400/20 via-blue-400/20 to-violet-400/20 dark:from-blue-900/20 dark:via-green-900/20 dark:to-violet-900/20 rounded-3xl" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

    
//       <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-white/30 to-green-50/50 dark:from-gray-900/30 dark:via-gray-950/30 dark:to-black/30" />
//         <div className="absolute top-[-60px] left-[-60px] sm:top-[-100px] sm:left-[-100px] w-48 h-48 sm:w-72 sm:h-72 bg-blue-300/20 dark:bg-green-900/20 rounded-full blur-2xl sm:blur-3xl" />
//         <div className="absolute bottom-[-60px] right-[-60px] sm:bottom-[-100px] sm:right-[-100px] w-48 h-48 sm:w-72 sm:h-72 bg-green-300/20 dark:bg-blue-900/20 rounded-full blur-2xl sm:blur-3xl" />
//       </div>

//       {/* Bottom padding to account for mobile CTA bar */}
//       <div className="h-16 lg:hidden" />
//     </section>
//   );
// };


"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Sparkles, Download } from "lucide-react";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/ideas");
  };

  const handleBookOrder = () => {
    router.push("/bookings");
  };

  const handleKuttaiClick = () => {
    // Navigate to Kuttai product page or external link
    router.push("/kuttai");
    // Alternatively: window.open("https://github.com/ecocee/kuttai", "_blank");
  };

  const t = {
    badge1: "Consulting & Solutions",
    badge2: "for Embedded, IoT & AI",
    headline1: "Have an Embedded Idea?",
    headline2: "Let's Build It Together",
    desc: "Ecocee offers expert consulting, product development, and custom solutions in Embedded Systems, IoT, and AI. Whether you need a prototype, a full product, or technical guidance—our team is ready to help you turn your vision into reality.",
    bookOrder: "Book Your First Order",
    ideas: "Get a new Idea",
    why: "Why Choose Ecocee?",
    whyList: [
      "End-to-end embedded & IoT product development",
      "Rapid prototyping & proof-of-concept services",
      "Custom hardware, firmware, and cloud integration",
      "Consulting for startups, enterprises, and innovators",
      "Trusted by leading institutions and businesses in India",
    ],
    cta: "Have an embedded idea?",
    consult: "Consult Now",
    newProduct: "New Product Launched",
    kuttaiTitle: "Kuttai - CLI AI Chatbot",
    kuttaiDesc: "Offline, Open Source, and Free CLI AI chatbot for developers",
    kuttaiCta: "Download Now",
  };

  return (
    <section className="relative w-full max-w-full overflow-hidden">
      {/* New Product Banner */}
    
    <div className="w-full bg-gradient-to-r from-violet-700 via-purple-600 to-violet-800 dark:from-violet-900 dark:via-purple-900 dark:to-violet-950 text-white py-3 px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 relative overflow-hidden mt-10">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-15">
    <div className="absolute top-0 left-0 w-20 h-20 bg-violet-300 rounded-full filter blur-xl animate-pulse"></div>
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-300 rounded-full filter blur-xl animate-pulse delay-1000"></div>
  </div>
  
  <div className="flex items-center gap-2 z-10">
    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 border border-violet-300/30">
      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-violet-200 animate-pulse" />
      <span className="font-bold text-sm sm:text-base text-white">{t.newProduct}</span>
    </div>
  </div>
  
  <div className="flex items-center gap-3 z-10 flex-wrap justify-center">
    <span className="font-semibold text-sm sm:text-base bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 border border-violet-200/20 text-white">
      {t.kuttaiTitle}
    </span>
    <div className="flex gap-2">
      <Badge variant="secondary" className="text-xs bg-violet-500/90 text-white border-0 font-bold px-2">
        OFFLINE
      </Badge>
      <Badge variant="secondary" className="text-xs bg-violet-600/90 text-white border-0 font-bold px-2">
        OPEN SOURCE
      </Badge>
      <Badge variant="secondary" className="text-xs bg-violet-700/90 text-white border-0 font-bold px-2">
        FREE
      </Badge>
    </div>
  </div>
  
  <Button 
    onClick={handleKuttaiClick}
    className="text-xs sm:text-sm py-2 h-9 bg-white text-violet-700 hover:bg-violet-50 font-bold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all z-10 border-0"
  >
    <Download className="w-4 h-4" />
    Download Now
  </Button>
</div>

      {/* Container with proper padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[85vh] sm:min-h-[75vh] py-8 sm:py-12 lg:py-24 gap-8 lg:gap-12">
          
          {/* Left: Text Content */}
          <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
            
            {/* Badge */}
            <div className="w-full flex justify-center lg:justify-start">
              <Badge
                variant="outline"
                className="text-xs sm:text-sm py-2 px-4 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-sm font-bold backdrop-blur-md transition-colors duration-300"
              >
                <span className="mr-2 font-semibold animate-pulse text-blue-700 dark:text-green-400">
                  {t.badge1}
                </span>
                <span className="font-semibold text-gray-900 dark:text-white">{t.badge2}</span>
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white drop-shadow-lg max-w-4xl">
              <span className="block mb-2">{t.headline1}</span>
              <span className="block bg-gradient-to-r from-blue-700 via-green-400 to-violet-600 bg-clip-text text-transparent dark:from-green-400 dark:via-blue-400 dark:to-violet-400 font-black tracking-tight">
                {t.headline2}
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 font-medium bg-white/60 dark:bg-gray-900/60 rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-md backdrop-blur-md">
              {t.desc}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start items-stretch sm:items-center">
              <Button
                className="w-full sm:w-auto font-bold flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-blue-700 to-green-400 hover:from-green-400 hover:to-blue-700 dark:from-green-700 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-green-700 text-white shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                onClick={handleBookOrder}
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {t.bookOrder}
              </Button>
              <Button
                className="w-full sm:w-auto font-bold flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 dark:from-violet-700 dark:to-pink-700 dark:hover:from-pink-700 dark:hover:to-violet-700 text-white shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                onClick={handleClick}
              >
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {t.ideas}
              </Button>
            </div>

            {/* Why Ecocee Section */}
            <div className="w-full max-w-2xl mt-6 sm:mt-8">
              <div className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 shadow-lg px-4 sm:px-6 py-4 sm:py-5 text-left backdrop-blur-md">
                <h2 className="text-base sm:text-lg font-bold text-blue-700 dark:text-green-400 mb-3">{t.why}</h2>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 dark:text-gray-200 text-xs sm:text-sm lg:text-base">
                  {t.whyList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Logo/Illustration */}
          <div className="flex-1 w-full flex items-center justify-center max-w-lg mx-auto lg:mx-0 order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 max-w-full">
              <div
                className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800
                  bg-gradient-to-br 
                  from-green-400 via-blue-500 to-violet-600
                  dark:from-gray-900 dark:via-blue-900 dark:to-violet-900
                  flex items-center justify-center relative cursor-pointer transition-all duration-500 hover:scale-105"
              >
                <img
                  src="/logo.webp"
                  alt="Ecocee Embedded Solutions"
                  className="w-4/5 h-4/5 object-contain object-center transition-transform duration-500 hover:scale-110 drop-shadow-2xl"
                  loading="eager"
                />
                
                {/* Overlay for extra visual appeal */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-tr from-orange-400/20 via-blue-400/20 to-violet-400/20 dark:from-blue-900/20 dark:via-green-900/20 dark:to-violet-900/20 rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-white/30 to-green-50/50 dark:from-gray-900/30 dark:via-gray-950/30 dark:to-black/30" />
        <div className="absolute top-[-60px] left-[-60px] sm:top-[-100px] sm:left-[-100px] w-48 h-48 sm:w-72 sm:h-72 bg-blue-300/20 dark:bg-green-900/20 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-60px] sm:bottom-[-100px] sm:right-[-100px] w-48 h-48 sm:w-72 sm:h-72 bg-green-300/20 dark:bg-blue-900/20 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      {/* Bottom padding to account for mobile CTA bar */}
      <div className="h-16 lg:hidden" />
    </section>
  );
};