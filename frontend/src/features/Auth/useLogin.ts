import { useMutation } from "@tanstack/react-query";
import { ILoginData, loginToAccountApi } from "../../services/apiAccount";
import toast from "react-hot-toast";
import { useUserStore } from "../../store/useUserStore";

export function useLogin() {
  const { login } = useUserStore();
  const { isPending: isLoginToAccount, mutate: loginToAccount } = useMutation({
    mutationFn: (data: ILoginData) => loginToAccountApi(data),
    onSuccess: (data) => {
      toast.success("Successfully logged in");
      login(data);
    },
  });

  return { isLoginToAccount, loginToAccount };
}
