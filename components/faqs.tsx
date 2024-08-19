"use client";
import { FC } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsData = [
  {
    question: "How does the AI prioritize tasks?",
    answer: (
      <p>
        The AI uses a combination of deadlines, task importance, and your
        personal preferences to prioritize tasks effectively.
      </p>
    ),
  },
  {
    question: "Is my data secure?",
    answer: (
      <p>
        Yes, we use industry-standard AES-256 bit encryption (both in transit
        and at rest) to ensure your data is private and secure.
      </p>
    ),
  },
  {
    question: "Can I customize the task categories?",
    answer: (
      <p>
        Yes, you can create and customize task categories to suit your workflow
        and preferences.
      </p>
    ),
  },
  {
    question: "Can I integrate the app with other tools?",
    answer: (
      <p>
        Yes, our app supports integration with Google Calendar, with additional
        integrations coming soon.
      </p>
    ),
  },
];

const FAQs: FC = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      <p
        id="faq"
        className="col-span-12 md:col-start-2 md:col-end-12 text-2xl md:text-4xl font-bold"
      >
        Frequently asked questions
      </p>
      <div className="col-span-12 md:col-start-2 md:col-end-12">
        {FAQsData.map((item, index) => {
          return (
            <Accordion
              key={item.question}
              type="single"
              collapsible
              defaultValue="item-0"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-base md:text-xl font-bold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-xl bodyContent">
                  <div className="text-muted-foreground text-fluid-sm/[1.3]">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
