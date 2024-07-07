import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex flex-col items-center header-bg">
      <div className="flex max-w-5xl">
        <div className="flex flex-col justify-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((image) => (
                <Image
                  key={`image${image}`}
                  src="star-icon.svg"
                  alt="Star Icon"
                  width={12}
                  height={12}
                />
              ))}
              <p className="text-black text-xs font-semibold text-center">
                TRUSTED BY 20,000+ COUPLES
              </p>
            </div>
          </div>
          <h2 className="text-5xl font-bold leading-[50px]">
            Track your fertility hormones at home, in 10 minutes
          </h2>
          <p className="font-medium mt-6">
            Get accurate results of{" "}
            <span className="font-bold">
              Estrogen, LH, Progesterone metabolite PdG and FSH
            </span>{" "}
            with Inito, the all-in-one, FDA-registered fertility monitor.
          </p>
          <button type="button" className="primary-button mt-6">
            How does Inito work?
          </button>
        </div>
        <div>
          <Image
            src="/banner-hero.png"
            alt="Banner Hero Image"
            width={900}
            height={900}
            className="max-w-[750px] w-[650px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
