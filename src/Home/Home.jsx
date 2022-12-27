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

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
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
        {/* <button onClick={closeModal}>close</button> */}
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
