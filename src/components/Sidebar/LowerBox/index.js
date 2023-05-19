import React from "react";

const LowerBox = () => {
  const data = [
    {
      name: "Tài",
      value: "50%",
      color: "#FF005C",
    },
    {
      name: "Xỉu",
      value: "33%",
      color: "#00C3F3",
    },
    {
      name: "Lẻ",
      value: "0%",
      color: "#60BF3F",
    },
    {
      name: "Chẵn",
      value: "0%",
      color: "#FEB00C",
    },
    {
      name: "Bộ Ba",
      value: "2%",
      color: "#FFFFFF",
    },
  ];

  const coins = [
    {
      icon: "./assets/coins/5.png",
      value: "5",
    },
    {
      icon: "./assets/coins/25.png",
      value: "25",
    },
    {
      icon: "./assets/coins/50.png",
      value: "50",
    },
    {
      icon: "./assets/coins/100.png",
      value: "100",
    },
    {
      icon: "./assets/coins/250.png",
      value: "250",
    },
    {
      icon: "./assets/coins/500.png",
      value: "500",
    },
    {
      icon: "./assets/coins/1000.png",
      value: "1000",
    },
    {
      icon: "./assets/coins/2000.png",
      value: "2000",
    },
    {
      icon: "./assets/coins/3000.png",
      value: "3000",
    },
    {
      icon: "./assets/coins/5000.png",
      value: "5000",
    },
  ];

  return (
    <div className="w-full p-6 py-4">
      <div className="w-[300px] rounded-[10px] mx-auto border border-[#7C1F58]">
        {data.map((item, index) => (
          <div
            className="px-3 py-[6px] flex last:border-b-0 border-b border-b-[#7C1F58]"
            key={index}
          >
            <div
              className={`w-[50%] text-right px-5 font-bold text-[${item.color}]`}
            >
              {item.name}
            </div>
            <div className="w-[50%] text-left px-5 text-white">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[10px] mx-auto border border-[#7C1F58] mt-4 flex gap-5 flex-wrap p-5">
        {coins.map((item, index) => (
          <button key={index}>
            <img
              src={item.icon}
              alt={item.value}
              className="h-[80px] w-[80px]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default LowerBox;
