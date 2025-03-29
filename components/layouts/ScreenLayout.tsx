import { ThemedView } from "../ThemedView";

export default function ScreenLayout({ children }: { children: React.ReactNode }) {
  return <ThemedView style={{ height: "100%" }}>{children}</ThemedView>;
}
