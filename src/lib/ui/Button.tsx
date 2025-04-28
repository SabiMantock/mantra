import { ButtonProps } from '../types/types';

const Button = ({ label, onClick, disabled, className, icon }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label || icon}
    </button>
  );
};

export default Button;
