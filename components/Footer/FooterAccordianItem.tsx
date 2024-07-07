import Image from "next/image";

interface FooterAccordianItemProps {
  active: number;
  handleToggle: (index: number) => void;
  accord: {
    id: number;
    header: string;
    links: { title: string }[];
  };
}

const FooterAccordianItem = ({
  active,
  handleToggle,
  accord,
}: FooterAccordianItemProps) => {
  const { id, header, links } = accord;
  return (
    <div className="font-semibold p-3">
      <button className="text-white flex w-full justify-between" onClick={() => handleToggle(id)}>
        <span>{header}</span>{" "}
        <span>
          <Image
            src="down-icon.svg"
            alt="Down Icon"
            width={20}
            height={20}
            className={active === id ? "rotate-icon" : ""}
          />
        </span>
      </button>
      <div
        className=" text-lightText"
        style={
          active === id
            ? { display: "block", marginTop: "12px" }
            : { display: "none" }
        }
      >
        <ul className="grid gap-2">
          {links.map((link, index) => (
            <li key={`link ${link.title} ${index}`}>
              <a href="#">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterAccordianItem;
