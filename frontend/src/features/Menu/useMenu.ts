import { useQuery } from "@tanstack/react-query";
import { getMenuApi } from "../../services/apiMenu";
import { IFiltersState } from "./PizzaFilters/PizzaFilters";

export function useMenu(filters: IFiltersState) {
  const {
    isFetching: isGettingMenu,
    isError: isMenuError,
    error: menuError,
    data: menuData,
  } = useQuery({
    queryKey: ["menu", filters.sortBy, filters.ingredients],
    queryFn: () => getMenuApi(filters),
  });

  return { isGettingMenu, isMenuError, menuError, menuData };
}
