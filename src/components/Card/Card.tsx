import CardModal from "@components/CardModal/CardModal";
import "./Card.scss";
import RequisitesBanner from "@components/RequisitesBanner";
import { Requirements } from "@dtos/RequirementsDTO";
import { useState } from "react";

export interface CardProps {
  children?: String;
  onClick?: VoidFunction;
  requirement: Requirements[];
  required: Requirements[];
  creditCode: String;
  semester: number;
}

const Card: React.FC<CardProps> = ({
  children,
  onClick,
  requirement,
  required,
  creditCode,
  semester
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="component-card-container" onClick={handleOpenModal}>
        <div className="component-card-required-container">
          <RequisitesBanner requirements={required} variant="required">
            REQ
          </RequisitesBanner>
        </div>
        <div className="component-card-subject-credit-container">
          <div className="component-card-subject-container">
            <p className="subject-text"> {children}</p>
          </div>
          <div className="component-card-credit-container">
            <p className="credit-text"> {creditCode}</p>
          </div>
        </div>
        <div className="component-card-requirement-container">
          <RequisitesBanner requirements={requirement} variant="requirement">
            PRE
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
        requirement={requirement}
      />
    </>
  );
};

export default Card;
