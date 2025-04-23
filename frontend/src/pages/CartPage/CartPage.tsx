import Cart from "../../features/Cart/Cart";
import { useUserStore } from "../../store/useUserStore";

function CartPage() {
  const { userCart } = useUserStore();

  return (
    <div className="flex flex-col w-full h-full">
      <section className="flex flex-col w-full h-full py-4 px-2">
        <h1 className="text-center font-body text-4xl mb-6 font-bold tracking-wider text-pretty">
          Cart ({userCart.length} Items)
        </h1>

        <Cart />
      </section>
    </div>
  );
}

export default CartPage;
