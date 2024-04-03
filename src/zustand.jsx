import { create } from "zustand";

const useStore = create((set) => ({
  data: {},
  updateData: (newBears) => set({ data: newBears }),
}));

export default useStore;
