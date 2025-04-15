function PizzaIngridient({ index }: { index: number }) {
  return (
    <div
      className={`absolute ml-2 bg-stone-700 shadow-md shadow-stone-700/85 rounded-xl px-3 py-1 top-${
        index * 12
      } left-0 after:content-[''] after:rounded-[50%] after:absolute after:-left-[11px] after:top-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-amber-500 text-amber-50 text-xl tracking-wide`}
    >
      Pomidor
    </div>
  );
}

export default PizzaIngridient;
