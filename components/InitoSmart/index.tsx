import React from "react";
import Card1 from "./card1";
import Card3 from "./card3";
import Card2 from "./card2";

const InitoSmartSection = () => {
  return (
    <div className="bg-lightbg flex flex-col items-center justify-between w-full">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
};

export default InitoSmartSection;
