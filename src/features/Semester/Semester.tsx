import React from "react";
import Card from "@components/Card";
import "./Semester.scss";
import { requirements } from "@mocks/Requirements";
import { Subject } from "@dtos/SubjectDTO";

export interface SemesterProps {
  subjects: Subject[];
}

const Semester: React.FC<SemesterProps> = ({ subjects }) => {
  return (
    <>
      <div className="semester-container">
        {subjects.map((sub) => (
          <Card
            creditCode={sub.creditCode}
            required={requirements}
            requirement={requirements}
            onClick={() => {
              console.log("clicked");
            }}
          >
            {sub.name}
          </Card>
        ))}
      </div>
    </>
  );
};

export default Semester;
