import React from "react";
import Screen from "./Screen";
import SideBox from "./SideBox";
import TimeLine from "./TimeLine";

const PlayGround = () => {
  return (
    <div className="flex-1">
      <div className="flex sm:w-full md:h-[450px]">
        <Screen />
        <SideBox />
      </div>
      <TimeLine />
    </div>
  );
};

export default PlayGround;
