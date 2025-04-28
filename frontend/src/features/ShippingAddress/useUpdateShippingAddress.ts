import { useMutation } from "@tanstack/react-query";
import { updateShippingAddressApi } from "../../services/apiAccount";

export interface IShippingAddressPost {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  zipCode: string;
  address: string;
  country: string;
}

export function useUpdateShippingAddress() {
  const {
    mutate: updateShippingAddress,
    isPending: isUpdatingShippingAddress,
  } = useMutation({
    mutationFn: (data: IShippingAddressPost) => updateShippingAddressApi(data),
  });

  return { updateShippingAddress, isUpdatingShippingAddress };
}
