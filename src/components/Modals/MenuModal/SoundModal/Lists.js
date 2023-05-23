import React from "react";

const data = [
  "Có chàng trai viết lên cây",
  "Tình khúc vàng",
  "Vì sao Trong lòng tôi",
  "Tâm sự tuổi 30",
];

const Lists = () => {
  return (
    <div className="flex flex-col gap-1 px-[15px]">
      {data.map((item, i) => (
        <div key={i} className="bg-[#505050] px-5 py-2 flex gap-5 text-white">
          <span>{i + 1}.</span>
          <p>{item}</p>
        </div>
      ))}
      <div className="flex justify-center items-center gap-5 mt-2">
        <button className="w-[15px]">
          <img src="./assets/icons/up-arrow.png" alt="up-arrow" />
        </button>
        <button className="w-[15px]">
          <img src="./assets/icons/down-arrow.png" alt="down-arrow" />
        </button>
      </div>
    </div>
  );
};

export default Lists;
