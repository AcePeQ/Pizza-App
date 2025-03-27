import { create } from "zustand";

interface ModalState {
  isSignUpModalOpen: boolean;
  isSignInModalOpen: boolean;

  setSignUpModalStatus: (status: boolean) => void;
  setSignInModalStatus: (status: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isSignUpModalOpen: false,
  isSignInModalOpen: false,

  setSignUpModalStatus: (status: boolean) => set({ isSignUpModalOpen: status }),
  setSignInModalStatus: (status: boolean) => set({ isSignInModalOpen: status }),
}));
