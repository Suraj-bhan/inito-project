import Card1 from "./card1";
import Card3 from "./card3";
import Card2 from "./card2";

const InitoSmartSection = () => {
  return (
    <div className="bg-lightbg flex flex-col items-center sm:gap-y-24 justify-between w-full">
      <div className="mt-24">
        <h2 className="text-4xl font-bold leading-[50px] text-center max-w-xl hidden sm:block">
          Why Inito is the smarter way to get{" "}
          <span className="underline-image">pregnant</span>
        </h2>
      </div>
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
};

export default InitoSmartSection;
