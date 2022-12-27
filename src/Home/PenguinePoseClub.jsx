import React from "react";
import IGLOO from "../images/igloo-Fusionadas.svg";
import scuba from "../images/scuba.svg";

const PenguinePoseClub = () => {
  return (
    <>
      <div className="penguine-pose-wrapper">
        <div className="text-wrapper">
          <h1>Welcome to the Igloo, inside the penguine posse club</h1>
          <p>
            Penguin Posse Club NFTs (PPC) is a collection of unique digital
            collectibles raising the collective human potential for good on the
            Polygon (PoS) blockchain.
          </p>
          <p>
            Each Penguin Posse NFT doubles as your VIP pass to The Igloo: a club
            with members-only benefits, including participating in and voting on
            our Donation Fund on a quarterly basis, networking & relationship
            building with other members to build cool projects together, and
            access to resources to learn how to become better humans that
            produce noble deeds throughout the world.{" "}
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
          <h1>Why the free mint ?</h1>
          <p>
            Because we launched this club to do good in the world and while
            money can certainly help, far more impact can be made by individuals
            uniting to help each other build the lives they want for themselves,
            their families and their friends.
          </p>
          <p>
            Sure over time, memberships will be bought and sold on secondary
            markets and when that happens, we can do even more good through
            royalties accumulated in our Donation Fund .
            <p>
              5% royalties on the Collection 2.5% goes to a donation fund.
              Quarterly, the community votes on where we donate through propsale
              and governance structure. Each Penguin = l Vote 2.5% goes to
              purchasing Guard for the Penguin Treasury. Guardian Token (GUARD)
              is the treasury asset of choice and also gives the penguin project
              voting power on the direction of the Guard FDN ecosystem which
              will help amplify the positive impact we can have.
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default PenguinePoseClub;
