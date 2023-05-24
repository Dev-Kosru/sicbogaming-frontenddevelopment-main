import React from "react";
import Layout from "../../components/Layouts/Layout";
import Header from "../../components/Header";
import PickGameSidebar from "../../components/PickGameSidebar";
import { useNavigate } from "react-router-dom";

const PickGame = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header />
      <div className="flex sm:h-full md:h-[calc(100vh_-_60px)] sm:relative md:fixed w-full">
        <PickGameSidebar />
        <div className="flex-1 bg-[#1E1E1E] p-[25px]">
          <img src="./assets/pick-header.png" alt="pick header" />

          <div className="flex justify-between gap-10 mt-10">
            <button onClick={() => navigate("/main")}>
              <img src="./assets/pick.png" alt="pick" />
            </button>
            <button onClick={() => navigate("/main")}>
              <img src="./assets/pick.png" alt="pick" />
            </button>
            <button onClick={() => navigate("/main")}>
              <img src="./assets/pick.png" alt="pick" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PickGame;
