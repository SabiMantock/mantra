import { useForm, Controller } from 'react-hook-form';
import { SignupFormData } from '../../lib/types/types';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { FaGoogle, FaLock, FaShieldAlt } from 'react-icons/fa';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  console.log(errors);

  return (
    <Card className="max-w-md mx-2 sm:mx-0 p-8 rounded-lg shadow-md ring-1 ring-gray-800/20">
      <div className="flex flex-col items-center mb-4">
        <FaShieldAlt size={30} color="#4F46E5" />
        <h3 className="text-xl font-semibold text-center text-gray-700">
          Create your account
        </h3>
        <p>
          or{' '}
          <a href="#" className="text-indigo-600" rel="noopener noreferrer">
            sign in to your existing account
          </a>
        </p>
      </div>

      <Button
        label={'Continue with Google'}
        className="px-4 py-2 mt-2 text-sm w-full font-medium rounded-lg border border-gray-300 cursor-pointer"
        icon={<FaGoogle color="#EF4444" />}
        isIcon={true}
      />
      <div className="flex items-center justify-center my-1">
        <p>Or</p>
      </div>
      <form
        className="text-gray-700"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Controller
          control={control}
          name="fullName"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Full Name"
              type="text"
              placeholder={`Enter your full name`}
              onChange={onChange}
              value={value as string}
              className="mb-2 mt-2"
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Email"
              type="text"
              placeholder={`Enter your email`}
              onChange={onChange}
              value={value as string}
              className="mb-2 mt-2"
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="Password"
              type="text"
              placeholder={`Enter your password`}
              onChange={onChange}
              value={value as string}
              className="mb-2 mt-2"
            />
          )}
        />
        <Controller
          control={control}
          name="agreement"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Input
              label="I agree to the terms and conditions"
              type="checkbox"
              onChange={onChange}
              value={value as boolean}
              className="mb-2 mt-2"
            />
          )}
        />
        <Button
          label={'Sign Up'}
          className="px-4 py-2 mt-2 text-sm w-full font-medium rounded-lg border bg-indigo-600 text-white cursor-pointer"
          icon={<FaLock color="#fff" />}
          isIcon={true}
        />
      </form>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-700">
          Don't have an account?{' '}
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Sign Up
          </a>
        </p>
      </div>
    </Card>
  );
};
export default SignUp;
