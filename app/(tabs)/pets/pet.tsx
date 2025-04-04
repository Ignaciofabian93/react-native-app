import PetForm from "@/components/forms/PetForm";
import MainLayout from "@/components/layouts/MainLayout";
import ScreenLayout from "@/components/layouts/ScreenLayout";

export default function PetScreen() {
  return (
    <MainLayout>
      <ScreenLayout>
        <PetForm />
      </ScreenLayout>
    </MainLayout>
  );
}
