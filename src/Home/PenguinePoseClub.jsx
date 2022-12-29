import React from "react";
import IGLOO from "../images/igloo-Fusionadas.svg";
import scuba from "../images/scuba.svg";

const PenguinePoseClub = () => {
  return (
    <>
      <div className="penguine-pose-wrapper">
        <div className="text-wrapper">
          <h1>WELCOME TO THE PENGUIN POSSE CLUB</h1>
          <p>
            Penguin Posse Club NFTs (PPC) is a collection of unique digital
            collectibles raising the collective human potential for good on the
            Polygon (PoS) blockchain.
          </p>
          <p style={{ marginTop: "10px" }}>
            Each Penguin Posse NFT doubles as your VIP pass to The Igloo: a club
            with members-only benefits, including participating in and voting on
            our Donation Fund on a quarterly basis, networking & relationship
            building with other members to build cool projects together, and
            access to resources to learn how to become better humans that
            produce noble deeds throughout the world.
          </p>
        </div>
        <div className="penguine-pose-image-wrapper">
          <img
            src={IGLOO}
            alt="igloo"
            style={{
              width: "70%",
              height: "100%",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
      <div className="penguine-pose-wrapper pose-wrapper-second">
        <div className="penguine-pose-image-wrapper">
          <img
            src={scuba}
            alt="igloo"
            style={{
              width: "70%",
              height: "100%",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="text-wrapper">
          <h1 style={{ textTransform: "uppercase" }}>Why the free mint ?</h1>
          <p>
            We launched the Penguin Posse Club to have a positive impact in the
            world. While money can certainly help, we believe that we can have a
            greater impact helping each other reach their goals and build a life
            of purpose for themselves, their family and the people around them.
          </p>
          <p style={{ margin: "10px auto" }}>
            The secondary market will bring in royalties that will be
            accumulated in the Donation Fund.
            <p style={{ margin: "10px auto" }}>
              The royalties are 5%. 2.5% goes to the Donation Fund. Every
              quarter, penguins holders will propose and vote on proposals to
              determine where we send the donation fund. The other 2.5% go to
              building a treasury in Guard which is our treasury asset of choice
              and will give the Penguin Posse Club governance/voting rights to
              participate in the Guard FDN ecosystem initiatives which will
              amplify the collective, positive impact we have.
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default PenguinePoseClub;
