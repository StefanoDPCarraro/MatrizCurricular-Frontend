import React from "react";
import "./FooterQRCode.scss";
import Logo from "@components/Logo";

const FooterQRCode: React.FC = () => {
   return (
      <>
         <div className="footer-qrcode-container">
            <Logo
               src="src\assets\QR.png"
               alt="QR Code"
               linkTo="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjE=">
            </Logo>
         </div>
      </>
   );
};

export default FooterQRCode;