import Button from "@/components/buttons/Button";
import MainLayout from "@/components/layouts/MainLayout";
import ScreenLayout from "@/components/layouts/ScreenLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <ScreenLayout>
        <Button text="Press me" type="primary" size="large" />
      </ScreenLayout>
    </MainLayout>
  );
}
