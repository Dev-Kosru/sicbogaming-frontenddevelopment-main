import React from "react";

const MenuLeft = () => {
  return (
    <div className="flex gap-[80px]">
      <a href="/">
        <img src="./assets/brand.png" alt="Logo" className="ml-[40px]" />
      </a>
      <div className="flex items-center gap-2">
        <img src="./assets/contact-icon.png" alt="contact" />
        <p className="pinkTextColor text-[20px]">Mr. Kevin</p>
      </div>
      <div className="flex items-center gap-2">
        <img src="./assets/coin.png" alt="coin" />
        <div className="flex items-center gap-2">
          <p className="text-white text-[20px]">Số dư:</p>
          <span className="yellowTextColor text-[20px]">34,459.80</span>
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
