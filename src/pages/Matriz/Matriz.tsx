import React from "react";
import Header from "@features/Header/Header";
import "./Matriz.scss";
import Semester from "@features/Semester/Semester";
import { subjects } from "@mocks/Subjects";
import { MatrizProvider } from "@context/MatrizContext";

const Matriz: React.FC = () => {
  const numberSemesters = 8;
  const semesters = Array.from({ length: numberSemesters }, (_, i) => i + 1); // Cria [1, 2, 3, ..., 8]

  return (
    <MatrizProvider>
      {" "}
      {/* <-- Envolvi tudo com o Provider */}
      <Header course="Engenharia de Software - 98AL" />
      <div className="matriz-container">
        <div className="matriz-semesters">
          {semesters.map((sem) => {
            const filteredSubjects = subjects.filter(
              (sub) => sub.semester === sem
            );

            return (
              <React.Fragment key={sem}>
                <Semester subjects={filteredSubjects} semester={sem} />
                {sem !== numberSemesters && (
                  <div className="matriz-divisor"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </MatrizProvider>
  );
};

export default Matriz;
