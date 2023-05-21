import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PlayGround from "./components/Playground";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex sm:h-full md:h-[calc(100vh_-_60px)] sm:relative md:fixed w-full">
        <PlayGround />
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
