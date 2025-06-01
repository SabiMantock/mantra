export type InputProps = {
  label: string;
  placeholder?: string;
  value: string | Date | number | boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  className?: string;
  name?: string;
  type: 'checkbox' | 'number' | 'text' | 'select' | 'date';
  categories?: string[];
  error?: {
    message: string;
  };
};

export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  isIcon?: boolean;
};

export type FormProps = {
  className?: string;
};

export type FormData = {
  amount: number;
  category: string;
  description: string;
  date: string | Date;
  repeat: string | boolean;
  type: 'expense' | 'income';
};

export type SigninFormData = {
  email?: string;
  password?: string;
  remember?: boolean;
};

export type SignupFormData = {
  email?: string;
  password?: string;
  agreement?: boolean;
  fullName?: string;
};
