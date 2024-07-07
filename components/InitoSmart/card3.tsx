import Image from "next/image";

const Card3 = () => {
  return (
    <div className="font-medium shadow-container bg-white rounded-2.5xl max-w-5xl mb-24 grid grid-cols-2 justify-between">
      <div className="pl-20 pr-16 flex flex-col justify-center">
        <h3 className="font-bold text-3xl">
          Get charts and actual <span className="underline-image">values</span>{" "}
          of your hormones
        </h3>
        <p className="mt-6">
          Actual numerical values are necessary to know whether your PdG levels
          are sufficient enough to support a healthy pregnancy.
        </p>
        <p className="mt-4">
          Studies show that PdG levels lower than 7.9ng/ml in serum (around
          10ug/ml PdG) 6-8 days after ovulation are associated with lower
          pregnancy outcomes.
        </p>
      </div>

      <Image
        src="card3.svg"
        alt="card3"
        width={467}
        height={440}
        className="w-full"
      />
    </div>
  );
};

export default Card3;
