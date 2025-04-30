import { useMutation } from "@tanstack/react-query";
import { checkAuthApi } from "../../services/apiAccount";
import { useUserStore } from "../../store/useUserStore";

export function useCheckAuth() {
  const { user, checkAuth, logout } = useUserStore();
  const { mutate: checkAuthFn } = useMutation({
    mutationFn: () => checkAuthApi(),
    onSuccess: (data) => {
      if (!user) checkAuth(data.user);
    },
    onError: () => {
      if (user) logout();
    },
  });

  return { checkAuthFn };
}
