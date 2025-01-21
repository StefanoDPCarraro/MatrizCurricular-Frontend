import { Subject } from '@dtos/SubjectDTO';
import './Card.scss';
import RequisitesBanner from '@components/RequisitesBanner';

export interface CardProps {
  children?: String;
  onClick?: VoidFunction;
  requirement: Subject[];
  required: Subject[];
}

const Card: React.FC<CardProps> = ({ children, onClick, requirement, required}) => {
  return (
    <>
      <div className='component-card-container'>
        <div className='component-card-required-container'>
          <RequisitesBanner subjects={required}>
            <p className='required-label'>REQ</p>
          </RequisitesBanner>
        </div>
        <div onClick={onClick} >
          {children}
        </div>
        <div className='component-card-requirement-container'>
          <RequisitesBanner subjects={requirement}>
            <p className='requirement-label'>PRE</p>
          </RequisitesBanner>
        </div>
      </div>
    </>
  );
};

export default Card;
