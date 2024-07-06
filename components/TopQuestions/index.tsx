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
    <div>
      {faqs.map((faq, index) => {
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
  );
};

export default TopQuestions;
