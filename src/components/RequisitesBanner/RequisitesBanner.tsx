import { Subject } from "@dtos/SubjectDTO";
import { ReactElement } from "react";

export interface RequisitesBannerProps{
    subjects: Subject[];
    children?: ReactElement;
}

const RequisitesBanner: React.FC<RequisitesBannerProps> = ({subjects, children}) =>{
    if(subjects.length === 0){
        return(
            <div className="component-requisite-container"></div>
        )
    }
    return(
        <div className="component-requisite-container">
            <div className="component-requisite-banner">
                {children}
            </div>
        </div>
    )
}

export default RequisitesBanner;