
import OnlyKit from "../OnlyKit";
import PredictAndConfirm from "../PredictAndConfirm";
import MeasureProgesterone from "../MeasureProgesterone";
import TopQuestions from "../TopQuestions";

const UpperSection = () => {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <OnlyKit />
      <PredictAndConfirm />
      <MeasureProgesterone />
    </div>
  );
};

export default UpperSection;
