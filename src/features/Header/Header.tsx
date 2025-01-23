import React from "react";
import "./Header.scss";
import Logo from "@components/Logo";

export interface HeaderProps {
  course?: string;
}

const Header: React.FC<HeaderProps> = ({ course }) => {
  return (
    <>
      <div className="header-container">
        <div className="up-bar"></div>
        <div className="pucrs-logo-container">
          <Logo src="src\assets\PUCRS.png" alt="PUCRS Logo" />
        </div>
        <div className="infos-container">
          <div className="infos-layout">
            <div className="house">
              <Logo src="src\assets\House.png" alt="House" />
            </div>
            <div className="arrow">
              <Logo src="src\assets\Arrow.PNG" alt="Arrow" />
            </div>
            <div className="text">
              <p>Matrizes Curriculares</p>
            </div>
            {course && (
              <>
                <div className="arrow">
                  <Logo src="src/assets/Arrow.PNG" alt="Arrow" />
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
