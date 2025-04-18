import toast from "react-hot-toast";

export async function getMenuApi() {
  try {
    const res = await fetch("/api/menu/pizzaMenu", {
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
