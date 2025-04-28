import { ICartItem } from "../../store/useUserStore";

function OrderCard({ order }: { order: ICartItem }) {
  return (
    <li className="rounded-2xl border-stone-800  text-amber-50 bg-stone-800">
      <div className="flex items-center sm:grid sm:grid-cols-[max-content_1fr] gap-4 py-3 px-2 sm:p-5">
        <figure className="w-22 h-22 shrink-0 rounded-full overflow-hidden sm:w-32 sm:h-32">
          <img
            className="max-w-full"
            src={`${order.image}`}
            alt={`${order.name} pizza with ${order.ingredients.join(", ")}`}
          />
        </figure>
        <div className="w-full h-full flex flex-col justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-wider text-left text-nowrap sm:mb-1 sm:text-3xl">
              {order.name}
            </p>
            <p className="text-sm/tight font-semibold tracking-wide sm:text-base">
              {order.ingredients.join(" - ")}
            </p>
          </div>
          <p className="text-xl mt-2 flex items-center justify-between gap-2 sm:text-2xl">
            <span>{order.quantity}x</span>
            {order.price}€
          </p>
        </div>
      </div>
    </li>
  );
}

export default OrderCard;
