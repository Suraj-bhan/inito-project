import Image from "next/image";
import React from "react";

const Card3 = () => {
  return (
    <div className="font-medium shadow-container bg-white rounded-2.5xl max-w-5xl m-12 flex justify-between">
      <div className="p-12">
        <h3 className="font-bold text-3xl">
          Get charts and actual values of your hormones
        </h3>
        <p>
          Actual numerical values are necessary to know whether your PdG levels
          are sufficient enough to support a healthy pregnancy.
        </p>
        <p>
          Studies show that PdG levels lower than 7.9ng/ml in serum (around
          10ug/ml PdG) 6-8 days after ovulation are associated with lower
          pregnancy outcomes.
        </p>
      </div>

      <Image src="card3.svg" alt="card3" width={467} height={440} />
    </div>
  );
};

export default Card3;
