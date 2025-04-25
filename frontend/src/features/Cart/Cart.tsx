import Button from "../../components/Button/Button";
import { useUserStore } from "../../store/useUserStore";
import CartItemPage from "./CartItemPage";

function Cart({ onNextPage }: { onNextPage: () => void }) {
  const { userCart } = useUserStore();

  const totalCost =
    userCart.length > 0
      ? userCart.reduce((acc, val) => (acc += val.price * val.quantity), 0)
      : 0;

  return (
    <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-[1fr_360px] lg:gap-x-10">
      <ul className="flex flex-col gap-8 mb-4 lg:mb-0">
        {userCart.map((pizza) => (
          <CartItemPage key={pizza._id} pizza={pizza} />
        ))}
      </ul>

      <div className="flex flex-col lg:self-start max-w-[420px] mx-auto sm:max-w-[600px] gap-2 w-full bg-stone-800 text-amber-50 p-4 rounded-xl shadow-md shadow-stone-800/75">
        <p className="flex items-center justify-between text-xl">
          <span>Producte value:</span>
          <span>{totalCost.toFixed(2)}€</span>
        </p>
        <p className="flex items-center justify-between text-xl">
          <span>Delivery:</span>
          <span>3.5€</span>
        </p>
        <div className="w-full h-0.5 bg-amber-50 my-1.5"></div>
        <p className="flex items-center justify-between text-2xl font-bold tracking-wide mb-2">
          <span>Total to pay:</span>
          <span>{(totalCost + 3.5).toFixed(2)}€</span>
        </p>

        <Button onClick={onNextPage} type="primary" size="big">
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
