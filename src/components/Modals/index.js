import React, { useContext } from "react";
import SoundModal from "./MenuModal/SoundModal";
import { Context } from "../../App";
import CoinRangeModal from "./CoinRangeModal";
import PlayBackModal from "./PlayBackModal";
import BettingModal from "./BettingModal";

const Modals = () => {
  const { modal, ModalTypes } = useContext(Context);

  const getComponent = () => {
    if (modal.active) {
      if (modal.modal_type === ModalTypes.sound) {
        return <SoundModal />;
      } else if (modal.modal_type === ModalTypes.coinRangeModal) {
        return <CoinRangeModal />;
      } else if (modal.modal_type === ModalTypes.playBackModal) {
        return <PlayBackModal />;
      } else if (modal.modal_type === ModalTypes.bettingModal) {
        return <BettingModal />;
      }
    }
  };

  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-none z-50 flex justify-center items-center">
      {getComponent()}
    </div>
  );
};

export default Modals;
