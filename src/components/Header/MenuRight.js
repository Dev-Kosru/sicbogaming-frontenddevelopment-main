import React, { useContext } from "react";
import { Context } from "../../App";

const MenuRight = () => {
  const { handleModal, ModalTypes } = useContext(Context);
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
      modal_type: ModalTypes.sound,
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

  return (
    <div className="flex items-center gap-[12px] mx-5">
      <div className="sm:hidden md:flex items-center justify-between gap-6 h-[40px] border-x border-x-[#FFCDCC] px-3 mr-4 cursor-pointer">
        <p className="pinkTextColor text-[12px]">Tiếng Việt</p>
        <img src="./assets/menu-right/dropdown.png" alt="dropdown-icon" />
      </div>
      {data.map((item, i) => (
        <button
          key={i}
          className={`sm:${item.sm} md:${item.md} cursor-pointer sm:w-[25px] md:w-[40px]`}
          onClick={() => handleModal(item.modal_type)}
        >
          <img
            src={`./assets/menu-right/${item.keyword}.png`}
            alt={item.keyword}
          />
        </button>
      ))}
    </div>
  );
};

export default MenuRight;
