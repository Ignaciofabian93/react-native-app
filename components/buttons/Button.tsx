import { Pressable, Text, StyleSheet, type PressableProps, ActivityIndicator } from "react-native";
import { Colors } from "@/constants/Colors";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";

type Button = PressableProps & {
  type: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  onPress?: () => void;
  isLoading?: boolean;
};

export default function Button({
  type = "primary",
  size = "large",
  disabled = true,
  onPress,
  isLoading = false,
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
  const opacity = useSharedValue(1);

  // Define animated styles
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <Pressable
      onPressIn={() => (scale.value = withSpring(0.95))} // Shrink effect
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
      <Animated.View
        style={[
          styles.animatedContainer,
          animatedStyle,
          { opacity: withTiming(isLoading ? 0.5 : 1, { duration: 300 }) },
        ]}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.light.background} />
        ) : (
          <Text style={[styles.text, { fontSize: textSize[size] }]}>Button</Text>
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
