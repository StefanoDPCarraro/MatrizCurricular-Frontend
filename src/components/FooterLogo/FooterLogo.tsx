import React from "react";
import "./FooterLogo.scss";
import Logo from "@components/Logo";

const FooterLogo: React.FC = () => {
  return (
    <>
      <div className="footer-logo-container">
        <div className="footer-logo-logos">
          <div className="footer-marista-logo">
            <Logo
              src="src\assets\MaristaLogo.png"
              alt="Marista Logo"
              linkTo="https://redemarista.org.br/"
            ></Logo>
          </div>
          <div className="footer-pucrs-logo">
            <Logo
              src="src\assets\Pucrslogo.png"
              alt="Pucrs Logo"
              linkTo="https://www.pucrs.br/"
            ></Logo>
          </div>
        </div>
        <div className="footer-logo-text">
          <p>Av. Ipiranga, 6681 Partenon - Porto Alegre / RS </p>
          <p>CEP: 90619-900 - Fone: (51) 3320.3500 </p>
        </div>
      </div>
    </>
  );
};

export default FooterLogo;
