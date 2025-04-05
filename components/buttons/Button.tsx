import { useEffect } from "react";
import { Pressable, Text, StyleSheet, type PressableProps, ActivityIndicator } from "react-native";
import { Colors } from "@/constants/Colors";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from "react-native-reanimated";
import useDimensions from "@/hooks/useDimensions";

type Button = PressableProps & {
  type: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large" | "full";
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
  const { width } = useDimensions({ scope: "window" });
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
    full: {
      height: 48,
      width: width * 0.9,
    },
  };
  const textSize = {
    small: 14,
    medium: 16,
    large: 18,
    full: 18,
  };

  // Reanimated values
  const scale = useSharedValue(1);
  const buttonWidth = useSharedValue(1);

  useEffect(() => {
    if (isLoading) {
      buttonWidth.value = withTiming(1, { duration: 5000 }); // Animate buttonWidth over 5s
    } else {
      buttonWidth.value = 0;
    }
  }, [isLoading]);

  // Define animated styles
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatedWidth = useAnimatedStyle(() => ({
    width: `${buttonWidth.value * 95}%`,
    backgroundColor: "rgba(255,255,255,0.2)",
  }));

  return (
    <Animated.View
      style={[
        styles.button,
        !disabled && animatedStyle,
        {
          opacity: disabled ? 0.4 : 1,
          backgroundColor,
          width: buttonSize[size].width,
          height: buttonSize[size].height,
        },
      ]}
    >
      <Pressable
        onPressIn={() => (scale.value = withSpring(1.03))} // Shrink effect
        onPressOut={() => (scale.value = withSpring(1))} // Return to normal size
        style={[styles.animatedContainer]}
        onPress={disabled ? null : onPress}
      >
        {isLoading && <Animated.View style={[styles.loadingOverlay, animatedWidth]} />}
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.light.background} />
        ) : (
          <Text style={[styles.text, { fontSize: textSize[size] }]}>{text}</Text>
        )}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    minWidth: 80,
    height: 56,
    marginHorizontal: 4,
    marginVertical: 8,
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
  loadingOverlay: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    height: "100%",
  },
});
