import { ThemedView } from "../ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Dimensions } from "react-native";

export default function ScreenLayout({ children }: { children: React.ReactNode }) {
  const { bottom } = useSafeAreaInsets();
  const { height } = Dimensions.get("window");
  const screenHeight = height - bottom - 10;
  return (
    <ThemedView
      style={{
        height: screenHeight,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 46,
      }}
    >
      {children}
    </ThemedView>
  );
}
