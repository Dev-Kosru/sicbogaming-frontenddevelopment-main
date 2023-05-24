import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StartScreen = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (width < 100) {
      const inter = setInterval(() => {
        setWidth(width + 0.2);
      }, 10);
      return () => clearInterval(inter);
    } else {
      navigate("/pick-game");
    }
  }, [width, navigate]);

  return (
    <div className="h-screen fixed w-full">
      <div className="absolute flex flex-col left-1/2 -translate-x-1/2 bottom-[100px] items-center">
        <h3 className="pinkTextColor font-bold text-[54px]">
          {parseInt(width)}%
        </h3>
        <h5 className="text-white text-[24px] -mt-2">Loading...</h5>
        <div
          className="w-[900px] h-[10px] flex rounded-full mt-8"
          style={{
            background: "linear-gradient(180deg, #292929 0%, #0E0508 100%)",
          }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${width}%`,
              background: "linear-gradient(180deg, #FFCDCC 0%, #FF989F 100%)",
            }}
          ></div>
        </div>
      </div>
      <img
        src="./assets/start.png"
        alt="start-screen"
        className="w-full h-screen"
      />
    </div>
  );
};

export default StartScreen;