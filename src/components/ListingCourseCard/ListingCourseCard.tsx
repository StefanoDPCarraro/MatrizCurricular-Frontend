import React from "react";
import "./ListingCourseCard.scss";

export interface ListingCourseCard{
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
        <div className="divisor"></div>
        <div className="component-listing-card-container">
            <p className="course-name"> {courseName}</p>
            <p className="semester-duration"> {semester + " semestres"}</p>
            <p className="credit-text"> {creditCode}</p>
        </div>
        <div className="divisor"></div>
        <div className="component-listing-card-container">
            <p className="course-name"> {courseName}</p>
            <p className="semester-duration"> {semester + " semestres"}</p>
            <p className="credit-text"> {creditCode}</p>
        </div>
        <div className="divisor"></div>
        <div className="component-listing-card-container">
            <p className="course-name"> {courseName}</p>
            <p className="semester-duration"> {semester + " semestres"}</p>
            <p className="credit-text"> {creditCode}</p>
        </div>
        <div className="divisor"></div>
        <div className="component-listing-card-container">
            <p className="course-name"> {courseName}</p>
            <p className="semester-duration"> {semester + " semestres"}</p>
            <p className="credit-text"> {creditCode}</p>
        </div>
        <div className="divisor"></div>
        <div className="component-listing-card-container">
            <p className="course-name"> {courseName}</p>
            <p className="semester-duration"> {semester + " semestres"}</p>
            <p className="credit-text"> {creditCode}</p>
        </div>
        </>
    );
};

export default ListingCourseCard;