import { ButtonProps } from '../../lib/types/types';

const Button = ({
  label,
  onClick,
  disabled,
  className,
  icon,
  isIcon,
}: ButtonProps) => {
  return (
    <>
      {!isIcon ? (
        <button className={className} onClick={onClick} disabled={disabled}>
          {label}
        </button>
      ) : (
        <button
          className={`${className} flex justify-center items-center gap-2.5`}
          onClick={onClick}
          disabled={disabled}
        >
          <div>{icon}</div>
          <div>{label}</div>
        </button>
      )}
    </>
  );
};

export default Button;
