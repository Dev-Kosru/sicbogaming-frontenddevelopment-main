import React from "react";
import UpperBox from "./UpperBox";

const Sidebar = () => {
  return (
    <div
      className="w-[480px] h-full"
      style={{
        background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
      }}
    >
      <UpperBox />
    </div>
  );
};

export default Sidebar;
