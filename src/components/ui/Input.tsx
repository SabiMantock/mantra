import { InputProps } from '../../lib/types/types';

const Input = ({
  label,
  value,
  placeholder,
  name,
  type,
  onChange,
  className,
}: InputProps) => {
  return (
    <>
      {type === 'checkbox' && (
        <div className="min-w-72 m-2 flex gap-2 items-center">
          <input
            type="checkbox"
            value={value}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            className={className}
          />
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        </div>
      )}

      {type === 'number' && (
        <div className="min-w-72 m-2">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <div className="position-relative">
            <div className="h-6 w-6 absolute top-4 left-1 p-4">£</div>
            <input
              type="number"
              value={value}
              placeholder={placeholder}
              name={name}
              onChange={onChange}
              className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1 pl-6 box-border`}
            />
          </div>
        </div>
      )}

      {type === 'text' && (
        <div className="min-w-72 m-2">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1 box-border`}
          />
        </div>
      )}

      {type === 'select' && (
        <div className="min-w-72 m-2">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1 box-border`}
          >
            <option value="" disabled>
              {placeholder || 'Select an option'}
            </option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
          </select>
        </div>
      )}
    </>
  );
};

export default Input;
