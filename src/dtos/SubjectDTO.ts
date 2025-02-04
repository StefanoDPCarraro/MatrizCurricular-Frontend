import { Requirements } from "./RequirementsDTO";

export interface Subject {
  creditCode: string;
  subjectName: string;
  numberSemester: number;
  positionRequirement: number | null;
  requirements: Requirements[];
  prerequired: Requirements[];
  description: string;
}