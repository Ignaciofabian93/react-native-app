import { create } from "zustand";

type LanguageStore = {
  language: "en" | "es";
  setLanguage: (language: "en" | "es") => void;
};

const LanguageStore = create<LanguageStore>((set) => ({
  language: "en",
  setLanguage: (language) => set({ language }),
}));

export default LanguageStore;
