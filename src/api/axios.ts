import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

export const getCourse = async () => {
  const response = await api.get("course/getAll");
  return response.data;
};

export const getSubjectsByCurriculumCode = async (curriculumCode: string) => {
  const response = await api.get(`/course-subject/${curriculumCode}`);
  return response.data;
};
