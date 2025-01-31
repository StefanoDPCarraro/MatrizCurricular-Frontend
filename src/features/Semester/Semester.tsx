import React from "react";
import Card from "@components/Card";
import "./Semester.scss";
//import { requirements } from "@mocks/Requirements";
import { Subject } from "@dtos/SubjectDTO";

export interface SemesterProps {
  subjects: Subject[];
  semester: number;
}

const Semester: React.FC<SemesterProps> = ({ subjects, semester }) => {
  return (
    <>
      <div className="semester-container">
        <p className="semester-title">Semestre {semester}</p>
        {subjects.map((sub) => (
          <Card
            creditCode={sub.creditCode}
            required={sub.requirements}
            requirements={sub.required}
            onClick={() => {
              console.log("clicked");
            }}
            semester={sub.semester}
          >
            {sub.name}
          </Card>
        ))}
      </div>
    </>
  );
};

export default Semester;
