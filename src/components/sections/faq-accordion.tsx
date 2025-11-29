"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Which classes/standards do you teach?",
    answer:
      "We provide tuition for students from 6th to 12th standard. Each class focuses on strong fundamentals, regular revision, and exam-oriented guidance.",
  },
  {
    question: "What subjects are offered?",
    answer:
      "We offer coaching for Mathematics, Science, English and other core subjects based on the student's syllabus. We provide support for both State Board and CBSE students.",
  },
  {
    question: "Do you provide individual attention?",
    answer:
      "Yes, every student receives personal guidance. Doubts are cleared regularly, and performance is tracked through tests to ensure steady improvement.",
  },
  {
    question: "Where is your tuition centre located?",
    answer:
      "We are located in Ramanathapuram, Tamil Nadu. You can contact us for the exact location and directions via WhatsApp or a phone call.",
  },
  {
    question: "How can I enroll my child?",
    answer:
      "You can submit an enquiry through our Contact page or reach us directly on WhatsApp. We will guide you through timing details, fee information, and batch allocation.",
  },
];

const FaqAccordion = () => {
  return (
    <section className="bg-primary-black text-primary-white py-[150px]" data-scroll-section>
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-[56px] font-normal leading-[1.1] mb-20 font-display">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[1240px] mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem
              value={`item-${index + 1}`}
              key={index}
              className="border-b border-white/20"
            >
              <AccordionTrigger className="group py-[30px] font-body text-2xl font-normal text-left hover:no-underline focus:outline-none items-start">
                <span className="flex-1 pr-4">{item.question}</span>
                <div className="relative h-[25px] w-[25px] flex-shrink-0 ml-6 mt-1.5">
                  <span className="absolute left-0 top-1/2 w-full h-[2px] -translate-y-1/2 bg-white" />
                  <span className="absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2 bg-white transition-transform duration-300 ease-in-out group-data-[state=open]:scale-y-0" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-[30px]">
                <p className="max-w-[90%] font-body text-base leading-relaxed text-white/70">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqAccordion;
