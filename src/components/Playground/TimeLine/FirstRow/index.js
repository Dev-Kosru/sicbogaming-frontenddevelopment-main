import React from "react";

const FirstRow = () => {
  const data = [
    {
      name: "Xỉu",
      value: "4~10",
      color: "#00C3F3",
      num: "1:1",
      row: 1,
    },
    {
      name: "Lẻ",
      value: "",
      color: "#60BF3F",
      num: "1:1",
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
      ],
      num: "1:8",
      row: 4,
    },

    {
      cube: [
        {
          one: "1",
          two: "1",
          three: "1",
        },
        {
          one: "2",
          two: "2",
          three: "2",
        },
        {
          one: "3",
          two: "3",
          three: "3",
        },
        {
          one: "4",
          two: "4",
          three: "4",
        },
        {
          one: "5",
          two: "5",
          three: "5",
        },
        {
          one: "6",
          two: "6",
          three: "6",
        },
      ],
      num: "1:150",
      row: 2,
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
      ],
      num: "1:150",
      row: 4,
    },
    {
      name: "Chẵn",
      value: "",
      color: "#FEB00C",
      num: "1:1",
      row: 1,
    },
    {
      name: "Tài",
      value: "11~17",
      color: "#FF005C",
      num: "1:1",
      row: 1,
    },
  ];

  return (
    <div className="flex border border-[#7C1F58] rounded-[10px] h-[140px]">
      {data.map((item, index) => (
        <div
          key={index}
          className="h-full flex flex-col border-r border-r-[#7C1F58] last:border-r-0"
          style={{ width: `${(100 / 14) * item.row}%` }}
        >
          {item.row === 1 && (
            <>
              <div className="flex-1 flex flex-col items-center p-1">
                <p style={{ color: item.color }}>{item.name}</p>
                <p style={{ color: item.color }}>{item.value}</p>
              </div>
              <div className="h-[30px] flex justify-center items-center text-white text-[14px]">
                {item.num}
              </div>
            </>
          )}
          {item.row === 2 && (
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
          )}
          {item.row === 4 && (
            <>
              <div className="flex-1 flex flex-col items-center py-4 pb-0">
                <div className="flex justify-center">
                  {item.cube.map((c, i) => (
                    <div
                      className="flex flex-col gap-2 px-3 border-r border-r-[#7C1F58] last:border-r-0"
                      key={i}
                    >
                      <img src={`./assets/cube/${c.one}.png`} alt={c.one} />
                      <img src={`./assets/cube/${c.two}.png`} alt={c.two} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[30px] flex justify-center items-center text-white text-[14px]">
                {item.num}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FirstRow;
