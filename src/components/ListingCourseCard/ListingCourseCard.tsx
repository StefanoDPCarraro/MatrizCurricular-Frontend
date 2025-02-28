import React from "react";
import "./ListingCourseCard.scss";
import { useNavigate } from "react-router-dom";

export interface ListingCourseCard {
  courseName: string;
  curriculumCode: string;
  semester: number;
}

const ListingCourseCard: React.FC<ListingCourseCard> = ({
  courseName,
  semester,
  curriculumCode
}) => {
  const navigate = useNavigate();

  const goToMatriz = () => {
    navigate(
      `/matriz-curricular/${encodeURIComponent(courseName)}/${encodeURIComponent(curriculumCode)}`,
      {
        state: { semester: semester }
      }
    );
  };

  return (
    <>
      <div className="component-course-container">
        <div className="divisor"></div>
        <div className="component-listing-card-container">
          <p
            className="course-name"
            onClick={goToMatriz}
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "blue"
            }}
          >
            {courseName}
          </p>
          <p className="semester-duration"> {semester + " semestres"}</p>
          <p className="credit-text"> {curriculumCode}</p>
        </div>
      </div>
    </>
  );
};

export default ListingCourseCard;
