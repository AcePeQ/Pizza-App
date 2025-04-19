import { SlidersHorizontal } from "lucide-react";
import PizzaCard from "./PizzaCard/PizzaCard";
import PizzaFilters, { IFiltersState } from "./PizzaFilters/PizzaFilters";
import { useState } from "react";
import { sortByOptions } from "../../utils/FilterOptions";
import { useMenu } from "./useMenu";

export interface IPizzaMenuItem {
  id: string;
  price: number;
  name: string;
  image: string;
  ingredients: string[];
}

function Menu() {
  const [filters, setFilters] = useState<IFiltersState>({
    sortBy: sortByOptions[0],
    ingredients: [],
  });
  const { isGettingMenu, menuError, isMenuError, menuData } = useMenu(filters);

  const [filterMenu, setFilterMenu] = useState<boolean>(false);

  function handleCloseFilterMenu() {
    setFilterMenu(false);
  }

  if (isGettingMenu) {
    return <p>Loading</p>;
  }

  console.log(menuData);

  return (
    <section className="my-10 relative">
      <div className="mb-25 flex justify-between mx-6 pb-2 gap-10 items-center border-b-2">
        <h2 className="font-header text-4xl/tight font-bold text-pretty ">
          Pizza Menu
        </h2>

        <button
          type="button"
          className="cursor-pointer duration-300 transition-colors hover:text-stone-950"
          onClick={() => setFilterMenu(true)}
        >
          <SlidersHorizontal size={30} />
        </button>
      </div>

      <PizzaFilters
        isMenuActive={filterMenu}
        onClose={handleCloseFilterMenu}
        filters={filters}
        setFilters={setFilters}
      />

      <ul className="flex flex-col gap-30 items-center sm:grid sm:grid-cols-[256px_256px] sm:gap-x-12 sm:justify-center lg:grid-cols-[256px_256px_256px] xl:grid-cols-[256px_256px_256px_256px] 2xl:grid-cols-[256px_256px_256px_256px_256px]">
        {menuData.map((pizza: IPizzaMenuItem) => (
          <PizzaCard key={`${pizza.id}_${pizza.name}`} pizza={pizza} />
        ))}
      </ul>
    </section>
  );
}

export default Menu;
