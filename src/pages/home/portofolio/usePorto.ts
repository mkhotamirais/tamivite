import { create } from "zustand";

interface PortoState {
  nav: boolean;
  toggleNav: () => void;
  hideNav: () => void;
}

export const usePorto = create<PortoState>((set) => ({
  nav: false,
  toggleNav: () => set((state) => ({ nav: !state.nav })),
  hideNav: () => set({ nav: false }),
}));
