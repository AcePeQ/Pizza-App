import Button from "../../components/Button/Button";
import { useUserStore } from "../../store/useUserStore";
import OrderCard from "./OrderCard";

function PlaceOrder({ onPreviousPage }: { onPreviousPage: () => void }) {
  const { userCart } = useUserStore();

  const totalCost =
    userCart.length > 0
      ? userCart.reduce((acc, val) => (acc += val.price * val.quantity), 0)
      : 0;

  function handleCreateOrder() {}

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_360px] gap-5 lg:gap-y-10 text-stone-800 py-2 px-2.5 sm:rounded-2xl sm:px-8 max-w-5xl w-full mx-auto">
      <ul className="flex flex-col gap-4">
        {userCart.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </ul>

      <div className="flex flex-col lg:self-start  gap-2 w-full bg-stone-800 text-amber-50 p-4 rounded-xl shadow-md shadow-stone-800/75">
        <p className="flex items-center justify-between text-lg lg:text-2xl">
          <span>Producte value:</span>
          <span>{totalCost.toFixed(2)}€</span>
        </p>
        <p className="flex items-center justify-between text-lg lg:text-2xl">
          <span>Delivery:</span>
          <span>3.5€</span>
        </p>
        <div className="w-full h-0.5 bg-amber-50 my-1 lg:my-2"></div>
        <p className="flex items-center justify-between text-xl font-bold tracking-wide mb-2 lg:text-2xl">
          <span>Total to pay:</span>
          <span>{(totalCost + 3.5).toFixed(2)}€</span>
        </p>
      </div>

      <div className="w-full flex justify-between lg:col-span-full">
        <Button
          onClick={onPreviousPage}
          size="normal"
          type="tertiary-2"
          buttonType="button"
        >
          Go Back
        </Button>
        <Button size="normal" type="primary" buttonType="button">
          Order
        </Button>
      </div>
    </div>
  );
}

export default PlaceOrder;
