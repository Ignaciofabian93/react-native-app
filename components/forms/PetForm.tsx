import { View, StyleSheet } from "react-native";
import Input from "../inputs/Input";

export default function PetForm() {
  return (
    <View style={[styles.container]}>
      <Input placeholder="Name" label="Name" />
      <Input placeholder="Breed" label="Breed" />
      <Input placeholder="Birthday" label="Birthday" />
      <Input placeholder="Weight" label="Weight" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
