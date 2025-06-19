import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, IndentIncreaseIcon, GroupIcon, Scale3DIcon } from "lucide-react";

interface BenefitsProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: IndentIncreaseIcon,
    title: "Boost Efficiency",
    description: "Optimize workflows and cut down on expenses.",
  },
  {
    icon: LineChart,
    title: "Enhance Productivity",
    description: "Make informed decisions with data-driven insights.",
  },
  {
    icon: GroupIcon,
    title: "Improve Customer Experiences",
    description: "Provide personalized and engaging interactions.",
  },
  {
    icon: Scale3DIcon,
    title: "Scale with Flexibility",
    description: "Expand and adapt seamlessly with our tailored solutions.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider uppercase font-semibold">
            Benefits
          </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
            Unlock Your Business&apos;s True Potential
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-justify">
            Partnering with us unlocks the true potential of your business. Our
            bespoke solutions improve efficiency, productivity, and customer
            engagement, giving you a distinct competitive edge. With our
            innovative strategies, you can scale effortlessly, stay ahead in your
            industry, and achieve your business objectives.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 w-full">
          {benefitList.map(
            ({ icon: IconComponent, title, description }, index) => (
              <Card
                key={title}
                className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-0 shadow-2xl hover:shadow-[0_8px_40px_rgba(80,80,200,0.15)] transition-all duration-300 group rounded-2xl overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-indigo-400/30 rounded-full blur-2xl opacity-60 pointer-events-none" />
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 shadow-lg mb-4 border-4 border-white dark:border-slate-900">
                      <IconComponent
                        width={36}
                        height={36}
                        color="#fff"
                        className="text-white drop-shadow-lg"
                      />
                    </div>
                    <span className="text-5xl text-muted-foreground/10 font-black transition-all duration-200 group-hover:text-muted-foreground/30 select-none">
                      0{index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-extrabold text-blue-900 dark:text-white tracking-tight">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-base font-medium pb-6">
                  <span className="block">{description}</span>
                </CardContent>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-40" />
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

