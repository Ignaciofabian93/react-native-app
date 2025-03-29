import { Pressable, Text, StyleSheet, type PressableProps, ActivityIndicator } from "react-native";
import { Colors } from "@/constants/Colors";
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from "react-native-reanimated";

type Button = PressableProps & {
  type: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  onPress?: () => void;
  isLoading?: boolean;
  text: string;
};

export default function Button({
  type = "primary",
  size = "large",
  disabled = false,
  onPress,
  isLoading = false,
  text,
}: Button) {
  const backgroundColor = Colors[type];
  const buttonSize = {
    small: {
      height: 32,
      width: 80,
    },
    medium: {
      height: 40,
      width: 120,
    },
    large: {
      height: 48,
      width: 160,
    },
  };
  const textSize = {
    small: 14,
    medium: 16,
    large: 18,
  };

  // Reanimated values
  const scale = useSharedValue(1);

  // Define animated styles
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPressIn={() => (scale.value = withSpring(1.3))} // Shrink effect
      onPressOut={() => (scale.value = withSpring(1))} // Return to normal size
      style={[
        styles.button,
        {
          opacity: disabled ? 0.4 : 1,
          backgroundColor,
          width: buttonSize[size].width,
          height: buttonSize[size].height,
        },
      ]}
      onPress={disabled ? null : onPress}
    >
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.light.background} />
        ) : (
          <Text style={[styles.text, { fontSize: textSize[size] }]}>{text}</Text>
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minWidth: 80,
    height: 56,
    marginHorizontal: 4,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1234ef",
  },
  text: {
    fontWeight: "bold",
    color: "#fff",
  },
  animatedContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
