import { useState } from "react";
import { useModalStore } from "../../../store/useModalStore";
import { SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../../FormInput/FormInput";
import { Eye, EyeOff } from "lucide-react";
import Button from "../../Button/Button";

export interface SignInInputs {
  email: string;
  password: string;
}

const inputStyles = `bg-amber-50 text-stone-800 border-none px-1.5 py-0.5 text-semibold rounded-[0.125rem] transition-all duration-500 outline-2 outline-offset-1 outline-transparent focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-amber-50 text-xl`;

function ModalSignIn() {
  const { setSignInModalStatus } = useModalStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function handleCloseModal() {
    setSignInModalStatus(false);
  }

  const onSubmit: SubmitHandler<SignInInputs> = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>();

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <FormInput label="Email" error={errors.email?.message as string}>
        <input
          type="text"
          className={inputStyles}
          id="email"
          {...register("email", {
            required: "Email field is required",
          })}
        />
      </FormInput>

      <FormInput
        label="Password"
        inputId="password"
        error={errors.password?.message as string}
      >
        <>
          <input
            type={`${showPassword ? "text" : "password"}`}
            className={`${inputStyles} pr-11`}
            id="password"
            {...register("password", {
              required: "Password field is required",
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute bottom-0.25 right-2 transition-colors duration-300 text-stone-800 hover:text-stone-500"
          >
            {showPassword ? <Eye size={28} /> : <EyeOff size={28} />}
          </button>
        </>
      </FormInput>

      <hr className="mb-2 mt-3 bg-stone-400" />

      <div className="flex justify-between">
        <Button buttonType="submit" type="primary" size="normal">
          Login
        </Button>
        <Button
          onClick={handleCloseModal}
          buttonType="button"
          type="tertiary"
          size="normal"
        >
          Close
        </Button>
      </div>
    </form>
  );
}

export default ModalSignIn;
