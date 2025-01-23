import React from "react";
import { Link } from "react-router-dom";

export interface LogoProps {
  src: string;
  alt: string;
  linkTo?: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt, linkTo }) => {
  if (linkTo) {
    return (
      <>
        <Link to={linkTo}>
          <img src={src} alt={alt}></img>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <img src={src} alt={alt}></img>
      </>
    );
  }
};

export default Logo;
