"use client";

import Image from "next/image";

const FertilityLab = () => {
  return (
    <div>
      <div className="grid grid-cols-2 max-w-5xl my-24 gap-x-12">
        <div className="font-medium grid content-center">
          <h2 className="font-bold text-4xl mb-8">
            A <span className="underline-image">fertility lab</span> at your
            fingertips
          </h2>
          <p className="mb-8">
            Easy-to-read fertility diagnostic results directly on your iPhone¹,
            in just 10 minutes.
          </p>
          <button type="button" className="primary-button mb-6">
            Get the Inito Kit
          </button>
          <p className="text-lightText text-xs">
            * The Inito Fertility Monitor currently supports iPhone 7 and up.
            Android phones are not supported at the moment.
          </p>
          <Image
            src="apple-store.svg"
            alt="app store logo"
            width={134}
            height={44}
            className="justify-self-end mt-4"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <video
              autoPlay
              loop
              muted
              onContextMenu={(e) => e.preventDefault()}
              title="Video: Dip test strip in urine"
              playsInline
              src="https://cdn.inito.com/inito_website/step1.mp4"
              className="rounded-2.5xl max-h-[160px] object-cover w-full h-full"
            />
            <div className="flex items-center justify-between gap-2 my-4">
              <div className="circle-number">
                <span>1</span>
              </div>
              <p>Dip the test strip in urine for 15 seconds.</p>
            </div>
          </div>
          <div>
            <video
              autoPlay
              loop
              muted
              onContextMenu={(e) => e.preventDefault()}
              title="Video: Attach the Inito Fertility Monitor"
              playsInline
              src="https://cdn.inito.com/inito_website/step2.mp4"
              className="rounded-2.5xl max-h-[160px] object-cover w-full h-full"
            />
            <div className="flex items-center justify-between gap-2 my-4">
              <div className="circle-number">
                <span>2</span>
              </div>
              <p>Attach the Inito Fertility Monitor to your iPhone*.</p>
            </div>
          </div>
          <div>
            <video
              autoPlay
              loop
              muted
              onContextMenu={(e) => e.preventDefault()}
              title="Video: Insert the test strip into the Inito Fertility Monitor"
              playsInline
              src="https://cdn.inito.com/inito_website/step3.mp4"
              className="rounded-2.5xl max-h-[160px] object-cover w-full h-full"
            />
            <div className="flex items-center justify-between gap-2 my-4">
              <div className="circle-number">
                <span>3</span>
              </div>
              <p>Insert the test strip into the Inito Fertility Monitor.</p>
            </div>
          </div>
          <div>
            <video
              autoPlay
              loop
              muted
              onContextMenu={(e) => e.preventDefault()}
              title="Video: Get personalized results on our App"
              playsInline
              src="https://cdn.inito.com/inito_website/step4.mp4"
              className="rounded-2.5xl max-h-[160px] object-cover w-full h-full"
            />
            <div className="flex items-center justify-between gap-2 my-4">
              <div className="circle-number">
                <span>4</span>
              </div>
              <p>Get personalized results on our App in 10 minutes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilityLab;
