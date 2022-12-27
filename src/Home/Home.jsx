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
const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
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
