import React from "react";
import nftSeventeen from "../../images/nft-17.png";
import nftEighteen from "../../images/nft-18.png";
import nftNineteen from "../../images/19.png";
import nftTwenty from "../../images/nft-20.png";
import nftTwentyOne from "../../images/nft-21.png";
import nftTwentyTwo from "../../images/nft-22.png";
import nftTwentyThree from "../../images/nft-23.png";
import nftTwentyFour from "../../images/nft-24.png";

const SiderThree = () => {
  return (
    <div className="slider-grid-wrapper">
      <img src={nftSeventeen} alt="nft-seventeen" className="img" />
      <img src={nftEighteen} alt="nft-ten" className="img" />
      <img src={nftNineteen} alt="nft-then" className="img" />
      <img src={nftTwenty} alt="nft-forth" className="img" />
      <img src={nftTwentyOne} alt="nft-fifth" className="img" />
      <img src={nftTwentyTwo} alt="nft-sixth" className="img" />
      <img src={nftTwentyThree} alt="nft-seventh" className="img" />
      <img src={nftTwentyFour} alt="nft-eight" className="img" />
    </div>
  );
};

export default SiderThree;
