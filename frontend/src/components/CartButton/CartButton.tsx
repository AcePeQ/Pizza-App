import { ShoppingCart } from "lucide-react";

function CartButton() {
  return (
    <button
      type="button"
      className="justify-center items-center flex rotate-y-180 cursor-pointer transition-colors duration-300 text-amber-100 hover:text-white active:text-white"
      onClick={() => {}}
    >
      <ShoppingCart size={30} />
    </button>
  );
}

export default CartButton;
