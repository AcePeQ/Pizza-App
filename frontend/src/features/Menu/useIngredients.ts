import { useQuery } from "@tanstack/react-query";
import { getIngredientsApi } from "../../services/apiMenu";

export function useIngredients() {
  const {
    isPending: isGettingIngredients,
    isError: isIngredientsError,
    error: ingredientsError,
    data: ingredientsData,
  } = useQuery({
    queryKey: ["ingredients"],
    queryFn: getIngredientsApi,
  });

  return {
    isGettingIngredients,
    isIngredientsError,
    ingredientsError,
    ingredientsData,
  };
}
