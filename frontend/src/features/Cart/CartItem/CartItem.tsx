function CartItem() {
  return (
    <li className="border-b-2 border-amber-50 ">
      <div className="flex items-center gap-4 py-3 px-2">
        <figure className="w-16 h-16 shrink-0">
          <img className="max-w-full" src="/pizzas/margarita.png" alt="pizza" />
        </figure>
        <div className="text-amber-50 text-center w-full">
          <p className="text-2xl tracking-wider text-left text-nowrap">
            Margharita 1234
          </p>
          <p className="text-lg mt-0.5 flex items-center justify-between gap-2">
            <span className="inline-block">1x</span>
            <span className="inline-block">7,50€</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
