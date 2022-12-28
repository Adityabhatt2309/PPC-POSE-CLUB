import React from "react";
import gifone from "../images/gif-one.gif";
import giftwo from "../images/gif-two.gif";
import gifthree from "../images/gif-three.gif";
const PenguineCharacterstics = () => {
  return (
    <div className="penguine-characterstics-wrapper">
      <h1>Penguin Characterstics</h1>
      <p>
        Each Penguin is unique and programmatically generated with the following
        possible traits, including attire, beaks, eye color, weapon, hair, feet,
        medallions and more.
      </p>
      <p>
        The Penguins are stored as ERC-721 tokens on the Polygon (PoS)
        blockchain and hosted on IPFS (see Record and Proof).
      </p>
      <div className="gif-wrapper">
        <img src={gifone} alt="gif-one" />
        <img src={giftwo} alt="gif-two" />
        <img src={gifthree} alt="gif-threee" />
      </div>
    </div>
  );
};

export default PenguineCharacterstics;
