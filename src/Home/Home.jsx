import React, { useState, useEffect, useRef } from "react";
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
import opensea from "../images/opensea.svg";

// web3 related imports
import MetaMaskOnboarding from "@metamask/onboarding";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "../utils/connector";
import Web3 from "web3";

import useMinterContract from "../hooks/useMinterContract";
import useNftContract from "../hooks/useNFTContract";

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
  width: "350px",
  height: "350px",
};

const Home = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [whichModal, setWhichModal] = useState("mint");
  const [buyWithMatic, setBuyWithMatic] = useState(true);
  const [count, setCount] = useState(0);

  const minterContract = useMinterContract();
  const nftContract = useNftContract();

  const [totalMinted, settotalMinted] = useState("0");
  const [round, setround] = useState("");
  const [price, setPrice] = useState(0);
  const [remainingNfts, setremainingNfts] = useState(0);
  const [isdisable, setisDisable] = useState(false);
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleWhichModal = (which) => {
    setWhichModal(which);
  };
  const HandleBuywithMatic = () => {
    setBuyWithMatic(false);
  };

  const { connector, account, activate, error, active, chainId, deactivate } =
    useWeb3React();

  useEffect(() => {
    async function fetchGlobalData() {
      const totalMinted = await nftContract.methods.totalSupply().call();
      settotalMinted(totalMinted);

      const nftprice = await minterContract.methods.price().call();
      setPrice(Number(nftprice) / 10 ** 18);
    }
    fetchGlobalData();
  }, []);

  useEffect(() => {
    async function fetchUserData() {
      const remainingcontri = await minterContract.methods
        .remainigContribution(account)
        .call();
      const p = await minterContract.methods.price().call();
      const pricee = Number(p) / 10 ** 18;
      const remainingnfts = Number(remainingcontri) / 10 ** 18 / pricee;
      setremainingNfts(remainingnfts);
    }
    fetchUserData();
  }, [account]);

  const decrementCountHandler = () => {
    if (count === 0) {
      return 0;
    }
    setCount(count - 1);
  };

  const IncrementCountHandler = () => {
    if (count >= remainingNfts) {
      return remainingNfts;
    } else {
      setCount(count + 1);
    }
  };

  const logout = () => {
    if (connector === walletconnect) {
      connector.close();
    } else if (connector === injected) {
      deactivate();
      localStorage.setItem("shouldEggerConnect", "false");
      localStorage.removeItem("connectedWallet");
      // history.push("/");
    }
  };

  const mint = async () => {
    try {
      setisDisable(true);
      await minterContract.methods.trade(count).send({
        from: account,
        value: Web3.utils.toWei((count * price).toString(), "ether"),
      });
      setisDisable(false);
      alert("Tx Success");
    } catch (e) {
      setisDisable(false);
      alert("Tx Fail");
      console.error("Error", e);
    }
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
    setBuyWithMatic(true);
    setCount(0);
  }

  const [activatingConnector, setActivatingConnector] = useState();
  const onboarding = useRef();

  const onConnectWithMetamaskClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      setActivatingConnector(injected);
      activate(injected, undefined, true)
        .then(() => {
          //console.log("Connected successfully");
        })
        .catch(() => {
          // setTried(true);
        });
      localStorage.setItem("connectedWallet", "metamask");
    } else {
      onboarding.current.startOnboarding();
    }
  };

  const onConnectWithWalletConnect = () => {
    setActivatingConnector(walletconnect);
    activate(walletconnect, undefined, true).catch((err) => {
      setActivatingConnector();
      walletconnect.walletConnect1Provider = undefined;
      localStorage.removeItem("connectedWallet");
      if (err) {
        window.location.reload(false);
      }
    });
    localStorage.setItem("connectedWallet", "walletConnect");
  };

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account && account.length > 0) {
        onboarding.current.stopOnboarding();
      }
    }
  }, [account]);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {!account && whichModal === "mint" && (
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
              <div>Mint your NFTs</div>
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
              <h3 style={{ textTransform: "uppercase" }}>
                Total Minted {totalMinted}
              </h3>
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
        )}

        {!account && whichModal === "wallet" && (
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
                onClick={onConnectWithMetamaskClick}
              />
              <img
                src={connectWallet}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #1668D4",
                  backgroundSize: "contain",
                }}
                onClick={onConnectWithWalletConnect}
              />
            </div>
          </div>
        )}

        {/* if account */}
        {account && buyWithMatic && (
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
                  Connected Wallet
                </p>
                <p>
                  {account.slice(0, 6)}....{account.slice(-6)}
                </p>
                <a
                  href="https://opensea.io/collection/penguin-posse-club"
                  target="_blank"
                  className="btn-modal"
                  style={{ display: "block" }}
                >
                  Buy on Opensea
                </a>
              </div>
              <button className="btn-modal" onClick={logout}>
                DISCONNECT
              </button>
            </div>
          </div>
        )}

        {!buyWithMatic && (
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
              <div>Mint with Matic</div>
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
                <div style={{ position: "relative" }}>
                  <input
                    type="number"
                    value={count}
                    onChange={(e) => {
                      setCount(e.target.valueAsNumber);
                    }}
                    style={{
                      background: "transparent",
                      border: "1px solid #1668D4",
                      padding: "10px",
                      fontSize: "20px",
                    }}
                  />
                  <button
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "15%",
                      background: "transparent",
                      border: "1px solid #1668D4",
                      padding: "5px",
                    }}
                    onClick={() => setCount(remainingNfts)}
                  >
                    Max
                  </button>
                </div>

                <div>
                  <button
                    className="btn-modal"
                    onClick={() => decrementCountHandler()}
                  >
                    -
                  </button>
                  <button
                    className="btn-modal"
                    onClick={() => IncrementCountHandler()}
                  >
                    +
                  </button>
                  <button
                    disabled={isdisable || count === 0}
                    className="btn-modal"
                    onClick={mint}
                  >
                    Mint Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <Nav />
      <Hero openModal={openModal} handleClickScroll={handleClickScroll} />
      <PenguinePoseClub />
      <PenguinePoseClubNFTs openModal={openModal} />
      <PenguineCharacterstics />
      <HowToBuy openModal={openModal} />
      <BuyYourPPCNFTS totalMinted={totalMinted} openModal={openModal} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
