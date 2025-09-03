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
    question: "What is Ecocee?",
    answer: "Ecocee is an MSME company specializing in innovative embedded and IoT solutions, providing end-to-end technology solutions from concept to production.",
    value: "item-1",
  },
  {
    question: "What services do you offer?",
    answer: "We offer embedded hardware development, IoT solutions, AI integration, custom app development, prototype development, and industrial automation services.",
    value: "item-2",
  },
  {
    question: "What types of embedded systems do you develop?",
    answer: "We develop a wide range of embedded systems, including microcontroller-based systems, embedded Linux systems, real-time systems, and custom hardware solutions tailored to specific industry needs.",
    value: "item-3",
  },
  {
    question: "Do you provide custom IoT solutions?",
    answer: "Yes, we provide custom IoT solutions tailored to our clients' specific needs, including sensor networks, data analytics, cloud integration, and remote monitoring systems.",
    value: "item-4",
  },
  {
    question: "How do I contact Ecocee for business inquiries?",
    answer: "You can contact us through our website contact form, email at info@ecocee.in, or via WhatsApp at +91-9446715884. We typically respond within 24 hours.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32" itemScope itemType="https://schema.org/FAQPage">
      <div className="text-center mb-10">
        <h2 className="text-lg text-blue-700 font-semibold tracking-wider uppercase mb-2">
          FAQS
        </h2>
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg mb-2">
          Common Questions
        </h2>
        <p className="text-gray-500 dark:text-gray-300 text-base max-w-xl mx-auto">
          Find answers to the most frequently asked questions about our embedded, IoT, and AI solutions.
        </p>
      </div>
      
      <div itemScope itemProp="mainEntity" itemType="https://schema.org/ItemList">
        <Accordion
          type="single"
          collapsible
          className="AccordionRoot rounded-2xl border border-blue-100 dark:border-slate-800 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 shadow-xl"
        >
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem
              key={value}
              value={value}
              className="mb-2 rounded-xl border border-blue-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow hover:shadow-lg transition-all"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              <div itemScope itemProp="item" itemType="https://schema.org/Question">
                <AccordionTrigger 
                  className="text-lg font-semibold text-blue-900 dark:text-blue-200 px-6 py-4 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-xl transition-colors text-left"
                  itemProp="name"
                >
                  {question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 dark:text-gray-300 text-base">
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <div itemProp="text">
                      {answer}
                    </div>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQList.map((faq, index) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              },
              "position": index + 1
            }))
          })
        }}
      />
    </section>
  );
};