import { Controller, useForm } from 'react-hook-form';
import { FormData, FormProps } from '../../lib/types/types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { categories } from '../../data/data';
import { useEffect } from 'react';

const Form = ({ className, isExpense }: FormProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    setValue('type', isExpense ? 'expense' : 'income');
  }, [isExpense, setValue]);

  console.log(errors);
  return (
    <form
      className={`${className} text-[#F8F8FA]`}
      onSubmit={handleSubmit((data) => {
        if (data.type === 'income' || data.type === 'expense') {
          console.log(data);
        } else {
          console.error('Invalid type. Type must be either income or expense.');
        }
      })}
    >
      <Controller
        control={control}
        name="amount"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Amount"
            type="number"
            placeholder="0.00"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="category"
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
        name="date"
        render={({ field: { onChange, value } }) => (
          <Input label="Date" type="date" onChange={onChange} value={value} />
        )}
      />
      <Controller
        control={control}
        name="repeat"
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
  );
};
export default Form;
