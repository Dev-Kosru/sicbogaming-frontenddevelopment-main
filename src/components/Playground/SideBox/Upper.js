import React from "react";

const Upper = () => {
  return (
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
  );
};

export default Upper;
