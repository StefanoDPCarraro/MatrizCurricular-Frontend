export interface Requirements {
  requisiteType: "SPECIAL" | "PREREQUISITE" | "COREQUISITE";
  courseSubjectCreditCode: string;
  courseSubjectCurriculumCode: string;
  preRequirementCreditCode: string;
  preRequirementCurriculumCode: string;
}
