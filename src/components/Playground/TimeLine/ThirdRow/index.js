import React from "react";

const ThirdRow = () => {
  const data = [
    {
      num: "1:5",
      row: 1,
    },
    {
      cube: [
        {
          one: "1",
          two: "1",
        },
        {
          one: "2",
          two: "2",
        },
        {
          one: "3",
          two: "3",
        },
        {
          one: "4",
          two: "4",
        },
        {
          one: "5",
          two: "5",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
        {
          one: "6",
          two: "6",
        },
      ],
      row: 12,
    },
    {
      num: "1:5",
      row: 1,
    },
  ];

  return (
    <div className="flex border border-[#7C1F58] rounded-[10px] h-[140px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="h-full flex justify-center items-center border-r border-r-[#7C1F58] last:border-r-0"
          style={{ width: `${(100 / 14) * item.row}%` }}
        >
          {item.row === 1 && (
            <>
              <div className="p-2">
                <p className="text-white text-[14px]">{item.num}</p>
              </div>
            </>
          )}
          {item.row === 12 && (
            <>
              <div className="h-full flex items-center justify-center">
                {item.cube.map((c, i) => (
                  <div
                    className="flex flex-col justify-center gap-2 w-full p-5 py-3 border-r border-r-[#7C1F58] last:border-r-0"
                    key={i}
                  >
                    <img src={`./assets/cube/${c.one}.png`} alt={c.one} />
                    <img src={`./assets/cube/${c.two}.png`} alt={c.two} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ThirdRow;
