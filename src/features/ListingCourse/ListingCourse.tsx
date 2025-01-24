import React from "react";
import "./ListingCourse.scss";
import ListingHeader from "@components/ListingHeader";
import ListingCourseCard from "@components/ListingCourseCard";

const ListingCourse: React.FC = () => {
  return (
    <>
      <ListingHeader></ListingHeader>
      <ListingCourseCard
        courseName={"Administração: Administração de Empresas"}
        semester={8}
        creditCode={"255G"}
      ></ListingCourseCard>
    </>
  );
};

export default ListingCourse;
