import React from "react";

const data = [
  {
    lable: "50 - 2,500",
    value: "",
  },
  {
    lable: "50 - 100,000",
    value: "",
  },
  {
    lable: "500 - 30,000",
    value: "",
  },
  {
    lable: "50.000 - 100,000",
    value: "",
  },
  {
    lable: "1,000 - 50,000",
    value: "",
  },
  {
    lable: "51,000 - 20,000",
    value: "",
  },
];

const Buttons = () => {
  return (
    <>
      <div className="flex-1 flex flex-wrap gap-3">
        {data.map((item, i) => (
          <button
            key={i}
            className="border border-[#FFCDCC] py-2 text-white rounded-[5px] w-[160px]"
          >
            {item.lable}
          </button>
        ))}
      </div>
      <button
        className="w-[90px] rounded-[5px] text-white"
        style={{
          background: "linear-gradient(180deg, #FF005C 0%, #7B005B 100%)",
        }}
      >
        Xác nhận
      </button>
    </>
  );
};

export default Buttons;
