import { View, StyleSheet } from "react-native";
import Input from "../inputs/Input";
import Calendar from "../inputs/Calendar";
import VerticalScroller from "../layouts/VerticalScroller";
import Button from "../buttons/Button";

export default function PetForm() {
  return (
    <View style={[styles.container]}>
      <VerticalScroller>
        <Input placeholder="Name" label="Name" />
        <Input placeholder="Breed" label="Breed" />
        <Calendar />
        <Input placeholder="Weight" label="Weight" keyboardType="decimal-pad" />
        <View style={[styles.bottomSection]}>
          <Button text="Save" type="primary" size="full" />
        </View>
      </VerticalScroller>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  bottomSection: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
