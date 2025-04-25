import { Minus, Plus, X } from "lucide-react";
import { ICartItem, useUserStore } from "../../store/useUserStore";

function CartItemPage({ pizza }: { pizza: ICartItem }) {
  const { increaseQuantity, decreaseQuantity, removePizzaFromCart } =
    useUserStore();

  return (
    <li className="flex flex-col max-w-[420px] sm:flex-row sm:max-w-[600px] lg:max-w-[800px] lg:grid lg:grid-cols-[max-content_1fr] mx-auto gap-4 w-full bg-stone-800 text-amber-50 p-4 rounded-xl relative shadow-md shadow-stone-800/75">
      <button
        onClick={() => removePizzaFromCart(pizza._id)}
        className="absolute  right-5 lg:top-4 cursor-pointer text-amber-50 duration-300 transition-colors hover:text-white active:text-amber-50"
        type="button"
      >
        <X size={36} />
      </button>
      <img
        className="w-42 h-42 rounded-[35%] mx-auto"
        src={pizza.image}
        alt={`${pizza.name} pizza with ${pizza.ingredients.join(", ")}`}
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-medium tracking-wide whitespace-nowrap text-center mb-2 sm:text-left sm:pr-11">
            {pizza.name}
          </h3>
          <p className="text-center text-base/normal font-bold tracking-wider text-balance mb-2  sm:text-left">
            {pizza.ingredients.join(" - ")}
          </p>
        </div>

        <div className="flex items-center justify-between px-2 sm:px-0">
          <p className="text-[30px] font-medium tracking-wide whitespace-nowrap text-center">
            {pizza.quantity * pizza.price}€
          </p>

          <div className="flex items-center gap-1">
            {pizza.quantity < 10 && (
              <button
                onClick={() => increaseQuantity(pizza._id)}
                className="cursor-pointer text-amber-50 duration-300 transition-colors hover:text-white active:text-amber-50"
              >
                <Plus size={34} />
              </button>
            )}

            <input
              type="text"
              disabled
              className="bg-amber-50 w-12 py-1  text-center rounded-sm text-stone-800 text-2xl font-bold pointer-events-none"
              value={pizza.quantity}
            />
            {pizza.quantity > 1 && (
              <button
                onClick={() => decreaseQuantity(pizza._id)}
                className="cursor-pointer text-amber-50 duration-300 transition-colors hover:text-white active:text-amber-50"
              >
                <Minus size={34} />
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItemPage;
