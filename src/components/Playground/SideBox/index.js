import React from "react";

const SideBox = () => {
  return (
    <div
      className="w-[540px] h-full p-6 flex flex-col gap-6"
      style={{
        background: "linear-gradient(180deg, #7C1F58 0%, #21001B 100%)",
      }}
    >
      <div className="flex gap-3 justify-between items-center">
        <div className="flex gap-3">
          <div className="w-[85px] h-[85px] rounded-[9px] border border-[#FF989F]"></div>
          <div className="w-[85px] h-[85px] rounded-[9px] border border-[#FF989F]"></div>
          <div className="w-[85px] h-[85px] rounded-[9px] border border-[#FF989F]"></div>
        </div>
        <div className="flex-1 flex gap-3">
          <div className="w-1/2 flex justify-end py-3 flex-1 border-l border-l-[#FF989F]">
            <p className="text-white font-bold">Tổng điểm</p>
          </div>
          <div className="flex flex-col gap-3 w-[80px] items-end">
            <div className="w-[75px] h-[35px] border border-[#FF989F]"></div>
            <div className="w-[75px] h-[35px] border border-[#FF989F]"></div>
          </div>
        </div>
      </div>
      <div
        className="p-2"
        style={{
          background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
        }}
      >
        <div className="border-b border-b-whitep-2">
          <div className="flex items-center justify-between py-3 px-5">
            <p className="text-white">56</p>
            <p className="text-white text-[24px] font-bold">14</p>
            <div className="flex gap-5">
              <img src="./assets/cube/4.png" alt="4" />
              <img src="./assets/cube/5.png" alt="5" />
              <img src="./assets/cube/5.png" alt="5" />
            </div>
            <div className="w-[60px] h-[30px] border border-[#FF989F] flex items-center justify-center text-white">
              Tài
            </div>
            <div className="w-[60px] h-[30px] border border-[#FF989F] flex items-center justify-center text-white">
              Chẵn
            </div>
          </div>
        </div>
        <div className="border-b border-b-whitep-2">
          <div className="flex items-center justify-between py-3 px-5">
            <p className="text-white">56</p>
            <p className="text-white text-[24px] font-bold">14</p>
            <div className="flex gap-5">
              <img src="./assets/cube/4.png" alt="4" />
              <img src="./assets/cube/5.png" alt="5" />
              <img src="./assets/cube/5.png" alt="5" />
            </div>
            <div className="w-[60px] h-[30px] border border-[#FF989F] flex items-center justify-center text-white">
              Tài
            </div>
            <div className="w-[60px] h-[30px] border border-[#FF989F] flex items-center justify-center text-white">
              Chẵn
            </div>
          </div>
        </div>
        <div className="border-b border-b-whitep-2">
          <div className="flex items-center justify-between py-3 px-5">
            <p className="text-white">56</p>
            <p className="text-white text-[24px] font-bold">14</p>
            <div className="flex gap-5">
              <img src="./assets/cube/4.png" alt="4" />
              <img src="./assets/cube/5.png" alt="5" />
              <img src="./assets/cube/5.png" alt="5" />
            </div>
            <div className="w-[60px] h-[30px] border border-[#FF989F] flex items-center justify-center text-white">
              Tài
            </div>
            <div className="w-[60px] h-[30px] border border-[#FF989F] flex items-center justify-center text-white">
              Chẵn
            </div>
          </div>
        </div>
        <div className="border-b border-b-whitep-2">
          <div className="flex items-center justify-between py-3 px-5">
            <p className="text-white">56</p>
            <p className="text-white text-[24px] font-bold">14</p>
            <div className="flex gap-5">
              <img src="./assets/cube/4.png" alt="4" />
              <img src="./assets/cube/5.png" alt="5" />
              <img src="./assets/cube/5.png" alt="5" />
            </div>
            <div className="w-[60px] h-[30px] border border-[#FF989F] flex items-center justify-center text-white">
              Tài
            </div>
            <div className="w-[60px] h-[30px] border border-[#FF989F] flex items-center justify-center text-white">
              Chẵn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBox;
