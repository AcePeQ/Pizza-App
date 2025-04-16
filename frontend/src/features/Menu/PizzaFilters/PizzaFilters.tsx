import { X } from "lucide-react";
import PizzaFilter from "./PizzaFilter";
import { sortByOptions } from "../../../utils/FilterOptions";
import React from "react";

export interface IFiltersState {
  sortBy: { label: string; value: string };
  ingridients: { label: string; value: string }[];
}

interface IFilters {
  filters: IFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
}

function PizzaFilters({ filters, setFilters }: IFilters) {
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

        <PizzaFilter
          title="Sort by"
          filterOptions={sortByOptions}
          defaultOption={filters.sortBy}
          onChange={(option) => {
            if (!Array.isArray(option)) {
              setFilters((prev) => ({
                ...prev,
                sortBy: option,
              }));
            }
          }}
        />

        <PizzaFilter
          title="Ingridients"
          filterOptions={sortByOptions}
          filterType="multi"
          placeholder="Select your ingredients..."
          defaultOption={filters.ingridients}
          onChange={(option) => {
            if (Array.isArray(option)) {
              setFilters((prev) => ({
                ...prev,
                ingridients: option,
              }));
            }
          }}
        />
      </div>
    </>
  );
}

export default PizzaFilters;
