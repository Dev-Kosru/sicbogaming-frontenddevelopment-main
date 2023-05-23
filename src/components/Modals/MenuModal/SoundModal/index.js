import React from "react";
import Bars from "./Bars";
import Audio from "./Audio";

const data = [
  {
    name: "Trò chơi",
    value: 33,
  },
  {
    name: "Sòng bài",
    value: 100,
  },
  {
    name: "Quà tặng",
    value: 33,
  },
];

const SoundModal = () => {
  return (
    <div className="w-[600px] h-[700px] absolute right-[100px] top-[80px] bg-[#1C1C1C] border border-[#F3C3D1] px-[30px] py-[20px]">
      <div className="flex justify-center py-2 border-b border-b-[#F3C3D1] relative">
        <h5 className="text-white text-[24px] font-bold">Cài đặt âm lượng</h5>
        <button className="absolute right-0 top-0">
          <img src="./assets/icons/cancel.png" alt="cancel" />
        </button>
      </div>

      <div className="flex flex-col gap-5 py-10">
        {data.map((item, i) => (
          <Bars data={item} key={i} />
        ))}
      </div>
      <Audio />
    </div>
  );
};

export default SoundModal;
