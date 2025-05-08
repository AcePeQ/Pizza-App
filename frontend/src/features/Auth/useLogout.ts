import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useUserStore } from "../../store/useUserStore";
import { logoutFromAccountApi } from "../../services/apiAccount";
import { useNavigate } from "react-router";

export function useLogout() {
  const navigate = useNavigate();
  const { logout } = useUserStore();
  const { isPending: isLoggingOut, mutate: logoutFromAccount } = useMutation({
    mutationFn: () => logoutFromAccountApi(),
    onSuccess: () => {
      toast.success("Successfully logged out");
      navigate("/", { replace: true });
      logout();
    },
  });

  return { isLoggingOut, logoutFromAccount };
}
