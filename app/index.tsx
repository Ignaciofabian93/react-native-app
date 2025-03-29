import Button from "@/components/buttons/Button";
import MainLayout from "@/components/layouts/MainLayout";

export default function Index() {
  return (
    <MainLayout>
      <Button text="Press me" type="primary" size="large" />
    </MainLayout>
  );
}
