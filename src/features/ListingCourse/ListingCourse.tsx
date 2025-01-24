import React from "react";
import "./ListingCourse.scss";
import ListingHeader from "@components/ListingHeader";
import ListingCourseCard from "@components/ListingCourseCard";
import { coursesTest } from "@mocks/Courses";

const ListingCourse: React.FC = () => {
  return (
    <>
      <ListingHeader></ListingHeader>

      {coursesTest.map((courses) => (
        <ListingCourseCard
          courseName={courses.name}
          semester={courses.semester}
          creditCode={courses.codicred}
        />
      ))}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default ListingCourse;
