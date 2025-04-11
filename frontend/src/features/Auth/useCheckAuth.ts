import { useQuery } from "@tanstack/react-query";
import { checkAuthApi } from "../../services/apiAccount";

export function useCheckAuth() {
  const {
    isPending: isCheckingAuth,
    isError: isAuthError,
    data: userData,
  } = useQuery({
    queryKey: ["checkAuth"],
    queryFn: checkAuthApi,
  });

  return { isCheckingAuth, isAuthError, userData };
}
