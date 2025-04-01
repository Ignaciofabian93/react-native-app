import { ScrollView, StyleSheet } from "react-native";

type HorizontalScroller = {
  children: React.ReactNode;
};

export default function HorizontalScroller({ children }: HorizontalScroller) {
  return <ScrollView contentContainerStyle={[styles.container]}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
