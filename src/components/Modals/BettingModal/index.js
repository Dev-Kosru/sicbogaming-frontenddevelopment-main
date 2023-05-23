import React, { useContext } from "react";
import { Context } from "../../../App";

const BettingModal = () => {
  const { handleModal, ModalTypes } = useContext(Context);

  return (
    <div className="w-[600px] border border-[#FFF600] px-[30px] py-[20px] bg-[#1C1C1C]">
      <div className="flex justify-center py-2 border-b border-b-[#FFF600] relative">
        <h5 className="text-[#FFF600] text-[24px] font-bold">
          Cài đặt âm lượng
        </h5>
        <button
          className="absolute right-0 top-0"
          onClick={() => handleModal(ModalTypes.bettingModal)}
        >
          <img src="./assets/icons/cancel.png" alt="cancel" />
        </button>
      </div>
      <div className="flex flex-col gap-5 py-8 pb-4">
        <div className="flex items-center">
          <p className="text-white w-[130px]">TK Chính</p>
          <input
            type="text"
            placeholder=""
            value={"123.000"}
            className="text-[#FFF600] bg-transparent border border-[#767676] py-3 px-5 rounded-[5px] flex-1"
          />
        </div>
        <div className="flex items-center">
          <p className="text-[#FF005C] w-[130px]">TK Chính</p>
          <input
            type="text"
            placeholder=""
            value={"123.000"}
            className="text-[#FFF600] bg-transparent border border-[#767676] py-3 px-5 rounded-[5px] flex-1"
          />
        </div>
        <div className="flex items-center">
          <p className="text-[#FF005C] w-[130px]"></p>
          <div className="flex-1 flex justify-between items-center">
            <p className="text-[#FF4345]">Quà tặng miễn phí: 0</p>
            <div className="w-[25px] h-[25px] rounded-full flex justify-center items-center border border-[#FF4345]">
              <img src="./assets/icons/ques.png" alt="question mark" />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-white w-[130px]">Điểm chuyển</p>
          <div className="flex-1 flex justify-between items-center gap-5">
            <input
              type="text"
              placeholder="Nhập số điểm"
              className="text-[#FFF600] bg-transparent border border-[#767676] py-3 px-5 rounded-[5px] flex-1"
            />
            <button className="text-white bg-[#767676] py-3 px-6 rounded-[5px]">
              Chuyển hết
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-1 flex justify-between items-center gap-5">
            <button className="text-white bg-[#767676] py-3 px-14 rounded-[5px]">
              Chuyển hết về tài khoản chính
            </button>
            <button className="text-white bg-[#767676] py-3 px-14 rounded-[5px]">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingModal;
