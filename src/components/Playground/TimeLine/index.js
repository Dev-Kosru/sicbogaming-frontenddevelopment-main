import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";

const TimeLine = () => {
  return (
    <div
      className="h-full px-6"
      style={{
        background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
      }}
    >
      <div className="flex flex-col">
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </div>
    </div>
  );
};

export default TimeLine;
