import { Dimensions, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { top } = useSafeAreaInsets();
  return <ThemedView style={[styles.container, { paddingTop: top }]}>{children}</ThemedView>;
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    flexDirection: "column",
  },
});
