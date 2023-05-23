import React, { createContext, useState } from "react";
import AnotherPage from "./pages/AnotherPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

export const Context = createContext();

const App = () => {
  const ModalTypes = {
    sound: "SOUND_MODAL",
    coinRangeModal: "COIN_RANGE_MODAL",
    playBackModal: "PLAY_BACK_MODAL",
  };

  const [modal, setModal] = useState({
    active: true,
    modal_type: "COIN_RANGE_MODAL",
  });

  const handleModal = (modal_type) => {
    setModal({
      active: !modal.active,
      modal_type: modal_type,
    });
  };

  return (
    <BrowserRouter>
      <Context.Provider value={{ modal, handleModal, ModalTypes }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/lists" element={<AnotherPage />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
