import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

const Hero = ({ openModal, handleClickScroll }) => {
  const { account } = useWeb3React();
  const [btnText, setbtnText] = useState("CONNECT WALLET");

  useEffect(() => {
    if (account) {
      setbtnText("BUY NOW");
    }
  });

  return (
    <div className="hero">
      <div className="hero-heading">
        {/* <div>
          <h1>Buy PPC NFTs</h1>
          <h1>Earlier and get</h1>
          <h1>Cheap as possible</h1>
        </div> */}
        <div className="btn-wrapper">
          <button className="btn" onClick={openModal}>
            {btnText}
          </button>
          <button className="btn" onClick={handleClickScroll}>
            How to buy
          </button>
          <button className="btn">New to crypto</button>
        </div>
      </div>
      <div className="hero-penguins"></div>
    </div>
  );
};

export default Hero;
