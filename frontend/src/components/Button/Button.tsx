import { MouseEventHandler, ReactElement } from "react";

function Button({
  children,
  size = "normal",
  type = "primary",
  buttonType = "button",
  onClick,
  isDisabled,
}: {
  children: ReactElement | string;
  size: string;
  buttonType?: "button" | "submit" | "reset";
  type: string;
  isDisabled?: boolean;
  onClick?: MouseEventHandler;
}) {
  let sizeClass, typeClass;

  if (type === "primary") {
    typeClass = `bg-green-700 text-white hover:bg-green-800 active:bg-green-800 disabled:bg-green-950 disabled:cursor-not-allowed`;
  } else if (type === "secondary") {
    typeClass = `bg-transparent text-white border-3 border-stone-700 hover:bg-stone-900 hover:border-stone-900 disabled:bg-stone-950 disabled:border-stone-950 disabled:cursor-not-allowed`;
  } else if (type === "tertiary") {
    typeClass = `bg-transparent text-white border-3 border-stone-700 hover:bg-stone-700 hover:text-amber-50 disabled:bg-stone-950 disabled:border-stone-950 disabled:cursor-not-allowed`;
  } else if (type === "delete") {
    typeClass = `bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-red-950 disabled:cursor-not-allowed`;
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
      className={`inline-block cursor-pointer transition-colors duration-[400ms] shadow-md shadow-stone-900/30 ${typeClass} ${sizeClass}`}
      onClick={onClick}
      type={buttonType}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
