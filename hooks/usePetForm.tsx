import { Pet } from "@/types/pet";
import { useState } from "react";

export default function usePetForm() {
  const [pet, setPet] = useState<Pet>();

  const handlePet = () => {
    setPet({
      id: 0,
      name: "",
      breed: "",
      birthday: "",
      weight: 0,
    });
  };

  const savePet = () => {};

  return { pet, handlePet, savePet };
}
