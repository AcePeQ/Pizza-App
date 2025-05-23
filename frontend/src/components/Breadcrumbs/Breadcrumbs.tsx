import { ArrowRightCircle } from "lucide-react";

export interface IBreadcrumbs {
  index: number;
  title: string;
}

function Breadcrumbs({
  breadcrumbs,
  curIndex,
  onSetPage,
}: {
  breadcrumbs: IBreadcrumbs[];
  curIndex: number;
  onSetPage: (page: number) => void;
}) {
  return (
    <ul className="grid grid-cols-3 gap-x-8 mb-6 px-2">
      {breadcrumbs.map((breadcrumb, index) => (
        <li
          key={breadcrumb.index}
          className="flex items-center justify-center gap-1.5 grow relative"
        >
          <button
            onClick={() => onSetPage(index)}
            className={`flex flex-col items-center cursor-pointer w-full relative hover:text-stone-900 active:text-stone-900 transition-colors duration-300 ${
              curIndex === index ? "text-stone-800" : "text-stone-500"
            }`}
          >
            <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full text-2xl">
              {breadcrumb.index}
            </div>
            <p className="text-2xl font-semibold">{breadcrumb.title}</p>
          </button>
          {breadcrumbs.length - 1 !== index && (
            <button
              onClick={() => onSetPage(index + 1)}
              className="absolute z-20 -right-8 top-4/12 -translate-y-6/12 text-stone-500 duration-300 transition-colors cursor-pointer hover:text-stone-800"
            >
              <ArrowRightCircle size={38} />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Breadcrumbs;
