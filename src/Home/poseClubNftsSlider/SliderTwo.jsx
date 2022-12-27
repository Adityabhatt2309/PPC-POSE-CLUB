import React from "react";
import nftNine from "../../images/nft-9.png";
import nftTen from "../../images/nft-10.png";
import nftEleven from "../../images/nft11.png";
import nftTwelve from "../../images/nft-12.png";
import nftThirteen from "../../images/nft-13.png";
import nftFourteen from "../../images/nft-14.png";
import nftFifteen from "../../images/nft-15.png";
import nftSixteen from "../../images/nft-16.png";

const SiderTwo = () => {
  return (
    <div className="slider-grid-wrapper">
      <img src={nftNine} alt="nft-Nine" className="img" />
      <img src={nftTen} alt="nft-ten" className="img" />
      <img src={nftEleven} alt="nft-then" className="img" />
      <img src={nftTwelve} alt="nft-forth" className="img" />
      <img src={nftThirteen} alt="nft-fifth" className="img" />
      <img src={nftFourteen} alt="nft-sixth" className="img" />
      <img src={nftFifteen} alt="nft-seventh" className="img" />
      <img src={nftSixteen} alt="nft-eight" className="img" />
    </div>
  );
};

export default SiderTwo;
