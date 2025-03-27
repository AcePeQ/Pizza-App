import { ReactElement } from "react";

function Button({
  children,
  size = "normal",
  type = "primary",
  onClick,
}: {
  children: ReactElement | string;
  size: string;
  type: string;
  onClick: () => void;
}) {
  let sizeClass, typeClass;

  if (type === "primary") {
    typeClass = `bg-green-700 text-white hover:bg-green-800 active:bg-green-800`;
  } else if (type === "secondary") {
    typeClass = `bg-transparent text-white border-3 border-stone-800 hover:bg-stone-800`;
  }

  if (size === "sm") {
    sizeClass = `px-2 py-0.5 rounded-lg`;
  }

  return (
    <button
      className={`inline-block cursor-pointer transition-colors duration-[400ms] shadow-md shadow-stone-900/30 ${typeClass} ${sizeClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
