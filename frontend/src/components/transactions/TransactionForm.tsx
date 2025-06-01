import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { Controller, useForm } from 'react-hook-form';
import Input from '../ui/Input';
import { FormData, FormProps } from '../../lib/types/types';
import { categories } from '../../data/data';

const TransactionForm = ({ className }: FormProps) => {
  const [isExpense, setIsExpense] = useState(true);
  const {
    control,
    handleSubmit,
    setValue,
    formState: {
      errors: { amount, description, date, category, repeat },
    },
  } = useForm<FormData>();

  useEffect(() => {
    setValue('type', isExpense ? 'expense' : 'income');
  }, [isExpense, setValue]);

  console.log({ amount, description, date, category, repeat });

  return (
    <Card className="max-w-md mx-2 sm:mx-0 p-8 rounded-lg dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-center text-[#F8F8FA]">
        Transaction
      </h3>
      <div className="flex justify-center my-4">
        <Button
          label="Expense"
          className={`px-4 py-2 text-sm font-medium rounded-l-lg border cursor-pointer ${isExpense ? 'bg-red-600 text-[#F8F8FA] border-red-600' : 'bg-white text-gray-700 border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600'}`}
          onClick={() => setIsExpense(true)}
        />
        <Button
          label="Income"
          className={`px-4 py-2 text-sm font-medium rounded-r-lg border cursor-pointer ${!isExpense ? 'bg-green-400 text-[#F8F8FA] border-green-400' : 'bg-white text-gray-700 border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600'}`}
          onClick={() => setIsExpense(false)}
        />
      </div>
      <form
        className={`${className} text-[#F8F8FA]`}
        onSubmit={handleSubmit((data) => {
          if (data.type === 'income' || data.type === 'expense') {
            console.log(data);
          } else {
            console.error(
              'Invalid type. Type must be either income or expense.'
            );
          }
        })}
      >
        <Controller
          control={control}
          name="amount"
          rules={{
            required: 'This is required',
            min: { value: 0, message: 'Must be positive' },
            pattern: {
              value: /^\d*\.?\d+$/,
              message: 'Only positive numbers/decimals allowed',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Amount"
              type="number"
              placeholder="0.00"
              onChange={onChange}
              value={value}
              error={amount ? { message: amount.message || '' } : undefined}
            />
          )}
        />
        <Controller
          control={control}
          name="category"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Category"
              type="select"
              placeholder="Select a category"
              onChange={onChange}
              categories={categories}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Description"
              type="text"
              placeholder={`What's this transaction for?`}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="date"
          render={({ field: { onChange, value } }) => (
            <Input label="Date" type="date" onChange={onChange} value={value} />
          )}
        />
        <Controller
          control={control}
          name="repeat"
          // rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Repeat"
              type="checkbox"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <div className="flex gap-2 items-center justify-end">
          <Button
            label={'Cancel'}
            className="px-4 py-2 text-sm font-medium rounded-lg border cursor-pointer"
          />
          <Button
            label={'Save Transaction'}
            className={`px-4 py-2 text-sm font-medium rounded-lg border cursor-pointer ${isExpense ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
          />
        </div>
      </form>
    </Card>
  );
};

export default TransactionForm;
