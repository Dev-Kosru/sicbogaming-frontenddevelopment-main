import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import Tracking from "./Tracking";

const TimeLine = () => {
  return (
    <div
      className="px-6 h-[calc(100vh_-_60px_-_450px)] overflow-hidden overflow-y-scroll"
      style={{
        background: "linear-gradient(180deg, #26001A 0%, #160015 100%)",
      }}
    >
      <div className="flex flex-col">
        <FirstRow />
        <SecondRow />
        <ThirdRow />
        <FourthRow />
        <Tracking />
      </div>
    </div>
  );
};

export default TimeLine;
