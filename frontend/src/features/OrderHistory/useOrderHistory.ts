import { useQuery } from "@tanstack/react-query";
import {} from "../../services/apiMenu";
import { getHistoryOrderApi } from "../../services/apiOrder";

export function useOrderHistory(userId: string | undefined) {
  const {
    isPending: isGettingHistoryOrder,
    isError: isHistoryOrderError,
    error: historyOrderError,
    data: historyOrderData,
  } = useQuery({
    queryKey: ["historyOrders", userId],
    queryFn: () => getHistoryOrderApi(userId),
  });

  return {
    isGettingHistoryOrder,
    isHistoryOrderError,
    historyOrderError,
    historyOrderData,
  };
}
