import { ShoppingCart } from "lucide-react";
import CartItem from "../CartItem/CartItem";
import { useUserStore } from "../../../store/useUserStore";
import { useNavigate } from "react-router";

function CartButton() {
  const { userCart } = useUserStore();
  const navigate = useNavigate();

  const totalCost =
    userCart.length > 0
      ? userCart.reduce((acc, val) => (acc += val.price * val.quantity), 0)
      : 0;

  return (
    <div className="cart_button relative">
      <button
        onClick={() => navigate("/cart")}
        className="rotate-y-180 cursor-pointer relative flex justify-center items-center transition-colors duration-300 text-amber-100 hover:text-white active:text-white"
      >
        <ShoppingCart size={30} />
        {userCart.length > 0 && (
          <span className="flex items-center justify-center w-5.5 h-5.5 bg-green-800 text-amber-50 rotate-y-180 absolute -bottom-1.5 -left-1.5 rounded-full">
            {userCart.length}
          </span>
        )}
      </button>

      {userCart.length > 0 && (
        <div className="cart_hover absolute  bg-stone-800 text-amber-50 p-2 rounded-lg ">
          <ul className="max-h-[360px] overflow-y-auto">
            {userCart.map((pizza) => (
              <CartItem key={pizza._id} pizza={pizza} />
            ))}
          </ul>
          <div className=" flex py-2 px-2 text-2xl tracking-wider text-amber-50 items-center justify-between">
            <p>Total:</p>
            <p>{totalCost}€</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartButton;
