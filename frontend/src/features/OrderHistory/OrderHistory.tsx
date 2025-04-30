import Error from "../../components/Error/Error";
import Loader from "../../components/Loaders/Loader/Loader";
import { useOrderHistory } from "./useOrderHistory";
import { useUserStore } from "../../store/useUserStore";

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

  console.log(historyOrderData);

  return <ul></ul>;
}

export default OrderHistory;
