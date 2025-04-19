import toast from "react-hot-toast";
import { IFiltersState } from "../features/Menu/PizzaFilters/PizzaFilters";

export async function getMenuApi(filters: IFiltersState) {
  try {
    const res = await fetch(
      `/api/menu/pizzaMenu?sortBy=${filters.sortBy.value}&ingredients=${filters.ingredients}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      }
    );

    if (!res.ok) {
      const error = await res.json();
      toast.error(error.message);

      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
}

export async function getIngredientsApi() {
  try {
    const res = await fetch(`/api/menu/ingredients`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    if (!res.ok) {
      const error = await res.json();
      toast.error(error.message);

      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
}
