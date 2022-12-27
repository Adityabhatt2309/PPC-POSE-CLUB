import React from "react";

const BuyYourPPCNFTS = ({totalMinted}) => {
  return (
    <div className="buy-your-ppc">
      <div className="buy-your-ppc-wrapper">
        <div className="nft-wizard"></div>
        <div className="nft-wizard-text">
          <div>
            <h1>Buy your ppc nfts</h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolorem
            tempora maxime, accusamus commodi vitae dolor nostrum molestias
            architecto deleniti veniam ullam beatae alias sint magni, voluptate
            enim doloribus vel.
          </div>
        </div> 
      </div>
      <h3>Totatl minted: {totalMinted}</h3>
      <div className="btn-wrapper ppc-btn-wrapper">
        <button className="btn">Mint now</button>
        <button className="btn">Connect</button>
      </div>
    </div>
  );
};

export default BuyYourPPCNFTS;
