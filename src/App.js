import React from "react";
import AnotherPage from "./pages/AnotherPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lists" element={<AnotherPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
