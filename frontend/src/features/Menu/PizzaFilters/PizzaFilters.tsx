import { X } from "lucide-react";

function PizzaFilters() {
  return (
    <>
      <div className="w-full h-dvh fixed top-0 right-0 bg-stone-800/75 z-[1111111110]"></div>
      <div className="fixed top-0 right-0 max-w-80 w-full h-dvh bg-stone-800 z-[1111111111] overflow-y-auto">
        <div className="text-amber-50 flex justify-between items-center border-b-2 pb-2 py-4 px-3">
          <h2 className="font-header text-4xl/tight font-bold text-pretty">
            Filters
          </h2>
          <button className="cursor-pointer">
            <X size={36} />
          </button>
        </div>

        <div className="text-amber-50 flex flex-col gap-3.5 border-b-2 pb-2 py-4 px-3">
          <p className="font-header text-2xl/tight font-bold text-pretty">
            Sort by
          </p>
          Input
        </div>
      </div>
    </>
  );
}

export default PizzaFilters;
