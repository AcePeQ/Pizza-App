import toast from "react-hot-toast";
import { ICreatePost } from "../features/Order/useCreateOrder";

export async function createOrderApi(dataOrder: ICreatePost) {
  try {
    const res = await fetch("/api/order/order", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(dataOrder),
      credentials: "include",
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

export async function getHistoryOrderApi(userId: string | undefined) {
  try {
    const res = await fetch(`/api/order/order-history?userId=${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      const error = await res.json();

      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
}
