import React, { useEffect, useState } from "react";
import Header from "@features/Header/Header";
import "./Matriz.scss";
import Semester from "@features/Semester/Semester";
import { MatrizProvider } from "@context/MatrizContext";
import { getSubjectsByCurriculumCode } from "@api/axios";
import { Subject } from "@dtos/SubjectDTO";
import { useLocation, useParams } from "react-router-dom";

const Matriz: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const {courseName, curriculumCode } = useParams<{courseName: string, curriculumCode: string }>();

  const location = useLocation();
  const semester = location.state?.semester || "Não informado";
  const semesters = Array.from({ length: semester }, (_, i) => i + 1);


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!curriculumCode) {
          throw new Error("Curriculum code is undefined");
        }
        const data = await getSubjectsByCurriculumCode(curriculumCode);
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
    return (<> <Header course={`${courseName} - ${curriculumCode}`} />
      < p > Carregando...</p >
    </>)
  }

  return (
    <MatrizProvider>
      {" "}
      {/* <-- Envolvi tudo com o Provider */}
      <Header course={`${courseName} - ${curriculumCode}`} />
      <div className="matriz-container">
        <div className="matriz-semesters">
          {semesters.map((sem) => {
            const filteredSubjects = subjects.filter(
              (sub) => sub.numberSemester === sem
            );

            return (
              <React.Fragment key={sem}>
                <Semester subjects={filteredSubjects} semester={sem} />
                {sem !== semester && (
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
