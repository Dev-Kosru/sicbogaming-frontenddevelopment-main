import React from "react";
import CoinRangeModal from "./CoinRangeModal";

const Modals = () => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-none z-50 flex justify-center items-center">
      <CoinRangeModal />
    </div>
  );
};

export default Modals;
