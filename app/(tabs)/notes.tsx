import MainLayout from "@/components/layouts/MainLayout";
import ScreenLayout from "@/components/layouts/ScreenLayout";
import { Text } from "react-native";

export default function Notes() {
  return (
    <MainLayout>
      <ScreenLayout>
        <Text>Notes</Text>
      </ScreenLayout>
    </MainLayout>
  );
}
