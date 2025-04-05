import { View, StyleSheet } from "react-native";
import Input from "../inputs/Input";
import Calendar from "../inputs/Calendar";
import VerticalScroller from "../layouts/VerticalScroller";
import Button from "../buttons/Button";
import Screen from "../layouts/Screen";

export default function PetForm() {
  return (
    <Screen>
      <VerticalScroller contentContainerStyle={[{ paddingBottom: 100 }]}>
        <Input placeholder="Name" label="Name" />
        <Input placeholder="Breed" label="Breed" />
        <Calendar />
        <Input placeholder="Weight" label="Weight" keyboardType="decimal-pad" />
        <View style={[styles.bottomSection]}>
          <Button key={"save"} text="Save" type="primary" size="full" />
          <Button key={"medical records"} text="Add Medical records" type="primary" size="full" disabled />
        </View>
      </VerticalScroller>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bottomSection: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
