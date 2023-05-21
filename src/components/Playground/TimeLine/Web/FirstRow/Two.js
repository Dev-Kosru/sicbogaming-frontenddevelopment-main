import React from "react";

const Two = ({ item }) => {
  return (
    <>
      <div className="flex-1 flex flex-col items-center p-4 pb-0">
        <div className="flex justify-center gap-2">
          {item.cube.map((c, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <img src={`./assets/cube/${c.one}.png`} alt={c.one} />
              <img src={`./assets/cube/${c.two}.png`} alt={c.two} />
              <img src={`./assets/cube/${c.three}.png`} alt={c.three} />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[30px] flex justify-center items-center text-white text-[14px]">
        {item.num}
      </div>
    </>
  );
};

export default Two;
