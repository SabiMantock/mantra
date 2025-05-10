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
  error
}: InputProps) => {
  return (
    <>
      {type === 'checkbox' && (
        <div className="min-w-72 mt-4 flex gap-2 items-center">
          <input
            type="checkbox"
            checked={value as boolean}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            className={className}
          />
          <label
            htmlFor={name}
            className="block text-sm font-medium text-[#F8F8FA]"
          >
            {label}
          </label>
        </div>
      )}

      {type === 'number' && (
        <div className="min-w-72 mt-4">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-[#F8F8FA]"
          >
            {label}
          </label>
          <div className="relative">
            <div className="h-6 w-6 absolute top-1 left-1 p-1">£</div>
            <input
              type="number"
              value={value as number}
              placeholder={placeholder}
              name={name}
              onChange={(e) => {
                if (onChange) {
                  onChange(e);
                }
              }}
              
              step="0.01"
              className={`block w-full pl-5 py-2 border border-gray-300 h-10 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white`}
            />
          </div>
          {error?.message && (
            <p className="mt-0 ml-0.5 text-sm text-red-600 dark:text-red-500">
              walahi type a number
            </p>
          )}
        </div>
      )}

      {type === 'text' && (
        <div className="min-w-72 mt-4">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-[#F8F8FA]"
          >
            {label}
          </label>
          <input
            type="text"
            value={value as string}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            className={`block w-full p-2 border h-10 border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white`}
       
          />
        </div>
      )}

      {type === 'select' && categories && (
        <div className="min-w-72 mt-4">
          <label
            htmlFor={name}
            className="block text-sm font-medium text-[#F8F8FA]"
          >
            {label}
          </label>
          <select
            name={name}
            value={value as string}
            onChange={onChange}
            className={`block w-full h-10 px-2 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white  p-2 sm:text-sm  bg-[linear-gradient(45deg,transparent_50%,gray_50%),linear-gradient(135deg,gray_50%,transparent_50%),linear-gradient(to_right,#ccc,#ccc)] bg-[length:5px_5px,5px_5px,1px_1.5em] bg-[position:calc(100%-20px)_calc(1em+2px),calc(100%-15px)_calc(1em+2px),calc(100%-2.5em)_0.5em] bg-no-repeat focus:bg-[linear-gradient(45deg,green_50%,transparent_50%),linear-gradient(135deg,transparent_50%,green_50%),linear-gradient(to_right,#ccc,#ccc)] focus:bg-[position:calc(100%-15px)_1em,calc(100%-20px)_1em,calc(100%-2.5em)_0.5em] focus:bg-[length:5px_5px,5px_5px,1px_1.5em] focus:outline-none  appearance-none`}
          
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
            className="block text-sm font-medium text-[#F8F8FA]"
          >
            {label}
          </label>
          <input
            type="date"
            value={value as string}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            className={`block w-full h-10 py-2 px-2 border sm:text-sm border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white box-border`}
          />
        </div>
      )}
    </>
  );
};

export default Input;
