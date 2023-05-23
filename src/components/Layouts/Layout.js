import React, { useContext } from "react";
import Modals from "../Modals";
import { Context } from "../../App";

const Layout = ({ children }) => {
  const { modal } = useContext(Context);
  return (
    <div>
      {modal.active && <Modals />}
      {children}
    </div>
  );
};

export default Layout;
