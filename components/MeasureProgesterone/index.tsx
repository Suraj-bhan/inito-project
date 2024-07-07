import Image from "next/image";

const MeasureProgesterone = () => {
  return (
    <div className="flex flex-col green-white-bg w-full items-center">
      <div className="max-w-4xl p-12 rounded-2.5xl shadow-container mt-36 relative bg-white mx-6 sm:mx-auto">
        <Image
          src="calendar.svg"
          alt="calendar"
          width={120}
          height={120}
          className="absolute -top-12 -right-12 hidden sm:block"
        />
        <h3 className="text-lightgreen font-bold text-xs sm:text-base">
          WHY MEASURE PROGESTERONE?
        </h3>
        <p className="mt-3 text-xs sm:text-base">
          <span className="font-bold">Anovulation</span> (having a menstrual
          cycle with no egg) is actually a common occurrence, affecting 1 in 10
          women*.
        </p>
        <p className="mt-4 text-xs sm:text-base">
          A sure way to confirm ovulation is a{" "}
          <span className="font-bold">rise in Progesterone level</span> after
          peak fertility. Progesterone also supports implantation and elevated
          levels of PdG during the 7-10 day window after ovulation correlates to
          higher chances of a successful pregnancy.
        </p>
        <p className="text-lightText text-xs mt-4">
          * Source: National Institutes of Health
        </p>
        <p className="font-bold mt-4 text-base sm:text-xl ">
          &quot;Inito is all that you need to give you the best chance of
          conception.&quot;
        </p>
        <div className="flex mt-3 gap-5">
          <Image src="rachel.svg" alt="Rachel" width={65} height={65} />
          <div className="grid justify-around">
            <div className="font-bold">Dr. Rachel Wagner</div>
            <div className="italic font-medium text-lightText">MD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasureProgesterone;
