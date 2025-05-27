import { useForm, Controller } from "react-hook-form";
import { SigninFormData } from "../../lib/types/types";
import Card from "../ui/Card"
import Input from "../ui/Input";
import Button from "../ui/Button";


const Signin = () => {
const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();

  console.log(errors);

  return (
    <Card className="max-w-2xl mx-2 sm:mx-0 p-4 rounded-lg shadow-md ring-1 ring-gray-800/20">
      <h3 className="text-xl font-semibold text-center text-gray-700">
        Sign In
      </h3>
      <Button
        label={'Sign In with Google'}
        className="px-4 py-2 mt-5 text-sm w-full font-medium rounded-lg border border-gray-300  cursor-pointer"
      />
      <div className="flex items-center justify-center my-1">
        <p>Or</p>
      </div>
      <form
        className="text-gray-700"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        }
        )}
      >
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
          />
        )}
      />
       {/* <Controller
        control={control}
        name="remember"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input
            label="Remember Me"
            type="checkbox"
            placeholder={`What's this transaction for?`}
            onChange={onChange}
            value={value as boolean}
          />
        )}
      /> */}
       <Button
          label={'Sign In'}
          className="px-4 py-2 mt-5 text-sm w-full font-medium rounded-lg border bg-indigo-600 cursor-pointer"
        />
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-700">
          Don't have an account?{" "}
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
export default Signin;
