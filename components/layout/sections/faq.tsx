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

const FAQList: FAQProps[] = [
  {
    question: "What is Ecocee and how do you work?",
    answer:
      "Ecocee is a technology partnership company based in Kodungallur, Kerala. We do not simply build what is requested. We first understand the business problem, discover the actual requirements, assess the current situation, and then recommend the most appropriate solution. Our process follows a structured flow: Discovery, Assessment, Solution Exploration, Recommendation, Proposal, SOW, Engineering, Deployment, and ongoing Support.",
    value: "item-1",
  },
  {
    question: "What happens during the discovery phase?",
    answer:
      "During discovery, we ask questions to understand the real problem behind your stated requirement. We determine what problem is being solved, who experiences it, how it is currently handled, what technology exists, what limitations exist, and what the expected business outcome is. A client requesting a mobile app, for example, may actually need a simpler web tool or an AI agent. We identify the right solution before any development begins.",
    value: "item-2",
  },
  {
    question: "How do your AI agents work for businesses?",
    answer:
      "We build three types of AI agents, each custom-trained on your specific business data and workflows. The Business AI Agent handles customer inquiries via email and your website, automatically qualifying leads and managing your CRM. The Office AI Agent manages emails, scheduling, HR tasks, and document workflows. The Warehouse AI Agent handles inventory tracking, logistics, and supply chain automation. Setup typically takes 1 to 3 days, and the agents learn and improve over time.",
    value: "item-3",
  },
  {
    question: "Can the warehouse AI agent work offline?",
    answer:
      "Yes. Our Warehouse AI Agent can run on edge computing devices we manufacture, enabling real-time inventory tracking, anomaly detection, and demand forecasting without internet connectivity. Data syncs automatically when the connection is restored. This is critical for warehouses and factories in areas with unreliable network coverage.",
    value: "item-4",
  },
  {
    question: "What embedded systems and IoT solutions do you offer?",
    answer:
      "We develop custom embedded hardware using ESP32, ARM, and PIC microcontrollers. Our services include PCB prototyping, firmware development, real-time operating systems, and full IoT solutions with cloud integration and remote monitoring. Every hardware project goes through our standard process: requirement understanding, architecture, design, engineering, validation, and deployment.",
    value: "item-5",
  },
  {
    question: "How do you determine pricing?",
    answer:
      "Pricing is determined after understanding your requirements through the discovery and assessment phases. Our AI agent subscriptions start from Rs 9,999 per month. For custom projects, we provide a transparent proposal covering scope, deliverables, milestones, timeline, and commercial terms before any work begins. We do not begin development until the SOW is approved by both parties.",
    value: "item-6",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Solution assessment takes 3 to 7 working days. Architecture and technology planning takes 1 to 2 weeks depending on complexity. We target an MVP delivery in approximately 4 weeks where appropriate. The full timeline depends on project scope and is defined in the SOW with clear milestones. We conduct continuous reviews throughout development to avoid surprises at delivery.",
    value: "item-7",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve manufacturing, retail, logistics, hospitality, education, and healthcare sectors. Our approach is industry-agnostic because we start by understanding the business problem rather than applying pre-built solutions. Whether it is automated customer support for retail, inventory management for factories, or process automation for offices, the process is the same: understand, recommend, engineer, deliver.",
    value: "item-8",
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Yes. Support after delivery is governed by a Service Level Agreement (SLA) that defines support hours, severity levels, response times, resolution targets, and escalation processes. This may include bug fixes, monitoring, infrastructure support, security updates, dependency updates, and incident response. Beyond support, we also review performance, scalability, and new opportunities to continuously improve your system.",
    value: "item-9",
  },
  {
    question: "How do I get started with Ecocee?",
    answer:
      "Send us a message through the contact form or email us at info@ecocee.in. We will schedule a discovery call to understand your business context and the problem you are trying to solve. There is no commitment at this stage. Based on the discovery, we provide a recommendation and proposal before any commercial or development agreement is made.",
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
