import React from "react";

const MenuRight = () => {
  return (
    <div className="flex items-center gap-[12px] mx-5">
      <div className="flex items-center justify-between gap-6 h-[40px] border-x border-x-[#FFCDCC] px-3 mr-4 cursor-pointer">
        <p className="pinkTextColor text-[12px]">Tiếng Việt</p>
        <img src="./assets/menu-right/dropdown.png" alt="dropdown-icon" />
      </div>
      <a href="/">
        <img src="./assets/menu-right/dollar.png" alt="hamb-menu-icon" />
      </a>
      <a href="/">
        <img src="./assets/menu-right/call.png" alt="hamb-menu-icon" />
      </a>
      <a href="/">
        <img src="./assets/menu-right/sound.png" alt="hamb-menu-icon" />
      </a>
      <a href="/">
        <img src="./assets/menu-right/home.png" alt="hamb-menu-icon" />
      </a>
      <a href="/">
        <img src="./assets/menu-right/hamb-menu.png" alt="hamb-menu-icon" />
      </a>
    </div>
  );
};

export default MenuRight;
