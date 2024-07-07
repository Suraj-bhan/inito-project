"use client";
import { useState } from "react";
import AccordianItem from "./AccordianItem";
import data from "./faqs.json";
const TopQuestions = () => {
  const faqs = data.faqs;
  const [active, setActive] = useState<number>(0);

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(0);
    } else {
      setActive(index);
    }
  };
  return (
    <div className="flex flex-col max-w-5xl my-24">
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold leading-[50px] text-center max-w-xl">
          Your top <span className="circle-image">questions,</span>
          <br /> answered
        </h2>
      </div>
      <div className="grid max-w-5xl sm:grid-cols-2 gap-4 my-12 px-6 sm:px-auto">
        <div className="flex flex-col gap-4 ">
          {faqs.col1.map((faq, index) => {
            return (
              <AccordianItem
                key={index}
                active={active}
                handleToggle={handleToggle}
                faq={faq}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-4 ">
          {faqs.col2.map((faq, index) => {
            return (
              <AccordianItem
                key={index}
                active={active}
                handleToggle={handleToggle}
                faq={faq}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopQuestions;
