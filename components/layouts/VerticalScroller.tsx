import { ScrollView, type ScrollViewProps, StyleSheet } from "react-native";

type VerticalScroller = ScrollViewProps & {
  children: React.ReactNode;
};

export default function VerticalScroller({ children, contentContainerStyle, ...rest }: VerticalScroller) {
  return (
    <ScrollView contentContainerStyle={[styles.container, contentContainerStyle]} {...rest}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 4,
    gap: 10,
  },
});
