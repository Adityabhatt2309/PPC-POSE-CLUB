import React from "react";
import nftOne from "../../images/Nft-one.png";
import nftTwo from "../../images/NFT-second.png";
import nftThird from "../../images/NFT-Third.png";
import nftFourth from "../../images/NFT-fourth.png";
import nftFifth from "../../images/NFT-Fifth.png";
import nftSix from "../../images/NFT-sixth.png";
import nftSeventh from "../../images/NFT-7.png";
import nftEight from "../../images/NFT-8.png";

const SiderOne = () => {
  return (
    <div className="slider-grid-wrapper">
      <img src={nftOne} alt="nft-one" className="img" />
      <img src={nftTwo} alt="nft-second" className="img" />
      <img src={nftThird} alt="nft-third" className="img" />
      <img src={nftFourth} alt="nft-forth" className="img" />
      <img src={nftFifth} alt="nft-fifth" className="img" />
      <img src={nftSix} alt="nft-sixth" className="img" />
      <img src={nftSeventh} alt="nft-seventh" className="img" />
      <img src={nftEight} alt="nft-eight" className="img" />
    </div>
  );
};

export default SiderOne;
