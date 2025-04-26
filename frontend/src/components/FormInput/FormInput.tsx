import { ReactElement } from "react";

function FormInput({
  label,
  error,
  children,
  inputId,
}: {
  label: string;
  error?: string;
  inputId?: string;
  children: ReactElement<{
    id: string;
  }>;
}) {
  return (
    <div className="flex flex-col justify-start gap-2 text-[22px] font-medium relative lg:text-2xl">
      <label
        className="inline-block w-max tracking-wide"
        htmlFor={children.props.id || inputId}
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="text-base text-red-600 font-semibold tracking-wider">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormInput;
