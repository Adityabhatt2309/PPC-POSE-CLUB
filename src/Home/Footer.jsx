import React from "react";
import logo from "../images/PPC_LOGO.svg";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="footer-logo" className="footer-logo" />
      </div>
      <div>
        <div className="smart-contract">
          <p>
            Verified smart contract:
            <a
              style={{
                textDecoration: "none",
                fontFamily: "poppins",
                display: "block",
              }}
              href="https://polygonscan.com/address/0xfD89fc676f2538f10523b9e43A8e76F74f03F44E"
              target="_blank"
            >
              {process.env.REACT_APP_NFT_ADDRESS}{" "}
            </a>
          </p>
          <p
            style={{
              color: "lightgray",
              fontFamily: "Poppins",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            All right reserved. Penguin Posse Club, LLC TM 2022
          </p>
        </div>
      </div>
      <div>
        <a href="https://www.instagram.com/penguinposseclub/ " target="_blank">
          <FaInstagram className="socials" />
        </a>
        <a href="https://discord.gg/w5f2R675eX" target="_blank">
          <FaDiscord className="socials" />
        </a>
        <a href="https://twitter.com/thepenguinposse" target="_blank">
          <FaTwitter className="socials" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
