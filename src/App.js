import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex h-[calc(100vh_-_60px)] fixed w-full">
        <div className="flex-1 bg-slate-600"></div>
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
