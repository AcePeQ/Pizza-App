import Error from "../../components/Error/Error";
import Loader from "../../components/Loaders/Loader/Loader";
import { useOrderHistory } from "./useOrderHistory";
import { ICartItem, useUserStore } from "../../store/useUserStore";
import OrderHistoryItem from "./OrderHistoryItem";

export interface IOrderHistoryItem {
  createdAt: string;
  pizzas: ICartItem[];
  _id: string;
}

function OrderHistory() {
  const { user } = useUserStore();
  const {
    isGettingHistoryOrder,
    historyOrderData,
    historyOrderError,
    isHistoryOrderError,
  } = useOrderHistory(user?._id);

  if (isGettingHistoryOrder) {
    return <Loader />;
  }

  if (isHistoryOrderError) {
    return <Error error={historyOrderError?.message} />;
  }

  return (
    <div className="px-4 overflow-auto ">
      <div className="grid grid-cols-[minmax(280px,_1fr)_1fr_1fr_32px] min-w-[740px]  gap-4 text-3xl font-medium tracking-wide p-4">
        <p>Order ID</p>
        <p className="whitespace-nowrap">Ordered at</p>
        <p className="whitespace-nowrap">Status</p>
        <p>&nbsp;</p>
      </div>
      <ul className="flex flex-col gap-3 min-w-[740px] overflow-auto pb-4">
        {historyOrderData.map((order: IOrderHistoryItem) => (
          <OrderHistoryItem key={order._id} order={order} />
        ))}
      </ul>
    </div>
  );
}

export default OrderHistory;
