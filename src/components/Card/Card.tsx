import { Subject } from "@dtos/SubjectDTO";
import "./Card.scss";
import RequisitesBanner from "@components/RequisitesBanner";

export interface CardProps {
  children?: String;
  onClick?: VoidFunction;
  requirement: Subject[];
  required: Subject[];
  creditCode: String;
}

const Card: React.FC<CardProps> = ({
  children,
  onClick,
  requirement,
  required,
  creditCode
}) => {
  return (
    <>
      <div className="component-card-container">
        <div className="component-card-required-container">
          <RequisitesBanner subjects={required} variant="required">
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
          <RequisitesBanner subjects={requirement} variant="requirement">
            PRE
          </RequisitesBanner>
        </div>
      </div>
    </>
  );
};

export default Card;
