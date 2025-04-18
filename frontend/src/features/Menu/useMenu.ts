import { useQuery } from "@tanstack/react-query";
import { getMenuApi } from "../../services/apiMenu";

export function useMenu() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenuApi,
  });

  return { isPending, isError, error, data };
}
