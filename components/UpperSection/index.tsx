import OnlyKit from "../OnlyKit";
import PredictAndConfirm from "../PredictAndConfirm";
import MeasureProgesterone from "../MeasureProgesterone";
import AsSeenOn from "../AsSeenOn";

const UpperSection = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full">
      <AsSeenOn />
      <OnlyKit />
      <PredictAndConfirm />
      <MeasureProgesterone />
    </div>
  );
};

export default UpperSection;
