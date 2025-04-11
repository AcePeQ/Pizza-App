import { useForm, SubmitHandler } from "react-hook-form";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useModalStore } from "../../../../store/useModalStore";
import FormInput from "../../../../components/FormInput/FormInput";
import Button from "../../../../components/Button/Button";
import { useRegister } from "../../useRegister";

export interface SignUpInputs {
  displayName: string;
  email: string;
  password: string;
}

const inputStyles = `bg-amber-50 text-stone-800 border-none px-1.5 py-0.5 text-semibold rounded-[0.125rem] transition-all duration-500 outline-2 outline-offset-1 outline-transparent focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-amber-50 text-xl`;

function ModalSignUp() {
  const { isCreatingAccount, createAccount } = useRegister();
  const { setSignUpModalStatus } = useModalStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpInputs>();

  function handleCloseModal() {
    setSignUpModalStatus(false);
  }

  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    createAccount(data, {
      onSuccess: () => handleCloseModal(),
      onError: () => {
        reset();
      },
    });
  };

  return (
    <form className="flex flex-col gap-3 " onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Display Name"
        error={errors.displayName?.message as string}
      >
        <input
          type="text"
          className={inputStyles}
          id="displayName"
          {...register("displayName", {
            required: "Display Name field is required",
            min: {
              value: "4",
              message: "Display Name must be longer than 3 characters",
            },
          })}
        />
      </FormInput>

      <FormInput label="Email" error={errors.email?.message as string}>
        <input
          type="text"
          className={inputStyles}
          id="email"
          {...register("email", {
            required: "Email field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: `Invalid email format`,
            },
          })}
        />
      </FormInput>

      <FormInput
        label="Password"
        inputId="password"
        error={errors.password?.message as string}
      >
        <div className="relative w-full">
          <input
            type={`${showPassword ? "text" : "password"}`}
            className={`${inputStyles} pr-11 w-full`}
            id="password"
            {...register("password", {
              required: "Password field is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
              },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute bottom-0.25 right-2 transition-colors duration-300 text-stone-800 hover:text-stone-500"
          >
            {showPassword ? <Eye size={28} /> : <EyeOff size={28} />}
          </button>
        </div>
      </FormInput>

      <hr className="mb-2 mt-3 bg-stone-400" />

      <div className="flex justify-between">
        <Button
          isDisabled={isCreatingAccount}
          buttonType="submit"
          type="primary"
          size="normal"
        >
          Register
        </Button>
        <Button
          onClick={handleCloseModal}
          buttonType="button"
          type="tertiary"
          size="normal"
          isDisabled={isCreatingAccount}
        >
          Close
        </Button>
      </div>
    </form>
  );
}

export default ModalSignUp;
