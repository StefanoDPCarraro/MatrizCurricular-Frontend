import { Requirements } from "./RequirementsDTO";

export interface Subject {
  creditCode: string;
  name: string;
  semester: number;
  requirements: Requirements[];
  required: Requirements[];
}
