import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import PenguinePoseClub from "./PenguinePoseClub";
import FAQ from "./FAQ";
import HowToBuy from "./HowToBuy";
import BuyYourPPCNFTS from "./BuyYourPPCNFTS";
import Footer from "./Footer";
import PenguinePoseClubNFTs from "./poseClubNftsSlider/PenguinePoseClubNFTs";
import PenguineCharacterstics from "./PenguineCharacterstics";
import Modal from "react-modal";
import metamask from "../images/MetaMask.png";
import connectWallet from "../images/WalletConnect.png";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#202932",
    border: "2px solid #1668D4",
  },
  overlay: {
    background: "rgba(0,0,0,0.7)",
  },
};
const modalWrapper = {
  background: "#202932",
  width: "300px",
  height: "300px",
};

const Home = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [whichModal, setWhichModal] = useState("mint");

  const handleWhichModal = (which) => {
    setWhichModal(which);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setWhichModal("mint");
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* {whichModal === "mint" && (
          <div style={modalWrapper}>
            <div
              style={{
                background: "#1668D4",
                padding: "10px",
                display: "flex",
                justifyContent: "space-evenly",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <div>Buy your NFTs</div>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "30x",
                  padding: "5px",
                }}
                onClick={closeModal}
              >
                <RxCross2 style={{ fontSize: "24px" }} />
              </button>
            </div>
            <div style={{ padding: "50px 10px", textAlign: "center" }}>
              <h3 style={{ textTransform: "uppercase" }}>total Minted 451</h3>
              <div
                style={{
                  border: "2px solid #1668D4",
                  margin: "10px auto",
                  padding: "10px",
                }}
              >
                <p style={{ fontSize: "12px", padding: "5px" }}>
                  Connet your wallet and get started
                </p>
                <button
                  className="btn-modal"
                  onClick={() => handleWhichModal("wallet")}
                >
                  Connet Wallet
                </button>
              </div>
            </div>
          </div>
        )} */}

        {/* {whichModal === "wallet" && (
          <div style={modalWrapper}>
            <div
              style={{
                background: "#1668D4",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <div>Select your wallet</div>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "30x",
                  padding: "5px",
                }}
                onClick={closeModal}
              >
                <RxCross2 style={{ fontSize: "24px" }} />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "200px",
              }}
            >
              <img
                src={metamask}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #1668D4",
                }}
              />
              <img
                src={connectWallet}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #1668D4",
                  backgroundSize: "contain",
                }}
              />
            </div>
          </div>
        )} */}

        {/* if account */}
        <div style={modalWrapper}>
          <div
            style={{
              background: "#1668D4",
              padding: "10px",
              display: "flex",
              justifyContent: "space-evenly",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "14px",
              alignItems: "center",
            }}
          >
            <div>Select Below</div>
            <button
              style={{
                background: "transparent",
                border: "none",
                fontSize: "30x",
                padding: "5px",
              }}
              onClick={closeModal}
            >
              <RxCross2 style={{ fontSize: "24px" }} />
            </button>
          </div>
          <div style={{ padding: "50px 10px", textAlign: "center" }}>
            <div
              style={{
                border: "2px solid #1668D4",
                margin: "10px auto",
                padding: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  padding: "5px",
                }}
              >
                Connet Wallet
              </p>
              <p>xxxxxxxxxxxxxxxxxxxxxxx</p>
              <button className="btn-modal">Buy with matic</button>
            </div>
          </div>
        </div>
      </Modal>
      <Nav />
      <Hero openModal={openModal} />
      <PenguinePoseClub />
      <PenguinePoseClubNFTs />
      <PenguineCharacterstics />
      <HowToBuy />
      <BuyYourPPCNFTS />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
