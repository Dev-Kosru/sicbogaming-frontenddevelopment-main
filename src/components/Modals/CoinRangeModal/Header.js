import React, { useContext } from "react";
import { Context } from "../../../App";

const Header = () => {
  const { handleModal, ModalTypes } = useContext(Context);
  return (
    <div className="flex justify-between">
      <div className="">
        <h5 className="text-[24px] pinkTextColor">Cao nhất</h5>
        <p className="pinkTextColor">Mời lựa chọn Cao nhất</p>
      </div>
      <button
        className="w-[20px] h-[20px]"
        onClick={() => handleModal(ModalTypes.coinRangeModal)}
      >
        <img src="./assets/icons/cancel.png" alt="cancel" />
      </button>
    </div>
  );
};

export default Header;
