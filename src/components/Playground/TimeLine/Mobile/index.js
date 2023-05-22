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
import EigthRow from "./EightRow";

const Mobile = () => {
  return (
    <div>
      <div className="flex-col sm:flex md:hidden gap-2 sm:px-3 md:px-0">
        <FirstRow />
        <SecondRow />
        <ThirdRow />
        <FourthRow />
        <FifthRow />
        <SixthRow />
        <SeventhRow />
      </div>
      <div className="flex-col sm:flex md:hidden gap-2 pb-10">
        <Coins mobile />
        <ActionButton />
        <EigthRow />
      </div>
    </div>
  );
};

export default Mobile;
