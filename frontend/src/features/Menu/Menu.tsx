function Menu() {
  return (
    <section className="my-10">
      <h2 className="text-center font-header text-4xl/tight font-bold text-pretty mb-42">
        Pizza Menu
      </h2>

      <ul className="flex flex-col items-center [perspective:1000px]">
        <li>
          <div className="bg-stone-800 p-6 rounded-3xl duration-500 transition-all shadow-xl shadow-stone-800/85 hover:[transform:rotateX(50deg)] hover:shadow-stone-800/85 hover:shadow-2xl [transform-style:preserve-3d] relative">
            <figure className="max-w-42">
              <img
                className="w-full h-full"
                src="/pizzas/margarita.png"
                alt="pizza [name]"
              />
              <figcaption className="text-amber-50 text-center mt-4 text-2xl tracking-wider">
                Margharita
              </figcaption>
            </figure>
          </div>
          <div className="bg-stone-800 rounded-md w-1 h-full absolute -top-1/2 left-1/2 -translate-x-1/2">
            <div className="absolute ml-2 bg-stone-800 rounded-xl px-3 py-1 top-0 left-0 after:content-[''] after:rounded-[50%] after:absolute after:-left-[11px] after:top-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-green-800 text-amber-50 text-xl tracking-wide">
              Pomidor
            </div>

            <div className="absolute ml-2 bg-stone-800 rounded-xl px-3 py-1 top-12 left-0 after:content-[''] after:rounded-[50%] after:absolute after:-left-[11px] after:top-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-green-800 text-amber-50 text-xl tracking-wide">
              Pomidor
            </div>

            <div className="absolute ml-2 bg-stone-800 rounded-xl px-3 py-1 top-24 left-0 after:content-[''] after:rounded-[50%] after:absolute after:-left-[11px] after:top-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-green-800 text-amber-50 text-xl tracking-wide">
              Pomidor
            </div>

            <div className="absolute ml-2 bg-stone-800 rounded-xl px-3 py-1 top-36 left-0 after:content-[''] after:rounded-[50%] after:absolute after:-left-[11px] after:top-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-green-800 text-amber-50 text-xl tracking-wide">
              Pomidor
            </div>

            <div className="absolute ml-2 bg-stone-800 rounded-xl px-3 py-1 top-48 left-0 after:content-[''] after:rounded-[50%] after:absolute after:-left-[11px] after:top-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-green-800 text-amber-50 text-xl tracking-wide">
              Pomidor
            </div>

            <div className="absolute ml-2 bg-stone-800 rounded-xl px-3 py-1 top-60 left-0 after:content-[''] after:rounded-[50%] after:absolute after:-left-[11px] after:top-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-green-800 text-amber-50 text-xl tracking-wide">
              Pomidor
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Menu;
