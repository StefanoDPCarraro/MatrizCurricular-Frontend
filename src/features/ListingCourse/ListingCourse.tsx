import React from "react";
import "./ListingCourse.scss";
import ListingHeader from "@components/ListingHeader";
import ListingCourseCard from "@components/ListingCourseCard";

export interface ListingCourse{
    courseName: String;
    creditCode: String;
    semester: number;
  }

  const ListingCourse: React.FC<ListingCourse> = ({
    courseName,
    semester,
    creditCode
  }) => {
    return (
    
<ListingHeader></ListingHeader>
<ListingCourseCard 
  courseName={"Administração: Administração de Empresas"}
  semester={8}
  creditCode={"255G"}
  >
  
  </ListingCourseCard>

  
</>