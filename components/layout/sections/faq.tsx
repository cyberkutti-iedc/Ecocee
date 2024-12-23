import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Ecocee ?",
    answer: "Ecocee is an MSME company specalizing in innovative embedded and IoT soultions.",
    value: "item-1",
  },
  {
    question: "What services do you offer ?",
    answer:
      "We offer embedded hardware development, IoT solutions,AI integration, custom app development and prototype development",
    value: "item-2",
  },
  {
    question:
      "What types of embedded systems do you develop ?",
    answer:
      "We develop a wide range of embedded systems, including microcontroller-based systems, embedded Linux systems, and more.",
    value: "item-3",
  },
  {
    question: "Do you provide custom IoT solutions ?",
    answer: "Yes, we provide custom IoT solutions tailored to our clients' specific needs.",
    value: "item-4",
  },
  {
    question:
      "How do I contact Ecocee for business inquiries ?",
    answer: "You can contact us through our website, email, or WhatsApp.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
