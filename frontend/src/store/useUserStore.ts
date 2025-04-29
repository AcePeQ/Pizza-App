import { create } from "zustand";

export interface IUser {
  _id: string;
  email: string;
  displayName: string;
  profilePicture: string;
}

export interface ICartItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  ingredients: string[];
  quantity: number;
}

interface IUserState {
  user: IUser | null;
  userCart: ICartItem[] | [];

  login: (userData: IUser) => void;
  logout: () => void;
  checkAuth: (userData: IUser) => void;

  addPizzaToCart: (pizza: ICartItem) => void;
  removePizzaFromCart: (pizzaId: string) => void;
  clearCart: () => void;

  decreaseQuantity: (pizzaId: string) => void;
  increaseQuantity: (pizzaId: string) => void;
}

export const useUserStore = create<IUserState>((set) => ({
  user: null,
  userCart: [],

  login: (userData: IUser) => {
    set(() => ({ user: userData }));
    const cart = JSON.parse(localStorage.getItem("userCart") as string) || [];

    sessionStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("userCart", JSON.stringify(cart));
  },

  logout: () => {
    set(() => ({ user: null, userCart: [] }));
    sessionStorage.removeItem("user");
  },

  checkAuth: (userData: IUser) => {
    const cart = JSON.parse(localStorage.getItem("userCart") as string) || [];

    set(() => ({ user: userData, userCart: cart }));
    sessionStorage.setItem("user", JSON.stringify(userData));
  },

  addPizzaToCart: (pizza: ICartItem) => {
    set((state) => {
      const updatedCart = [...state.userCart, pizza];
      localStorage.setItem("userCart", JSON.stringify(updatedCart));
      return { userCart: updatedCart };
    });
  },

  removePizzaFromCart: (pizzaId: string) => {
    set((state) => {
      const updatedCart = state.userCart.filter(
        (pizza) => pizza._id !== pizzaId
      );
      localStorage.setItem("userCart", JSON.stringify(updatedCart));
      return { userCart: updatedCart };
    });
  },

  clearCart: () => {
    set(() => ({ userCart: [] }));
    localStorage.removeItem("userCart");
  },

  decreaseQuantity: (pizzaId: string) => {
    set((state) => {
      const findPizza = state.userCart.find((pizza) => pizza._id === pizzaId);
      if (findPizza) findPizza.quantity -= 1;
      localStorage.setItem("userCart", JSON.stringify(state.userCart));
      return { userCart: state.userCart };
    });
  },

  increaseQuantity: (pizzaId: string) => {
    set((state) => {
      const findPizza = state.userCart.find((pizza) => pizza._id === pizzaId);
      if (findPizza) findPizza.quantity += 1;
      localStorage.setItem("userCart", JSON.stringify(state.userCart));
      return { userCart: state.userCart };
    });
  },
}));
