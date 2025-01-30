import React from "react";
import "./FooterInfo.scss";
import Logo from "@components/Logo";

const FooterInfo: React.FC = () => {
  return (
    <>
      <div className="footer-info-container">
        <div className="menu-footer">
          <a
            href="https://portal.pucrs.br/ensino"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ensino
          </a>
          <a
            href="https://portal.pucrs.br/pesquisa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pesquisa
          </a>
          <a
            href="https://portal.pucrs.br/inovacao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inovação
          </a>
          <a
            href="https://portal.pucrs.br/saude"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saúde
          </a>
          <a
            href="https://portal.pucrs.br/servicos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Serviços
          </a>
          <a
            href="https://portal.pucrs.br/impacto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impacto
          </a>
          <a
            href="https://portal.pucrs.br/sobre-a-pucrs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sobre a PUCRS
          </a>
        </div>
        <div className="divisor"></div>
        <div className="menu-privacy">
          <a
            href="https://portal.pucrs.br/sobre-a-pucrs/etica-e-conformidade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ética e Conformidade
          </a>
          <a
            href="https://portal.pucrs.br/sobre-a-pucrs/politica-de-privacidade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidade
          </a>
          <a
            href="https://portal.pucrs.br/sobre-a-pucrs/estatuto-e-regimento/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Estatuto e Regimento
          </a>
        </div>

        <div className="divisor"></div>
        <div className="menu-social-media">
          <Logo
            src="src/assets/Linkedin Icon.png"
            alt="LinkedIn Logo"
            linkTo="https://www.linkedin.com/school/pucrs/"
          />
          <Logo
            src="src/assets/Instagram Icons.png"
            alt="Instagram Logo"
            linkTo="https://www.instagram.com/pucrs/"
          />
          <Logo
            src="src/assets/Facebook Icons.png"
            alt="Facebook Logo"
            linkTo="https://www.facebook.com/pucrs"
          />
          <Logo
            src="src/assets/Twitter Icons.png"
            alt="X Logo"
            linkTo="https://x.com/pucrs?mx=2"
          />
          <Logo
            src="src/assets/Tiktok Icons.png"
            alt="TikTok Logo"
            linkTo="https://www.tiktok.com/@pucrs"
          />
          <Logo
            src="src/assets/Youtube Icon.png"
            alt="YouTube Logo"
            linkTo="https://www.youtube.com/@PUCRSOficial"
          />
        </div>
      </div>
    </>
  );
};
export default FooterInfo;
