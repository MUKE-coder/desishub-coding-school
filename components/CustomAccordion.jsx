import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CustomAccordion({ faqs }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => {
        return (
          <AccordionItem value={`item-${i + 1}`} key={i}>
            <AccordionTrigger className="text-slate-400 text-xl ">
              {faq.qn}
            </AccordionTrigger>
            <AccordionContent className="text-left leading-loose">
              {faq.ans}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
