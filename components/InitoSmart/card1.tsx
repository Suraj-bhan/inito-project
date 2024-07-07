import Image from "next/image";

const Card1 = () => {
  return (
    <div className="font-medium shadow-container bg-white rounded-2.5xl max-w-5xl grid grid-cols-2 justify-between">
      <div className="pl-20 pr-16 flex flex-col justify-center">
        <h3 className="font-bold text-3xl">
          Adapts to your <span className="text-lightText">ir</span>regular cycle
        </h3>
        <p className="mt-6">
          Most ovulation kits have a set value or a threshold, making them
          likely to give a false read if your hormones fall outside the average
          range.
        </p>
        <p className="mt-4">
          Every woman is unique, especially with a condition like PCOS or
          Thyroid which can influence hormone levels. Inito measures real values
          of your hormones to personalize results to the unique you.
        </p>
      </div>

      <Image
        src="card1.svg"
        alt="card1"
        width={467}
        height={440}
        className="w-full"
      />
    </div>
  );
};

export default Card1;
