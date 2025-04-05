import { Dimensions } from "react-native";

type ScopeType = "screen" | "window";

export default function useDimensions({ scope = "window" }: { scope: ScopeType }) {
  const { width, height } = Dimensions.get(scope);

  return { width, height };
}
