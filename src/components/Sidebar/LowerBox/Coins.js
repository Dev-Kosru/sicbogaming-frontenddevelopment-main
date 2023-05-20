import React from "react";

const Coins = () => {
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
    <div className="rounded-[10px] mx-auto border border-[#7C1F58] mt-4 flex flex-wrap p-2">
      {coins.map((item, index) => (
        <button key={index} className="w-1/4 p-3">
          <img src={item.icon} alt={item.value} className="h-[80px] w-[80px]" />
        </button>
      ))}
    </div>
  );
};

export default Coins;
