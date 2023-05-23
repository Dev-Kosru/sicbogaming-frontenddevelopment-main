import React, { useContext } from "react";
import { Context } from "../../App";
import PinkAlert from "./PinkAlert";
import YellowAlert from "./YellowAlert";
import GreyAlert from "./GreyAlert";
import GreenAlert from "./GreenAlert";

const Alerts = () => {
  const { alert, AlertTypes } = useContext(Context);

  const getComponent = () => {
    if (alert.active) {
      if (alert.alert_type === AlertTypes.pink) {
        return <PinkAlert />;
      } else if (alert.alert_type === AlertTypes.yellow) {
        return <YellowAlert />;
      } else if (alert.alert_type === AlertTypes.grey) {
        return <GreyAlert />;
      } else if (alert.alert_type === AlertTypes.green) {
        return <GreenAlert />;
      }
    }
  };

  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-none z-50 flex justify-center items-center">
      {getComponent()}
    </div>
  );
};

export default Alerts;
