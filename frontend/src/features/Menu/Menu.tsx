function Menu() {
  return (
    <section className="my-10">
      <h2 className="text-center font-header text-4xl/tight font-bold text-pretty mb-18">
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
        </li>
      </ul>
    </section>
  );
}

export default Menu;
