import Header from "@features/Header/Header";
import React from "react";
import ListingCourse from "@features/ListingCourse";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <ListingCourse></ListingCourse>
      </>
  );
};
export default LandingPage;
