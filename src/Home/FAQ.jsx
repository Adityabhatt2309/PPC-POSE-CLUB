import React from "react";
import Accordion from "./faq/Accordion";

const FAQ = () => {
  return (
    <div className="faq-wrapper">
      <div>
        <h1 className="heading">FAQs</h1>
        <div style={{ padding: "20px" }}>
          <Accordion
            title="Q: Where are the penguins stored?"
            content="On IPFS. With IPFS, we get the benefits of decentralized, immutable and verifiable storage immediately. We can seamlessly push content into IPFS to create immutable links to the NFT's metadata and ensure the content is stored in perpetuity."
          />
          <Accordion
            title="Q: Are the penguins an ERC-721 token?"
            content="Yes. Penguins are ERC-721 and comply with ERC-721 standards. This means that they sit on the Polygon network and can be viewed on any ERC-721 marketplace if you want to view your Penguin Posse Club NFTs."
          />
          <Accordion
            title="Q: Do you charge any fees for transactions? "
            content="No, we do not charge any fees for the transactions on Penguin Posse Club NFTs. There is a 5% royalty on every sell, with 2.5% of the total going directly to our Donation Fund. There may be transaction fees charged in MATIC (gas for the transaction)."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
