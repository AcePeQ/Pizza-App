import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../../FormInput/FormInput";

export interface SignUpInputs {
  displayName: string;
  email: string;
  password: string;
}

function ModalSignUp() {
  const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Display Name"
        error={errors.displayName?.message as string}
      >
        <input
          type="text"
          id="displayName"
          {...register("displayName", {
            required: "Display Name field is required",
          })}
        />
      </FormInput>
    </form>
  );
}

export default ModalSignUp;
