import { Dimensions, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <ThemedView style={[styles.container]}>{children}</ThemedView>;
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
