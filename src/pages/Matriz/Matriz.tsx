import React, { useEffect, useState } from "react";
import Header from "@features/Header/Header";
import "./Matriz.scss";
import { MatrizProvider } from "@context/MatrizContext";
import { getSubjectsByCurriculumCode } from "@api/axios";
import { Subject } from "@dtos/SubjectDTO";
import { useParams } from "react-router-dom";
import Loader from "@components/Loader";
import Semester from "@features/Semester/Semester";

const Matriz: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { courseName, curriculumCode } = useParams<{
    courseName: string;
    curriculumCode: string;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!curriculumCode) {
          throw new Error("Código da matriz não definido");
        }
        const data = await getSubjectsByCurriculumCode(curriculumCode);
        const sortedSubjects = [...(Array.isArray(data) ? data : [data])].sort(
          (a, b) => a.subjectName.localeCompare(b.subjectName)
        );
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
    return (
      <>
        <Header course={`${courseName} - ${curriculumCode}`} />
        <div className="matriz-loader">
          <Loader />
        </div>
      </>
    );
  }

  // Pegando os semestres distintos ordenados
  const semesters = Array.from(
    new Set(subjects.map((sub) => sub.numberSemester))
  ).sort((a, b) => a - b);

  return (
    <MatrizProvider>
      <Header course={`${courseName} - ${curriculumCode}`} />
      <div className="matriz-container">
        <table className="matriz-table">
          <thead>
            <tr>
              {semesters.map((sem) => (
                <th key={sem}>Semestre {sem}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {semesters.map((sem) => {
                const filteredSubjects = subjects.filter(
                  (sub) => sub.numberSemester === sem
                );

                return (
                  <td key={sem}>
                    <Semester subjects={filteredSubjects} />
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </MatrizProvider>
  );
};

export default Matriz;
