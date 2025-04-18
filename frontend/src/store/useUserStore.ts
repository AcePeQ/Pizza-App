import { create } from "zustand";

export interface IUser {
  id: string;
  email: string;
  displayName: string;
  profilePicture: string;
}

export interface ICartItem {
  id: string;
  name: string;
  image: string;
  price: string;
  size: string;
  ingredients: string[];
}

interface IUserState {
  user: IUser | null;
  userCart: ICartItem[] | [];

  login: (userData: IUser) => void;
  logout: () => void;
  checkAuth: (userData: IUser) => void;
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
    set(() => ({ user: null }));
    sessionStorage.removeItem("user");
  },

  checkAuth: (userData: IUser) => {
    const cart = JSON.parse(localStorage.getItem("userCart") as string) || [];

    set(() => ({ user: userData, userCart: cart }));
    sessionStorage.setItem("user", JSON.stringify(userData));
  },
}));
