import { ReactNode } from 'react';
import './Card.scss';

export interface CardProps {
  children?: ReactNode;
  onClick?: VoidFunction;
  disabled?: boolean;
}

const Card: React.FC<CardProps> = ({ children, onClick, disabled = false }) => {
  return (
    <>
      <div>
        <button onClick={onClick} disabled={disabled}>
          {children}
        </button>
      </div>
    </>
  );
};

export default Card;
