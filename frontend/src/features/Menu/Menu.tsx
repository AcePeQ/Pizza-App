import { SlidersHorizontal } from "lucide-react";
import PizzaCard from "./PizzaCard/PizzaCard";
import PizzaFilters, { IFiltersState } from "./PizzaFilters/PizzaFilters";
import { useState } from "react";
import { sortByOptions } from "../../utils/FilterOptions";
import { useMenu } from "./useMenu";
import Loader from "../../components/Loaders/Loader/Loader";
import Error from "../../components/Error/Error";

export interface IPizzaMenuItem {
  _id: string;
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
    return <Loader />;
  }

  if (isMenuError) {
    return <Error error={menuError?.message} />;
  }

  return (
    <section className="mt-10 pb-10 relative overflow-hidden">
      <div className="border-b-2 pb-2 mb-25">
        <div className=" flex justify-between mx-6 gap-10 items-center mb-4">
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

        <p className="mx-6 text-sm font-bold -indent-[5px] sm:-indent-0">
          *Every pizza is large size (32cm). We do not offer different pizza
          sizes in our store. If you want to add more than one pizza, you can do
          so in the cart.
        </p>
      </div>

      <PizzaFilters
        isMenuActive={filterMenu}
        onClose={handleCloseFilterMenu}
        filters={filters}
        setFilters={setFilters}
      />

      <ul className="grid grid-cols-[256px] gap-30 items-center justify-center sm:grid sm:grid-cols-[256px_256px] sm:gap-x-12 sm:justify-center lg:grid-cols-[256px_256px_256px] xl:grid-cols-[256px_256px_256px_256px] 2xl:grid-cols-[256px_256px_256px_256px_256px]">
        {menuData.map((pizza: IPizzaMenuItem) => (
          <PizzaCard key={`${pizza._id}`} pizza={pizza} />
        ))}
      </ul>
    </section>
  );
}

export default Menu;
