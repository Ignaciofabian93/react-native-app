import { StyleSheet, View } from "react-native";
import Button from "@/components/buttons/Button";
import MainLayout from "@/components/layouts/MainLayout";
import ScreenLayout from "@/components/layouts/ScreenLayout";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Card from "@/components/cards/Card";

export default function MyPets() {
  return (
    <MainLayout>
      <ScreenLayout>
        <ThemedView style={[styles.container]}>
          <View style={[styles.header]}>
            <ThemedText type="title">My Pets</ThemedText>
          </View>
          <View style={[styles.content]}>
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
            <Card>
              <Card.Image />
              <Card.ContentWrapper>
                <Card.Header />
                <Card.Body />
              </Card.ContentWrapper>
            </Card>
          </View>
          <View style={[styles.bottomSection]}>
            <Button text="Add Pet" type="primary" size="full" />
          </View>
        </ThemedView>
      </ScreenLayout>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 8,
  },
  header: {
    width: "100%",
    height: "10%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomSection: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
