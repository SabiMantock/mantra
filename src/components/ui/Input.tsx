import { InputProps } from '../../lib/types/types';

const Input = ({
  label,
  value,
  placeholder,
  name,
  type,
  onChange,
  className,
  categories,
}: InputProps) => {
  return (
    <>
      {type === 'checkbox' && (
        <div className="min-w-72 mt-4 flex gap-2 items-center">
          <input
            type="checkbox"
            value={
              typeof value === 'boolean' || value instanceof Date
                ? String(value)
                : value
            }
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
        <div className="min-w-72 mt-4">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <div className="relative">
            <div className="h-6 w-6 absolute left-1 p-1">£</div>
            <input
              type="number"
              value={
                typeof value === 'string' || typeof value === 'number'
                  ? value
                  : (value?.toString() ?? '')
              }
              placeholder={placeholder}
              name={name}
              onChange={(e) => {
                if (onChange) {
                  onChange(e);
                }
              }}
              onBlur={(e) => {
                if (onChange) {
                  const formattedValue = parseFloat(
                    e.target.value || '0'
                  ).toFixed(2);
                  onChange({
                    ...e,
                    target: { ...e.target, value: formattedValue },
                  });
                }
              }}
              step="0.01"
              className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1 pl-6 box-border`}
              required
            />
          </div>
        </div>
      )}

      {type === 'text' && (
        <div className="min-w-72 mt-4">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <input
            type="text"
            value={
              typeof value === 'string' || typeof value === 'number'
                ? value
                : (value?.toString() ?? '')
            }
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1 box-border`}
            required
          />
        </div>
      )}

      {type === 'select' && categories && (
        <div className="min-w-72 mt-4">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <select
            name={name}
            value={
              typeof value === 'string' || typeof value === 'number'
                ? value
                : (value?.toString() ?? '')
            }
            onChange={onChange}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 bg-[linear-gradient(45deg,transparent_50%,gray_50%),linear-gradient(135deg,gray_50%,transparent_50%),linear-gradient(to_right,#ccc,#ccc)] bg-[length:5px_5px,5px_5px,1px_1.5em] bg-[position:calc(100%-20px)_calc(1em+2px),calc(100%-15px)_calc(1em+2px),calc(100%-2.5em)_0.5em] bg-no-repeat focus:bg-[linear-gradient(45deg,green_50%,transparent_50%),linear-gradient(135deg,transparent_50%,green_50%),linear-gradient(to_right,#ccc,#ccc)] focus:bg-[position:calc(100%-15px)_1em,calc(100%-20px)_1em,calc(100%-2.5em)_0.5em] focus:bg-[length:5px_5px,5px_5px,1px_1.5em] focus:outline-none  appearance-none`}
            required
          >
            <option value="">{placeholder || 'Select an option'}</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}

      {type === 'date' && (
        <div className="min-w-72 mt-4">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <input
            type="date"
            value={
              value instanceof Date
                ? value.toISOString().split('T')[0]
                : typeof value === 'string' || typeof value === 'number'
                  ? value
                  : ''
            }
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-1 box-border`}
          />
        </div>
      )}
    </>
  );
};

export default Input;
