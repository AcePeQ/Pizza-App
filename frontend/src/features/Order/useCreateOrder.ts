import { useMutation } from "@tanstack/react-query";
import { IPizzaMenuItem } from "../Menu/Menu";
import { createOrderApi } from "../../services/apiOrder";

export interface ICreatePost {
  userId: string;
  pizzas: IPizzaMenuItem[];
}

export function useCreateOrder() {
  const { mutate: createPost, isPending: isCreatingPost } = useMutation({
    mutationFn: (data: ICreatePost) => createOrderApi(data),
  });

  return { createPost, isCreatingPost };
}
