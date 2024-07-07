"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import data from "./image-map.json";

const Card2 = () => {
  const [active, setActive] = useState(1);
  const imageList = data.images;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((prevActive) => (prevActive % 4) + 1);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="font-medium shadow-container bg-white rounded-2.5xl max-w-5xl grid grid-cols-2 justify-between">
      <div className="flex justify-center relative">
        {/* {imageList.map((image) => ( */}
        <Image
          key={`${imageList[active - 1].id} ${imageList[active - 1].alt}`}
          src={imageList[active - 1].url}
          alt={imageList[active - 1].alt}
          width={330}
          height={120}
          style={{ transition: "all 2s ease-in-out" }}
          className="absolute top-16 "
        />
        {/* ))} */}

        <Image
          src="iphone-12.svg"
          alt="iphone"
          width={467}
          height={440}
          className="w-3/5 m-x-auto h-full"
        />
      </div>
      <div className="p-12 flex flex-col justify-between gap-4">
        <h3 className="font-bold text-3xl">
          Inito tracks everything so you don’t have to
        </h3>
        <p>
          The Inito Fertility Monitor comes with a free easy-to-use App, so you
          can track your fertile days with ease and know exactly when you
          ovulate.
        </p>
        <p>Our App notifies you for everything:</p>
        <ul>
          <li>Your fertility levels</li>
          <li>When to test on the right days</li>
          <li>When you’ve successfully ovulated</li>
          <li>And when to roll into bed!</li>
        </ul>
        <button type="button" className="primary-button mb-6">
          Get the Inito Kit
        </button>
      </div>
    </div>
  );
};

export default Card2;
