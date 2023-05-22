import React from "react";
import Modals from "../Modals";

const Layout = ({ children }) => {
  return (
    <div>
      <Modals />
      {children}
    </div>
  );
};

export default Layout;
