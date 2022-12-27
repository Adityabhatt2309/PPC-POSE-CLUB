import React from "react";
import logo from "../images/PPC_LOGO.svg";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="footer-logo" className="footer-logo" />
      </div>
      <div>
        <div className="smart-contract">
          <p>Verified smart contract: xxxxxxxxxxxxxxxx</p>
          <p
            style={{
              color: "lightgray",
              fontFamily: "Poppins",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            All right reserved. Penguine Pose Club, LLC TM 2022
          </p>
        </div>
      </div>
      <div>
        <FaTelegramPlane className="socials" />
        <FaDiscord className="socials" />
        <FaTwitter className="socials" />
      </div>
    </div>
  );
};

export default Footer;
