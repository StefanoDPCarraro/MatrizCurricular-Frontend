import React from "react";
import "./Footer.scss";
import FooterLogo from "@components/FooterLogo";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-bar"> </div>
        <div className="footer-components">
          <div className="footer-logos">
            <FooterLogo></FooterLogo>
          </div>
          <div className="footer-infos>"></div>
          <div className="footer-qr-code"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
