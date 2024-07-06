import Image from "next/image";

const Card2 = () => {
  return (
    <div className="font-medium shadow-container bg-white rounded-2.5xl max-w-5xl m-12 flex justify-between">
      <Image src="card2.svg" alt="card2" width={467} height={440} />
      <div className="p-12">
        <h3 className="font-bold text-3xl">
          Adapts to your <span className="text-lightText">ir</span>regular cycle
        </h3>
        <p>
          Most ovulation kits have a set value or a threshold, making them
          likely to give a false read if your hormones fall outside the average
          range.
        </p>
        <p>
          Every woman is unique, especially with a condition like PCOS or
          Thyroid which can influence hormone levels. Inito measures real values
          of your hormones to personalize results to the unique you.
        </p>
      </div>
    </div>
  );
};

export default Card2;
