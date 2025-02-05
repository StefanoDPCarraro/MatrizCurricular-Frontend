import React from "react";
import "./Header.scss";
import Logo from "@components/Logo";
import PucrsLogo from "@assets/PUCRS.png";
import House from "@assets/House.png";
import Arrow from "@assets/Arrow.png";

export interface HeaderProps {
  course?: string;
}

const Header: React.FC<HeaderProps> = ({ course }) => {
  return (
    <>
      <div className="header-container">
        <div className="up-bar"></div>
        <div className="pucrs-logo-container">
          <Logo
            src={PucrsLogo}
            alt="PUCRS Logo"
            linkTo="https://portal.pucrs.br/ensino-e-pesquisa/"
          />
        </div>
        <div className="infos-container">
          <div className="infos-layout">
            <div className="house">
              <Logo src={House} alt="House" linkTo="/" />
            </div>
            <div className="arrow">
              <Logo src={Arrow} alt="Arrow" />
            </div>
            <div className="text">
              <p>Matrizes Curriculares</p>
            </div>
            {course && (
              <>
                <div className="arrow">
                  <Logo src={Arrow} alt="Arrow" />
                </div>
                <div className="text">
                  <p>{course}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
