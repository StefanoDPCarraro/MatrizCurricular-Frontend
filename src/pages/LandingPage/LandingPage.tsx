import Header from "@features/Header/Header";
import React from "react";
import ListingCourse from "@features/ListingCourse";
import Footer from "@features/Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <ListingCourse></ListingCourse>
      <Footer></Footer>
    </>
  );
};
export default LandingPage;
