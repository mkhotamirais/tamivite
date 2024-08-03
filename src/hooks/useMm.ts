import { create } from "zustand";

interface MmState {
  mm: boolean;
  openMm(): void;
  closeMm(): void;
}

export const useMm = create<MmState>((set) => ({
  mm: false,
  openMm: () => set({ mm: true }),
  closeMm: () => set({ mm: false }),
}));
