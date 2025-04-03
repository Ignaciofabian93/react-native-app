import Button from "@/components/buttons/Button";
import PetForm from "@/components/forms/PetForm";
import MainLayout from "@/components/layouts/MainLayout";
import ScreenLayout from "@/components/layouts/ScreenLayout";
import VerticalScroller from "@/components/layouts/VerticalScroller";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, View } from "react-native";

export default function PetScreen() {
  return (
    <MainLayout>
      <ScreenLayout>
        <ThemedView style={[styles.container]}>
          <VerticalScroller>
            <PetForm />
          </VerticalScroller>
          <View style={[styles.bottomSection]}>
            <Button text="Save" type="primary" size="full" />
          </View>
        </ThemedView>
      </ScreenLayout>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "88%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 8,
  },
  bottomSection: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
