import React from "react";

export interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt}></img>
    </>
  );
};

export default Logo;
