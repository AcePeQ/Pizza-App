import { useQuery } from "@tanstack/react-query";
import { getMenuApi } from "../../services/apiMenu";

export function useMenu() {
  const {
    isPending: isGettingMenu,
    isError: isMenuError,
    error: menuError,
    data: menuData,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: getMenuApi,
  });

  return { isGettingMenu, isMenuError, menuError, menuData };
}
