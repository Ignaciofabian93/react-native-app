import { useState } from "react";
import { View, StyleSheet, Dimensions, Pressable } from "react-native";
import DatePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import Input from "./Input";
import { MaterialIcons } from "@expo/vector-icons";

export default function Calendar() {
  const { width } = Dimensions.get("screen");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());

  const changeDate = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    if (event.type === "dismissed") setShowCalendar(false);
    setDate(selectedDate as Date);
    setShowCalendar(false);
  };

  return (
    <View style={[styles.container, { width: width - 30 }]}>
      <Input label="Birthday" editable={false} size="medium" value={date.toLocaleDateString()} />
      <Pressable onPress={() => setShowCalendar(true)} style={[styles.calendar]}>
        <MaterialIcons name="calendar-month" size={30} color="black" />
      </Pressable>
      {showCalendar && <DatePicker mode="date" value={date} onChange={changeDate} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 5,
  },
  calendar: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 10,
    padding: 8,
    position: "fixed",
    right: 70,
    top: 13,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
});
