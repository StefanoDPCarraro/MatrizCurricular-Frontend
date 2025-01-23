import React from "react";
import "./Header.scss";
import PucrsLogo from "@components/PucrsLogo";

const Header: React.FC = () => {
  return (
    <>
      <div className="header-container">
        <div className="up-bar"></div>
        <div className="pucrs-logo-container">
          <PucrsLogo />
        </div>
        <div className="infos">
          <p>casinha e infos</p>
        </div>
      </div>
    </>
  );
};

export default Header;
