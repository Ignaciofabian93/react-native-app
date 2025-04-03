import { StyleSheet, View } from "react-native";
import Button from "@/components/buttons/Button";
import MainLayout from "@/components/layouts/MainLayout";
import ScreenLayout from "@/components/layouts/ScreenLayout";
import { ThemedView } from "@/components/ThemedView";
import Card from "@/components/cards/Card";
import VerticalScroller from "@/components/layouts/VerticalScroller";
import { useRouter } from "expo-router";

export default function MyPets() {
  const router = useRouter();

  const addPet = () => {
    router.push({ pathname: "/(tabs)/pets/pet", params: { title: "New Pet" } });
  };

  const editPet = () => {
    router.push({ pathname: "/(tabs)/pets/pet", params: { title: "Edit Pet" } });
  };

  return (
    <MainLayout>
      <ScreenLayout>
        <ThemedView style={[styles.container]}>
          <VerticalScroller>
            <Card onPress={editPet}>
              <Card.Image />
              <Card.ContentWrapper>
                <Card.Header />
                <Card.Body />
              </Card.ContentWrapper>
            </Card>
            <Card>
              <Card.Image />
              <Card.ContentWrapper>
                <Card.Header />
                <Card.Body />
              </Card.ContentWrapper>
            </Card>
            <Card>
              <Card.Image />
              <Card.ContentWrapper>
                <Card.Header />
                <Card.Body />
              </Card.ContentWrapper>
            </Card>
          </VerticalScroller>
          <View style={[styles.bottomSection]}>
            <Button text="Add Pet" type="primary" size="full" onPress={addPet} />
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
  content: {
    width: "100%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomSection: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
