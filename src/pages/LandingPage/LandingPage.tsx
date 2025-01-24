import Header from "@features/Header/Header";
import React from "react";
import ListingCourse from "@features/ListingCourse";
import FooterInfo from "@components/FooterInfo";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <ListingCourse></ListingCourse>
      <FooterInfo></FooterInfo>
    </>
  );
};
export default LandingPage;
