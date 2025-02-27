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
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Sets Us Apart
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We craft tailored solutions to meet your business&apos;s unique needs. Our expert team collaborates closely with you, delivering innovative strategies that fuel growth and success.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center text-justify">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
