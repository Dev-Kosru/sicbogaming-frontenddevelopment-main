import React from "react";
import UpperBox from "./UpperBox";
import LowerBox from "./LowerBox";

const Sidebar = () => {
  return (
    <div
      className="w-[480px] h-full overflow-y-scroll"
      style={{
        background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
      }}
    >
      <UpperBox />
      <LowerBox />
    </div>
  );
};

export default Sidebar;
