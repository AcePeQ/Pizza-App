import { useMutation } from "@tanstack/react-query";
import { ILoginData, loginToAccountApi } from "../../services/apiAccount";
import toast from "react-hot-toast";
import { useUserStore } from "../../store/useUserStore";
import { useModalStore } from "../../store/useModalStore";

export function useLogin() {
  const { login } = useUserStore();
  const { setSignInModalStatus } = useModalStore();
  const { isPending: isLoginToAccount, mutate: loginToAccount } = useMutation({
    mutationFn: (data: ILoginData) => loginToAccountApi(data),
    onSuccess: (data) => {
      setSignInModalStatus(false);
      toast.success("Successfully logged in");
      login(data);
    },
  });

  return { isLoginToAccount, loginToAccount };
}
