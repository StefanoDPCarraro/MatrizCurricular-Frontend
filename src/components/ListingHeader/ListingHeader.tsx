import React from "react";
import "./ListingHeader.scss";

const ListingHeader: React.FC = () => {
  return (
    <>
      <div className="header-listing-container">
        <div className="header-title">
          <h1>GRADUAÇÃO</h1>
        </div>
        <div className="header-layout">
          <div className="header-course-name">
            <p>NOME DO CURSO</p>
          </div>
          <div className="header-duration">
            <p>DURAÇÂO</p>
          </div>
          <div className="header-curriculum">
            <p>CURRÍCULO VIGENTE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingHeader;
