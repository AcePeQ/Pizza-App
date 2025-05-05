import { X } from "lucide-react";
import PizzaFilter from "./PizzaFilter";
import { sortByOptions } from "../../../utils/FilterOptions";
import React from "react";
import { useIngredients } from "../useIngredients";
import Loader from "../../../components/Loaders/Loader/Loader";
import Error from "../../../components/Error/Error";

export interface IFiltersState {
  sortBy: { label: string; value: string };
  ingredients: { label: string; value: string }[];
}

interface IFilters {
  filters: IFiltersState;
  setFilters: React.Dispatch<React.SetStateAction<IFiltersState>>;
  onClose: () => void;
  isMenuActive: boolean;
}

function PizzaFilters({
  filters,
  setFilters,
  onClose,
  isMenuActive,
}: IFilters) {
  const {
    isGettingIngredients,
    isIngredientsError,
    ingredientsError,
    ingredientsData,
  } = useIngredients();

  if (isGettingIngredients) {
    return <Loader />;
  }

  if (isIngredientsError) {
    return <Error error={ingredientsError?.message} />;
  }

  return (
    <>
      <div
        onClick={onClose}
        className={`w-full h-dvh fixed top-0 right-0 bg-stone-800/75 z-[1111111110] duration-500 ${
          isMenuActive
            ? "pointer-events-auto opacity-100 visible"
            : "pointer-events-none opacity-0 invisible"
        }`}
      ></div>
      <div
        className={`filter_wrapper fixed top-0 right-0 translate-0  max-w-80 w-full h-dvh bg-stone-800 z-[1111111111] duration-500 overflow-y-auto ${
          isMenuActive
            ? "pointer-events-auto translate-0 visible"
            : "pointer-events-none translate-x-full invisible"
        }`}
      >
        <div className="text-amber-50 flex justify-between items-center border-b-2 pb-2 py-4 px-3">
          <h2 className="font-header text-4xl/tight font-bold text-pretty">
            Filters
          </h2>
          <button className="cursor-pointer" onClick={onClose}>
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
          title="Ingredients"
          filterOptions={ingredientsData}
          filterType="multi"
          placeholder="Select your ingredients..."
          defaultOption={filters.ingredients}
          onChange={(option) => {
            if (Array.isArray(option)) {
              setFilters((prev) => ({
                ...prev,
                ingredients: option,
              }));
            }
          }}
        />
      </div>
    </>
  );
}

export default PizzaFilters;
