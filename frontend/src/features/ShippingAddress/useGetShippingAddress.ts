import { useQuery } from "@tanstack/react-query";
import { getShippingAddressApi } from "../../services/apiAccount";

export function useGetShippingAddress() {
  const {
    isError: isShippingAddressError,
    isPending: isGettingShippingAddress,
    data: shippingData,
  } = useQuery({
    queryKey: ["shippingAddress"],
    queryFn: getShippingAddressApi,
  });

  return { isShippingAddressError, isGettingShippingAddress, shippingData };
}
