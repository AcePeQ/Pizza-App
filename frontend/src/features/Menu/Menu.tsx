import PizzaCard from "./PizzaCard/PizzaCard";
import PizzaFilters from "./PizzaFilters/PizzaFilters";

function Menu() {
  return (
    <section className="my-10">
      <h2 className="text-center font-header text-4xl/tight font-bold text-pretty">
        Pizza Menu
      </h2>

      <PizzaFilters />

      <ul className="flex flex-col gap-30 items-center sm:grid sm:grid-cols-[256px_256px] sm:gap-x-12 sm:justify-center lg:grid-cols-[256px_256px_256px] xl:grid-cols-[256px_256px_256px_256px] 2xl:grid-cols-[256px_256px_256px_256px_256px]">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </ul>
    </section>
  );
}

export default Menu;
