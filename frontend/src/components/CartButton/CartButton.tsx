import { ShoppingCart } from "lucide-react";

function CartButton() {
  return (
    <button
      type="button"
      className="justify-center items-center flex rotate-y-180 cursor-pointer"
      onClick={() => {}}
    >
      <ShoppingCart size={30} color="red" />
    </button>
  );
}

export default CartButton;
