import { Pressable, type PressableProps, StyleSheet, useColorScheme, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

type IconButton = PressableProps & {
  icon: "image" | "camera-alt";
  showText?: boolean;
  text?: string;
};

export default function IconButton({ icon, showText = false, text, onPress, ...rest }: IconButton) {
  const colorScheme = useColorScheme();
  return (
    <View style={[{ alignItems: "center", justifyContent: "center" }]}>
      <Pressable onPress={onPress} {...rest} style={[styles.container]}>
        <MaterialIcons name={icon} size={30} color="black" selectionColor={Colors[colorScheme ?? "light"].tint} />
      </Pressable>
      {showText && <ThemedText type="defaultSemiBold">{text}</ThemedText>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});
