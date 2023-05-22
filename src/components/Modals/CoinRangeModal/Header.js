import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <h5 className="text-[24px] pinkTextColor">Cao nhất</h5>
        <p className="pinkTextColor">Mời lựa chọn Cao nhất</p>
      </div>
      <button className="w-[20px] h-[20px]">
        <img src="./assets/icons/cancel.png" alt="cancel" />
      </button>
    </div>
  );
};

export default Header;
