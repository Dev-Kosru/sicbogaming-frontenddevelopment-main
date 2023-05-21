import React from "react";

const data = [
  {
    keyword: "dollar",
    sm: "block",
    md: "block",
  },
  {
    keyword: "call",
    sm: "hidden",
    md: "block",
  },
  {
    keyword: "sound",
    sm: "block",
    md: "block",
  },
  {
    keyword: "home",
    sm: "hidden",
    md: "block",
  },
  {
    keyword: "hamb-menu",
    sm: "block",
    md: "block",
  },
];

const MenuRight = () => {
  return (
    <div className="flex items-center gap-[12px] mx-5">
      <div className="sm:hidden md:flex items-center justify-between gap-6 h-[40px] border-x border-x-[#FFCDCC] px-3 mr-4 cursor-pointer">
        <p className="pinkTextColor text-[12px]">Tiếng Việt</p>
        <img src="./assets/menu-right/dropdown.png" alt="dropdown-icon" />
      </div>
      {data.map((item, i) => (
        <a href="/" key={i} className={`sm:${item.sm} md:${item.md}`}>
          <img
            src={`./assets/menu-right/${item.keyword}.png`}
            alt={item.keyword}
            className="sm:w-[25px] md:w-[40px]"
          />
        </a>
      ))}
    </div>
  );
};

export default MenuRight;
