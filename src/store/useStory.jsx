import { create } from "zustand";

const useStory = create((set) => ({
  user: {
    name: "Mariami",
    adress: {
      city: "Batumi",
      country: "Georgia",
    },
  },

  // updateCity: (city) => set((state) => ({user: {state.user.ad}}))),
  updateCity: (newCity) =>set((state) => ({ user: { ...state.user, adress: { city: newCity } } })),
}));

export default useStory;

