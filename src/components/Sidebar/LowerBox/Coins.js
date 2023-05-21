import React from "react";

const Coins = ({ mobile }) => {
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
    <div className="rounded-[10px] mx-auto border border-[#7C1F58] mt-4 flex sm:flex-nowrap md:flex-wrap p-2">
      {(mobile ? coins.splice(0, 5) : coins).map((item, index) => (
        <button key={index} className="sm:w-1/5 md:w-1/6 p-3">
          <img
            src={item.icon}
            alt={item.value}
            className="sm:h-[50px] md:h-[80px] sm:w-[50px] md:w-[80px]"
          />
        </button>
      ))}
      {mobile && (
        <button className="sm:w-1/6 md:w-1/4 p-3">
          <img src="./assets/coins/res.png" alt="More" className="w-[80px]" />
        </button>
      )}
    </div>
  );
};

export default Coins;
