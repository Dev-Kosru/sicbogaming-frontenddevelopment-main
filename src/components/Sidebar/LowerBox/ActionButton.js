import React from "react";

const ActionButton = () => {
  return (
    <div className="flex justify-between sm:mt-0 md:mt-4 sm:mb-4 md:mb-10 sm:px-5 md:px-0">
      <button className="relative">
        <img src="./assets/sidebar/btn.png" alt="ok" />
        <img
          src="./assets/sidebar/done.png"
          alt="done"
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
      <button className="relative">
        <img src="./assets/sidebar/btn.png" alt="reset" />
        <img
          src="./assets/sidebar/re.png"
          alt="re"
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
      <button className="relative">
        <img src="./assets/sidebar/cancel.png" alt="cancel" />
        <img
          src="./assets/sidebar/cancel-icon.png"
          alt="cancel"
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
    </div>
  );
};

export default ActionButton;
