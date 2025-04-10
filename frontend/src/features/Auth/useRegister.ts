import { useMutation } from "@tanstack/react-query";
import { createAccountApi, IRegisterData } from "../../services/apiAccount";
import toast from "react-hot-toast";

export function useRegister() {
  const { isPending: isCreatingAccount, mutate: createAccount } = useMutation({
    mutationFn: (data: IRegisterData) => createAccountApi(data),
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });

  return { isCreatingAccount, createAccount };
}
