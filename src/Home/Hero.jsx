import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

const Hero = ({ openModal, handleClickScroll }) => {
  const { account } = useWeb3React();
  const [btnText, setbtnText] = useState("CONNECT WALLET");

  useEffect(() => {
    if (account) {
      setbtnText("Mint NOW");
    }
  });

  return (
    <div className="hero">
      <div className="hero-heading">
        <div className="btn-wrapper">
          <button className="btn" onClick={openModal}>
            {btnText}
          </button>
          
          <button className="btn">
            <a
              href="https://opensea.io/collection/penguin-posse-club"
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              Buy Now
            </a>
          </button>
        </div>
      </div>
      <div className="hero-penguins"></div>
    </div>
  );
};

export default Hero;
