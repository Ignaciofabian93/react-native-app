import { Pet } from "@/types/pet";
import { create } from "zustand";

export const defaultPet: Pet = {
  id: 0,
  name: "",
  breed: "",
  birthday: "",
  weight: 0,
};

type PetStore = {
  pets: Pet[];
  pet: Pet;
  handlePet: (pet: Pet) => void;
  addNewPet: (pet: Pet) => void;
  editPet: ({ id, pet }: { id: number; pet: Pet }) => void;
  removePet: (id: number) => void;
};

const useStore = create<PetStore>((set) => ({
  pets: [],
  pet: defaultPet,
  handlePet: (pet: Pet) => set({ pet: pet }),
  addNewPet: (pet: Pet) => set((state) => ({ pets: [...state.pets, pet] })),
  editPet: ({ id, pet }: { id: number; pet: Pet }) =>
    set((state) => {
      const updatedPets = state.pets.map((p: Pet) => {
        if (p.id === id) {
          return pet;
        }
        return p;
      });
      return { pets: updatedPets };
    }),
  removePet: (id: number) => set((state) => ({ pets: state.pets.filter((p) => p.id !== id) })),
}));

export default useStore;
