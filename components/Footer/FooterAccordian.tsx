"use client";
import FooterAccordianItem from "./FooterAccordianItem";
import data from "./footerlinks.json";
import { useState } from "react";

const FooterAccordian = () => {
  const footerLinks = data.links;
  const [active, setActive] = useState(0);

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(0);
    } else {
      setActive(index);
    }
  };

  return (
    <div className="px-6 grid mt-8">
      {footerLinks.map((accordian) => (
        <FooterAccordianItem
          key={`accordinaitem${accordian.id}`}
          active={active}
          handleToggle={handleToggle}
          accord={accordian}
        />
      ))}
    </div>
  );
};

export default FooterAccordian;
