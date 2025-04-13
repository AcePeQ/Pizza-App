import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUserStore } from "../../store/useUserStore";
import { logoutFromAccountApi } from "../../services/apiAccount";

export function useLogout() {
  const { logout } = useUserStore();
  const { isPending: isLoggingOut, mutate: logoutFromAccount } = useMutation({
    mutationFn: () => logoutFromAccountApi(),
    onSuccess: () => {
      toast.success("Successfully logged out");
      logout();
    },
  });

  return { isLoggingOut, logoutFromAccount };
}
