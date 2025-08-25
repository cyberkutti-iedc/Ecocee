import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Group",
    title: "Expert Team",
    description:
      "Our experienced team specializes in delivering innovative, cutting-edge solutions. We stay updated with the latest technologies and trends to ensure exceptional results.",
  },
  {
    icon: "BadgeCheck",
    title: "Customized Solutions",
    description:
      "Every business is unique, which is why we provide tailored solutions that meet your specific needs. Collaborating closely with you, we deliver strategies that drive growth.",
  },
  {
    icon: "Goal",
    title: "Innovative Approach",
    description:
      "We adopt forward-thinking methodologies, leveraging the latest technologies to craft impactful solutions. Our commitment to innovation ensures your business stays ahead.",
  },
  {
    icon: "PictureInPicture",
    title: "Agile Methodology",
    description:
      "Using agile practices, we deliver solutions efficiently and flexibly. Our process focuses on meeting your goals while adapting swiftly to evolving requirements.",
  },
  {
    icon: "MousePointerClick",
    title: "Cost-Effective",
    description:
      "We provide high-quality solutions that balance value and affordability, ensuring impactful outcomes within your budget constraints.",
  },
  {
    icon: "UserPlus",
    title: "Exceptional Support",
    description:
      "We prioritize outstanding support at every stage, from consultation to deployment and beyond, ensuring a seamless and successful experience.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider uppercase font-semibold">
        Features
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
        What Sets Us Apart
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We craft tailored solutions to meet your business&apos;s unique needs. Our
        expert team collaborates closely with you, delivering innovative strategies
        that fuel growth and success.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-2xl overflow-hidden">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-full blur-2xl opacity-60 pointer-events-none" />
              <CardHeader className="flex flex-col justify-center items-center">
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-4 rounded-full shadow-lg mb-4 border-4 border-white dark:border-slate-900">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="#fff"
                    className="text-white drop-shadow-lg"
                  />
                </div>
                <CardTitle className="text-lg font-bold text-blue-900 dark:text-white text-center">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-base font-medium text-center pb-6">
                <span className="block">{description}</span>
              </CardContent>
              {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-40" /> */}
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
