import { ReactElement } from "react";

function FormInput({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactElement<{ id: string }>;
}) {
  return (
    <div>
      <label htmlFor={children.props.id}>{label}</label>
      {children}
      {error && <p></p>}
    </div>
  );
}

export default FormInput;
