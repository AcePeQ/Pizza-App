import toast from "react-hot-toast";
import { IFiltersState } from "../features/Menu/PizzaFilters/PizzaFilters";
import API_URL from "../utils/apiUrl";

export async function getMenuApi(filters: IFiltersState) {
  try {
    const res = await fetch(
      `${API_URL}/api/menu/pizzaMenu?sortBy=${
        filters.sortBy.value
      }&ingredients=${
        filters.ingredients.length > 0
          ? filters.ingredients.map((ingredient) => ingredient.value).join(",")
          : null
      }`,
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
    const res = await fetch(`${API_URL}/api/menu/ingredients`, {
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
