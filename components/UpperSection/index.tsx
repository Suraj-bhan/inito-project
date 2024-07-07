import OnlyKit from "../OnlyKit";
import PredictAndConfirm from "../PredictAndConfirm";
import MeasureProgesterone from "../MeasureProgesterone";
import AsSeenOn from "../AsSeenOn";
import Banner from "../Banner";

const UpperSection = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <Banner />
      <AsSeenOn />
      <OnlyKit />
      <PredictAndConfirm />
      <MeasureProgesterone />
    </div>
  );
};

export default UpperSection;
