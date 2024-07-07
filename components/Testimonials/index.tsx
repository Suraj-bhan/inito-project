"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="max-w-5xl h-full my-24">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop
        speed={1000}
        autoplay={{
          delay: 5000,
          waitForTransition:true,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3, 4, 5].map((slide, index) => (
          <SwiperSlide key={`slide${index}`}>
            <div className="rounded-5xl bg-slidebg px-12 p-6">
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
              </div>
              <p className="font-medium text-slidetext pb-6">
                This is my favorite fertility monitor I’ve tried so far. I was
                cautious about ordering since there’s very little info or
                reviews around the internet, but it seems to be a very well made
                and reliable device. It’s totally fascinating to see my hormone
                levels on the chart! My LH levels don’t cooperate with standard
                ovulation strips (I never get a positive with standard strips),
                so it’s nice to see all the different hormones mapped out
                together.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
