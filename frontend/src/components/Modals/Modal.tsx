import { X } from "lucide-react";
import { ReactElement } from "react";
import { createPortal } from "react-dom";

function Modal({
  children,
  onCloseModal,
  title,
}: {
  children: ReactElement;
  onCloseModal: () => void;
  title: string;
}) {
  return createPortal(
    <>
      <div
        onClick={onCloseModal}
        className="fixed top-0 left-0 w-full h-full bg-stone-900/75 z-[1000000000000] cursor-pointer"
      ></div>
      <div className="fixed top-6/12 left-6/12 -translate-6/12 w-full z-[1000000000001]">
        <div className="text-amber-50 bg-stone-800 px-6.5 py-4 ">
          <h2 className="text-3xl font-semibold text-center relative px-8 text-nowrap">
            {title}
            <button
              onClick={onCloseModal}
              className="absolute cursor-pointer -top-2 -right-5 transition-colors duration-300 hover:text-red-500 active:text-red-600"
            >
              <X size={28} />
            </button>
          </h2>
          <hr className="my-4 bg-stone-400" />
          {children}
        </div>
      </div>
    </>,
    document.body
  );
}

export default Modal;
