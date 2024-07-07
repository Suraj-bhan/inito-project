import Image from "next/image";

const PredictAndConfirm = () => {
  return (
    <div className="bg-bggreen/45 max-w-5xl grid w-full rounded-2.5xl p-8 mt-6">
      <div className="flex justify-between gap-16">
        <div>
          <div className="bg-bggreen w-[445px] h-[445px] rounded-2.5xl">
            <Image
              src="ovulation-confirmed.svg"
              alt="ovulation-confirmed"
              width={445}
              height={445}
            />
          </div>
        </div>
        <div className="grid justify-between">
          <h2 className="text-4xl font-bold leading-[50px]">
            Predict and confirm your ovulation with{" "}
            <span className="underline-image">actual</span> data
          </h2>
          <p className="font-medium">
            Unlike most ovulation tests that only give you &quot;yes/no&quot;
            results, Inito provides{" "}
            <span className="font-bold">real numerical values</span> of your
            fertility hormones.
          </p>
          <p className="font-medium">
            If you have irregular cycles, actual data is necessary to know
            exactly when you ovulate, and when is the best time to try to
            conceive.
          </p>
          <button type="button" className="primary-button">
            Get the Inito Kit
          </button>
        </div>
      </div>
      <div className="flex mt-36 mb-8">
        <div>
          <h2 className="text-4xl font-bold leading-[50px]">
            Never miss{" "}
            <span className="relative inline-block">
              <Image
                src="an-egg-text.svg"
                alt="an-egg"
                width={200}
                height={100}
                className="absolute  -top-6"
              />
              a day
              <Image
                src="strike-through.svg"
                alt="strike-through"
                width={141}
                height={66}
                className="absolute top-4"
              />
            </span>{" "}
            again with Inito
          </h2>
          <p className="font-medium mt-6">
            Inito tracks up to 6 fertile days and confirms ovulation by
            measuring all 4 hormones in just 10 minutes:
          </p>
          <div>
            <ul className="color-list mt-4 gap-2 flex flex-col text-sm">
              <li>Estrogen, which rises 3-4 days before ovulation</li>
              <li>LH, which surges 24-36 hours before ovulation</li>
              <li>PdG, which rises after ovulation</li>
              <li>FSH, to track follicle growth</li>
            </ul>
          </div>
        </div>
        <Image
          src="peak-fertility.svg"
          alt="peak-fertility"
          width={572}
          height={321}
        />
      </div>
    </div>
  );
};

export default PredictAndConfirm;
