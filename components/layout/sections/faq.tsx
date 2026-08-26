import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQList: FAQProps[] = [
  {
    question: "What problems does Ecocee solve?",
    answer: "We solve complex operational problems using AI automation, private AI infrastructure, and embedded systems. Whether it's automating business workflows, processing real-world data at the edge, or integrating custom hardware with intelligent software, we design the technology around your specific bottleneck.",
    value: "item-1",
  },
  {
    question: "Can Ecocee integrate AI with our existing systems?",
    answer: "Yes. Our AI systems are designed to connect with your existing CRM, ERP, databases, and operational tools. We prioritize seamless integration so that the intelligence operates directly within the workflows your team already uses.",
    value: "item-2",
  },
  {
    question: "Can AI run privately or on-premise?",
    answer: "Yes. We design deployment architectures based on your specific security and data handling requirements. This includes fully private, on-premise, or hybrid infrastructure to ensure your business data remains secure and compliant.",
    value: "item-3",
  },
  {
    question: "Can Ecocee build both hardware and software?",
    answer: "Yes. We provide full-stack engineering, from custom AI software agents down to the physical sensors and embedded microcontrollers. This allows us to build cohesive systems that connect real-world environments to digital intelligence.",
    value: "item-4",
  },
  {
    question: "How does a project start?",
    answer: "Every engagement begins with an initial discussion to understand your business problem. From there, we move into Discovery and Technical Assessment to evaluate your workflows and constraints before recommending a specific architecture or solution.",
    value: "item-5",
  },
  {
    question: "How do you handle confidential information?",
    answer: "We operate under strict confidentiality agreements. Security and data-handling requirements are defined as a core part of the system architecture early in the process. We do not use your proprietary data to train public models.",
    value: "item-6",
  },
  {
    question: "How much does a project cost?",
    answer: "Project costs depend on the complexity of the problem, the required architecture (software vs hardware), and integration depth. Following our Technical Assessment, we provide a transparent commercial proposal detailing the scope and investment before any engineering begins.",
    value: "item-7",
  },
  {
    question: "How long does development take?",
    answer: "Development timelines vary based on project scope. Once the architecture is defined, we establish a clear roadmap with iterative milestones. We focus on delivering an early working version to validate the solution in your environment as quickly as practical.",
    value: "item-8",
  },
  {
    question: "Do you provide post-deployment support?",
    answer: "Yes. After deployment, we offer ongoing SLA-driven support, system monitoring, and continuous evolution. We act as your long-term technology partner to ensure the system adapts as your business grows.",
    value: "item-9",
  },
  {
    question: "What industries do you work with?",
    answer: "We serve businesses with complex operational needs across manufacturing, logistics, retail, healthcare, and corporate operations. Because we engineer the system around the problem, our approach applies to any industry that requires reliable automation and connected intelligence.",
    value: "item-10",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="w-full bg-background py-24 md:py-32" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full border border-primary/20 mb-4 font-medium">
            FAQ
          </Badge>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Common Questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            How we work, what we build, and how to get started.
          </p>
        </div>

        <div itemScope itemProp="mainEntity" itemType="https://schema.org/ItemList">
          <Accordion type="single" collapsible className="space-y-3">
            <StaggerContainer staggerDelay={0.05}>
              {FAQList.map(({ question, answer, value }) => (
                <StaggerItem key={value}>
                  <AccordionItem
                    value={value}
                    className="border border-border bg-card rounded-xl px-6 data-[state=open]:shadow-sm transition-shadow"
                    itemScope
                    itemProp="itemListElement"
                    itemType="https://schema.org/ListItem"
                  >
                    <div itemScope itemProp="item" itemType="https://schema.org/Question">
                      <AccordionTrigger className="py-5 hover:no-underline group text-left" itemProp="name">
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                          {question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 pt-2">
                        <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <p itemProp="text" className="text-sm text-muted-foreground leading-relaxed">
                            {answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
