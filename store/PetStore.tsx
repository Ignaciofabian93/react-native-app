import { Pet } from "@/types/pet";
import { create } from "zustand";

export const defaultPet: Pet = {
  id: 0,
  name: "",
  breed: "",
  birthday: new Date().toLocaleDateString(),
  weight: 0,
  photo: "",
};

type PetStore = {
  pets: Pet[];
  pet: Pet;
  handlePet: ({ key, value }: { key: string; value: string | number }) => void;
  addNewPet: (pet: Pet) => void;
  editPet: ({ id, pet }: { id: number; pet: Pet }) => void;
  removePet: (id: number) => void;
};

const usePetStore = create<PetStore>((set) => ({
  pets: [],
  pet: defaultPet,
  handlePet: ({ key, value }) => set((state) => ({ pet: { ...state.pet, [key]: value } })),
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

export default usePetStore;
