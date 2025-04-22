import { ICartItem } from "../../../store/useUserStore";

function CartItem({ pizza }: { pizza: ICartItem }) {
  return (
    <li className="border-b-2 border-amber-50 ">
      <div className="flex items-center gap-4 py-3 px-2">
        <figure className="w-16 h-16 shrink-0 rounded-full overflow-hidden">
          <img
            className="max-w-full"
            src={`${pizza.image}`}
            alt={`${pizza.name} pizza with ${pizza.ingredients.join(", ")}`}
          />
        </figure>
        <div className="text-amber-50 text-center w-full">
          <p className="text-2xl tracking-wider text-left text-nowrap">
            {pizza.name}
          </p>
          <p className="text-xl mt-0.5 flex items-center justify-start gap-2">
            {pizza.price}€
          </p>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
