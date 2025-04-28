import { CardProps } from '../types/types';

const Card = ({ children, className }: CardProps) => {
  return <div className={className}>{children}</div>;
};

export default Card;
