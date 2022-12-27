import React from "react";
import PPCLOGO from "../images/PPC_LOGO.svg";

const Nav = () => {
  return (
    <div className="navbar">
      <img src={PPCLOGO} alt="ppc logo" className="ppc-logo" />
    </div>
  );
};

export default Nav;
