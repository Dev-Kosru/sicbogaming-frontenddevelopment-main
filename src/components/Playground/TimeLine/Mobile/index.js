import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import FifthRow from "./FifthRow";
import SixthRow from "./SixthRow";
import SeventhRow from "./SeventhRow";
import Coins from "../../../Sidebar/LowerBox/Coins";
import ActionButton from "../../../Sidebar/LowerBox/ActionButton";

const Mobile = () => {
  return (
    <div className="flex-col sm:flex md:hidden gap-2">
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <FourthRow />
      <FifthRow />
      <SixthRow />
      <SeventhRow />
      <Coins mobile />
      <ActionButton />
    </div>
  );
};

export default Mobile;
