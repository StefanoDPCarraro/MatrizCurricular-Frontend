import ListingHeader from "@components/ListingHeader";
import ListingCourseCard from "@components/ListingCourseCard";
import Header from "@features/Header/Header";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <ListingHeader></ListingHeader>
      <ListingCourseCard 
        courseName={"Administração: Administração de Empresas"}
        semester={8}
        creditCode={"255G"}
        >
        
        </ListingCourseCard>
    </>
  );
};
export default LandingPage;
