import React, { useEffect, useState } from "react";
import Header from "@features/Header/Header";
import "./Matriz.scss";
import Semester from "@features/Semester/Semester";
//import { subjects } from "@mocks/Subjects";
import { MatrizProvider } from "@context/MatrizContext";
import { getSubjectsByCurriculumCode } from "@api/axios";
import { Subject } from "@dtos/SubjectDTO";

const Matriz: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const numberSemesters = 8;
  const semesters = Array.from({ length: numberSemesters }, (_, i) => i + 1); // Cria [1, 2, 3, ..., 8]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSubjectsByCurriculumCode("98AL");
        const sortedSubjects = [...(Array.isArray(data) ? data : [data])]
        .sort((a, b) => a.subjectName.localeCompare(b.subjectName));
        setSubjects(sortedSubjects);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (<> <Header course="Engenharia de Software - 98AL" />
        < p > Carregando...</p >
    </>)
  }

  return (
    <MatrizProvider>
      {" "}
      {/* <-- Envolvi tudo com o Provider */}
      <Header course="Engenharia de Software - 98AL" />
      <div className="matriz-container">
        <div className="matriz-semesters">
          {semesters.map((sem) => {
            const filteredSubjects = subjects.filter(
              (sub) => sub.numberSemester === sem
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
