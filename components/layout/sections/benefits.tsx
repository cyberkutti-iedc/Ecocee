import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { Blocks, LineChart, Wallet, Sparkle, IndentDecrease, IndentIncreaseIcon, IndentIcon, MagnetIcon, Group, GroupIcon, Scale3DIcon } from "lucide-react"; // Import the specific icons

interface BenefitsProps {
  icon: React.ComponentType<any>; // Allow passing a React component with any props
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: IndentIncreaseIcon, // Use the actual icon component
    title: "Boost Efficiency",
    description: "Optimize workflows and cut down on expenses.",
  },
  {
    icon: LineChart, // Use the actual icon component
    title: "Enhance Productivity",
    description: "Make informed decisions with data-driven insights.",
  },
  {
    icon: GroupIcon, // Use the actual icon component
    title: "Improve Customer Experiences",
    description: "Provide personalized and engaging interactions.",
  },
  {
    icon: Scale3DIcon, // Use the actual icon component
    title: "Scale with Flexibility",
    description: "Expand and adapt seamlessly with our tailored solutions.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlock Your Business's True Potential
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-justify">
            Partnering with us unlocks the true potential of your business. Our tailored solutions enhance efficiency, productivity, and customer engagement, providing you with a distinct competitive advantage. With our innovative strategies, you can scale effortlessly, stay ahead in your industry, and achieve your business objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon: IconComponent, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  {/* Directly pass the size, color, and className props to the icon */}
                  <IconComponent
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};