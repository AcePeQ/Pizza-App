import { useMutation } from "@tanstack/react-query";
import { createAccountApi, IRegisterData } from "../../services/apiAccount";

export function useRegister() {
  const { isPending: isCreatingAccount, mutate: createAccount } = useMutation({
    mutationFn: (data: IRegisterData) => createAccountApi(data),
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });

  return { isCreatingAccount, createAccount };
}
