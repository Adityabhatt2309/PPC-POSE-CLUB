import React from "react";

const HowToBuy = ({ openModal }) => {
  return (
    <div id="section-1" className="how-to-buy">
      <h1>How to Mint?</h1>
      <div className="grid-container">
        <div className="card">
          <div className="card-fusionadas connect-wallet"></div>
          <div className="card-text">
            <h3>Step 1</h3>
            <h3>Connet your wallet</h3>
            <p>
              Make sure you are on the Polygon Network and then click the
              “Connect Your Wallet” button to get started.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-fusionadas  wallet-fusionadas"></div>
          <div className="card-text">
            <h3>Step 2</h3>
            <h3>Select Your Wallet</h3>
            <p>
              To connect your wallet, you can choose between Metamask and
              WalletConnect.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-fusionadas  buy-matic"></div>
          <div className="card-text">
            <h3>Step 3</h3>
            <h3>Mint with matic</h3>
            <p>
              In order to mint your penguins, make sure you have MATIC in your
              wallet to cover the gas fees on the transaction.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-fusionadas  buy-nfts"></div>
          <div className="card-text">
            <h3>Step 4</h3>
            <h3>Mint NFTs</h3>
            <p>
              Finally, select the number of penguins you would like to mint by
              using the “+” and “-” signs and, voila… You are the proud owner of
              the most legit penguins on earth.
            </p>
          </div>
        </div>
      </div>
      <button className="btn" onClick={openModal}>
        Get Started
      </button>
    </div>
  );
};

export default HowToBuy;
