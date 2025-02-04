import React from "react";
import "./ListingCourseCard.scss";
import { Link } from "react-router-dom";

export interface ListingCourseCard {
  courseName: String;
  creditCode: String;
  semester: number;
}

const ListingCourseCard: React.FC<ListingCourseCard> = ({
  courseName,
  semester,
  creditCode
}) => {
  return (
    <>
      <div className="component-course-container">
        <div className="divisor"></div>
        <div className="component-listing-card-container">
          <Link to="/matriz-curricular">
            <p className="course-name"> {courseName}</p>
          </Link>
          <p className="semester-duration"> {semester + " semestres"}</p>
          <p className="credit-text"> {creditCode}</p>
        </div>
      </div>
    </>
  );
};

export default ListingCourseCard;
