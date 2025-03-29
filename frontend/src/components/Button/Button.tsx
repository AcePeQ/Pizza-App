import { ReactElement } from "react";

function Button({
  children,
  size = "normal",
  type = "primary",
  buttonType = "button",
  onClick,
}: {
  children: ReactElement | string;
  size: string;
  buttonType?: "button" | "submit" | "reset";
  type: string;

  onClick?: () => void;
}) {
  let sizeClass, typeClass;

  if (type === "primary") {
    typeClass = `bg-green-700 text-white hover:bg-green-800 active:bg-green-800`;
  } else if (type === "secondary") {
    typeClass = `bg-transparent text-white border-3 border-stone-800 hover:bg-stone-800`;
  } else if (type === "tertiary") {
    typeClass = `bg-transparent text-white border-3 border-stone-700 hover:bg-stone-700 hover:text-amber-50`;
  }

  if (size === "sm") {
    sizeClass = `px-2 py-0.5 rounded-md`;
  } else if (size === "normal") {
    sizeClass = `px-4 py-1 rounded-md text-xl tracking-wide`;
  } else if (size === "big") {
    sizeClass = `px-6 py-2.5 rounded-md text-xl tracking-wide`;
  }

  return (
    <button
      className={`inline-block cursor-pointer transition-colors duration-[400ms] shadow-md shadow-stone-900/30  ${typeClass} ${sizeClass}`}
      onClick={onClick}
      type={buttonType}
    >
      {children}
    </button>
  );
}

export default Button;
