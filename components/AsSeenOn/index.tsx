import Image from "next/image";
import React from "react";

const AsSeenOn = () => {
  return (
    <div className="mt-24">
      <p className="text-dimText font-bold w-full text-center mb-6">
        AS SEEN ON
      </p>
      <div className="flex items-center justify-between w-full gap-12">
        <Image
          src="bloomberg-logo.svg"
          alt="bloomberg logo"
          width={134}
          height={44}
          // className="justify-self-end mt-4"
        />
        <Image
          src="forbes-logo.svg"
          alt="forbes logo"
          width={134}
          height={44}
          // className="justify-self-end mt-4"
        />
        <Image
          src="the-week-logo.svg"
          alt="week logo"
          width={134}
          height={44}
          // className="justify-self-end mt-4"
        />
        <Image
          src="washington-logo.svg"
          alt="washington logo"
          width={134}
          height={44}
          // className="justify-self-end mt-4"
        />
        <Image
          src="entrepreneur-logo.svg"
          alt="enterpreneur logo"
          width={134}
          height={44}
          // className="justify-self-end mt-4"
        />
      </div>
    </div>
  );
};

export default AsSeenOn;
