import { useWeb3React } from "@web3-react/core";
import React from "react";

const BuyYourPPCNFTS = ({ totalMinted, openModal }) => {
  const { account } = useWeb3React();
  return (
    <div className="buy-your-ppc">
      <div className="buy-your-ppc-wrapper">
        <div className="nft-wizard"></div>
        <div className="nft-wizard-text">
          <div>
            <h1>MINT Your Penguins:</h1>
            <p style={{ margin: "10px auto", fontFamily: "poppins" }}>
              Mint up to 100 penguins per wallet.{" "}
            </p>
            <p style={{ margin: "10px auto", fontFamily: "poppins" }}>
              Please note this is not a money making scheme or employment
              opportunity. We are building a community of like-minded penguins,
              mint your penguins below to join.
            </p>
          </div>
        </div>
      </div>
      <h3>Totatl minted: {totalMinted}</h3>
      <div className="btn-wrapper ppc-btn-wrapper">
        <button className="btn" onClick={openModal}>
          Mint now
        </button>
        {!account && (
          <button className="btn" onClick={openModal}>
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default BuyYourPPCNFTS;
