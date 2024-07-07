import Image from "next/image";
import { useRef } from "react";

interface AccordianItemProps {
  active: number;
  handleToggle: (index: number) => void;
  faq: {
    id: number;
    header: string;
    text: string;
  };
}

const AccordianItem = ({ active, handleToggle, faq }: AccordianItemProps) => {
  const contentEl = useRef<HTMLDivElement | null>(null);
  const { header, id, text } = faq;
  return (
    <div className="rounded-3xl bg-slidebg  h-max">
      <div
        className="grid grid-cols-12 px-6 py-4"
        onClick={() => handleToggle(id)}
      >
        <h5 className="col-span-11 text-lg font-bold">{header}</h5>
        {active === id ? (
          <Image
            src="Minus.svg"
            alt="Minuts Icon"
            width={24}
            height={24}
            className="ease-in col-span-1 transition-all justify-self-end"
          />
        ) : (
          <Image
            src="Plus.svg"
            alt="Plus Icon"
            width={24}
            height={24}
            className="ease-in col-span-1 transition-all justify-self-end"
          />
        )}
      </div>
      <div
        style={active === id ? { display: "block" } : { display: "none" }}
        className="px-6 pb-4"
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;
