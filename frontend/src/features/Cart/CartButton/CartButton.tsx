import { ShoppingCart } from "lucide-react";

function CartButton() {
  return (
    <div className="cart_button relative">
      <button className="rotate-y-180 cursor-pointer relative flex justify-center items-center transition-colors duration-300 text-amber-100 hover:text-white active:text-white">
        <ShoppingCart size={30} />
        <span className="flex items-center justify-center w-5.5 h-5.5 bg-green-800 text-amber-50 rotate-y-180 absolute -bottom-1.5 -left-1.5 rounded-full">
          4
        </span>
      </button>

      <div className="cart_hover absolute  bg-stone-800 text-amber-50 p-2 rounded-lg">
        <ul>
          <li className="border-b-2 border-amber-50">
            <div className="flex items-center gap-4 py-3 px-2">
              <figure className="w-16 h-16">
                <img
                  className="max-w-full"
                  src="/pizzas/margarita.png"
                  alt="pizza"
                />
              </figure>
              <div className="text-amber-50 text-center">
                <p className="text-2xl tracking-wider">Margharita</p>
                <p className="text-lg mt-0.5 flex items-center justify-between gap-2">
                  <span className="inline-block">1x</span>
                  <span className="inline-block">7,50€</span>
                </p>
              </div>
            </div>
          </li>

          <li className="border-b-2 border-amber-50">
            <div className="flex items-center gap-4 py-3 px-2">
              <figure className="w-16 h-16">
                <img
                  className="max-w-full"
                  src="/pizzas/margarita.png"
                  alt="pizza"
                />
              </figure>
              <div className="text-amber-50 text-center">
                <p className="text-2xl tracking-wider">Margharita</p>
                <p className="text-lg mt-0.5 flex items-center justify-between gap-2">
                  <span className="inline-block">1x</span>
                  <span className="inline-block">7,50€</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div className=" flex py-2 px-2 text-2xl tracking-wider text-amber-50 items-center justify-between">
          <p>Total:</p>
          <p>7,50€</p>
        </div>
      </div>
    </div>
  );
}

export default CartButton;
