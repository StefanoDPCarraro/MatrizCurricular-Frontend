import "./RequisitesBanner.scss";
import { Requirements } from "@dtos/RequirementsDTO";

export interface RequisitesBannerProps {
  requirements: Requirements[];
  children?: string;
  variant: "required" | "requirement";
}

const RequisitesBanner: React.FC<RequisitesBannerProps> = ({
  requirements,
  children,
  variant
}) => {
  if (requirements.length === 0) {
    //return <div className="component-requisite-container"></div>;
  } else if (variant === "required") {
    return (
      <div className="component-requisite-container">
        <div className="component-requisite-banner">
          <p className="requisite-text">{children}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="component-requirement-container">
        <div className="component-requirement-banner">
          <p className="requirement-text">{children}</p>
        </div>
      </div>
    );
  }
};

export default RequisitesBanner;
