import React from "react";

const PinkAlert = () => {
  return (
    <div className="w-[400px] h-[100px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mt-[200px] flex justify-center items-center">
      <p className="text-white font-bold z-10 text-[24px]">
        Đã sẵn sàng, mời đặt cược!
      </p>
      <img
        src="./assets/alerts/pink.png"
        alt="pink"
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default PinkAlert;
