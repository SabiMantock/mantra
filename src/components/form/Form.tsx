import { Controller, useForm } from 'react-hook-form';
import { FormData, FormProps } from '../../lib/types/types';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { categories } from '../../data/data';

const Form = ({ className }: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  console.log(errors);
  return (
    <form
      className={className}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <Controller
        control={control}
        name="amount"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Amount"
            type="number"
            placeholder="0.00"
            onChange={onChange} // send value to hook form
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
          className="p-2 rounded-md bg-amber-500 text-white"
        />
        <Button
          label={'Save Transaction'}
          className="p-2 rounded-md bg-amber-400 text-white"
        />
      </div>
    </form>
  );
};
export default Form;
