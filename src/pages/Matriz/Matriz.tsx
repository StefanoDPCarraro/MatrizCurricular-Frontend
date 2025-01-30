import React from "react";
import Header from "@features/Header/Header";
import "./Matriz.scss";
import Semester from "@features/Semester/Semester";
import { subjects } from "@mocks/Subjects";

const Matriz: React.FC = () => {
  const semesters = Array.from({ length: 8 }, (_, i) => i + 1); // Cria [1, 2, 3, ..., 8]

  return (
    <>
      <Header course="Engenharia de Software - 98AL"></Header>
      <div className="matriz-container">
        <div className="matriz-semesters">
          {semesters.map((sem) => {
            const filteredSubjects = subjects.filter(
              (sub) => sub.semester === sem
            );

            return (
              <React.Fragment key={sem}>
                <Semester subjects={filteredSubjects} semester={sem} />
                <div className="matriz-divisor"></div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Matriz;
