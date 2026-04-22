import { create } from 'zustand';

interface AppState {
  isMenuOpen: boolean;
  toggleMenu: (open?: boolean) => void;
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  hoveredObject: string | null;
  setHoveredObject: (id: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  isMenuOpen: false,
  toggleMenu: (open) => set((state) => ({ isMenuOpen: open ?? !state.isMenuOpen })),
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  hoveredObject: null,
  setHoveredObject: (id) => set({ hoveredObject: id }),
}));
