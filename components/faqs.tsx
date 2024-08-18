'use client';
import React, { FC } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Container } from '@/components/container';

const FAQsData = [
  {
    question: 'What do I get?',
    answer: <p>Add some text here</p>,
  },
  {
    question: 'What do I get if I pre-order?',
    answer:
      "Apart from an exclusive discount, you'll be one of the first to access OneTask when it's available, you'll get access for life including any new features and improvements.",
  },
  {
    question: 'Can I get a refund?',
    answer: (
      <p>
        Yes, you can request a refund within 7 days of your purchase. Email me{' '}
        <a href="">here</a>
      </p>
    ),
  },
  {
    question: 'How do I get access?',
    answer: 'Add answer here',
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
                  <div className="[max-width:80ch] [text-wrap:balance] text-muted-foreground text-fluid-sm/[1.3]">
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
