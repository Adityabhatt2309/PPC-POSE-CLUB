import React from "react";
const Hero = ({ openModal }) => {
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
            Connect wallet
          </button>
          <button className="btn">How to buy</button>
          <button className="btn">New to crypto</button>
        </div>
      </div>
      <div className="hero-penguins"></div>
    </div>
  );
};

export default Hero;
