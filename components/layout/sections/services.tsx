import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Embedded Hardware Development",
    description: "Customized embedded hardware solutions designed to meet your needs.",
    pro: ProService.NO,
  },
  {
    title: "IoT Solutions",
    description: "Innovative IoT solutions to foster business growth.",
    pro: ProService.NO,
  },
  {
    title: "App Development",
    description: "Tailored mobile and web applications for modern businesses.",
    pro: ProService.NO,
  },
  {
    title: "Artificial Intelligence (AI) Integration",
    description: "AI-powered solutions to enhance productivity and efficiency.",
    pro: ProService.YES,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Expert Solutions for Your Business
      </h2>
      
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We provide tailored solutions in embedded hardware, IoT, AI, and app development to empower businesses and enhance efficiency.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            {pro === ProService.YES && (
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-3"
              >
                PRO
              </Badge>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
