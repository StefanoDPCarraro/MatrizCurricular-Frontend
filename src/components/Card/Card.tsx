import CardModal from "@components/CardModal/CardModal";
import { useContext, useState } from "react";
import { MatrizContext } from "@context/MatrizContext";
import "./Card.scss";
import RequisitesBanner from "@components/RequisitesBanner";
import { Requirements } from "@dtos/RequirementsDTO";

export interface CardProps {
  children?: string;
  onClick?: VoidFunction;
  requirements: Requirements[];
  required: Requirements[];
  creditCode: string;
  semester: number;
  description: string;
  positionRequirement?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  onClick,
  requirements,
  required,
  creditCode,
  semester,
  description,
  positionRequirement
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const context = useContext(MatrizContext);
  const [isHovered, setIsHovered] = useState(false);

  if (!context) return null;

  const { selectedSubject, setSelectedSubject } = context;

  const handleMouseEnter = () => {
    setIsHovered(true);
    setSelectedSubject({
      creditCode,
      name: children || "",
      requirements,
      required
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSelectedSubject(null);
  };

  const isRelated =
    !selectedSubject ||
    selectedSubject.creditCode === creditCode ||
    selectedSubject.name === children ||
    selectedSubject.requirements.some((req) => req.creditCode === creditCode) ||
    selectedSubject.required.some((req) => req.crediCode === creditCode) ||
    requirements.some(
      (req) => req.courseSubjectCreditCode === selectedSubject.creditCode
    ) ||
    required.some(
      (req) => req.preRequirementCreditCode === selectedSubject.creditCode
    );

  const isPrerequisite = requirements.some(
    (req) => req.courseSubjectCreditCode === selectedSubject?.creditCode
  );
  const isRequisite = required.some(
    (req) => req.preRequirementCreditCode === selectedSubject?.creditCode
  );

  return (
    <>
      <div
        className={`component-card-container 
        ${isRelated ? "related" : "unrelated"}
        ${isRequisite ? "related-requisite" : ""}
        ${isPrerequisite ? "related-prerequisite" : ""}
      `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleOpenModal}
      >
        <div className="component-card-required-container">
          <RequisitesBanner requirements={required} variant="required">
            PRE
          </RequisitesBanner>
        </div>
        <div className="component-card-subject-credit-container">
          <div className="component-card-subject-container">
            <p className="subject-text">{children}</p>
          </div>
          <div className="component-card-credit-container">
            <p className="credit-text">{creditCode}</p>
          </div>
        </div>
        <div className="component-card-requirement-container">
          <RequisitesBanner requirements={requirements} variant="requirement">
            LIB
          </RequisitesBanner>
        </div>
      </div>
      <CardModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        name={`${children}`}
        creditCode={`${creditCode}`}
        semester={semester}
        required={required}
        requirement={requirements}
        description={description}
        positionRequirement={positionRequirement}
      />
    </>
  );
};

export default Card;
