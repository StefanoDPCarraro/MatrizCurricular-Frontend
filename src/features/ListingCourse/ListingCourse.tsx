import React, { useEffect, useState } from "react";
import "./ListingCourse.scss";
import ListingHeader from "@components/ListingHeader";
import ListingCourseCard from "@components/ListingCourseCard";
//import { coursesTest } from "@mocks/Courses";
import { getCourse } from "@api/axios";
import { Course } from "@dtos/CourseDTO";

const ListingCourse: React.FC = () => {
  const [courses, setCourse] = useState<Course[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourse();
        const sortedCourses = [...(Array.isArray(data) ? data : [data])]
        .sort((a, b) => a.name.localeCompare(b.name));
        setCourse(sortedCourses);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ListingHeader></ListingHeader>

      {courses && courses.map((course) => (
        <ListingCourseCard
          courseName={course.name}
          semester={course.numberSemesters}
          creditCode={course.curriculumCode}
        />
      ))}

      {/* {coursesTest.map((course) => (
          <ListingCourseCard
            courseName={course.name}
            semester={course.semesters}
            creditCode={course.curriculumCode}
          />
        ))} */}
    </>
  );
};

export default ListingCourse;
