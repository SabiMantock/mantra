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
};

export type FormProps = {
  className?: string;
  isExpense: boolean;
};

export type FormData = {
  amount: string | number;
  category: string;
  description: string;
  date: string | Date;
  repeat: string | boolean;
  type: 'expense' | 'income';
};
