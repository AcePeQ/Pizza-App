import { create } from "zustand";

export interface IUser {
  id: string;
  email: string;
  displayName: string;
  profilePicture: string;
}

export interface ICartItem {}

interface IUserState {
  user: IUser | null;
  userCart: ICartItem | null;

  login: (userData: IUser) => void;
  logout: () => void;
  checkAuth: (userData: IUser) => void;
}

export const useUserStore = create<IUserState>((set) => ({
  user: null,
  userCart: null,

  login: (userData: IUser) => {
    set(() => ({ user: userData }));
    sessionStorage.setItem("user", JSON.stringify(userData));
  },

  logout: () => {
    set(() => ({ user: null }));
    sessionStorage.removeItem("user");
  },

  checkAuth: (userData: IUser) => {
    set(() => ({ user: userData }));
    sessionStorage.setItem("user", JSON.stringify(userData));
  },
}));
