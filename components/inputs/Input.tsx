import { TextInput, type TextInputProps, View, StyleSheet, Dimensions } from "react-native";
import { ThemedText } from "../ThemedText";

type InputProps = TextInputProps & {
  label: string;
  size?: "small" | "medium" | "large" | "full";
};

export default function Input({
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  style,
  placeholder,
  label,
  size = "full",
  ...rest
}: InputProps) {
  const { width } = Dimensions.get("window");

  const inputSize = {
    small: { width: width * 0.4 },
    medium: { width: width * 0.6 },
    large: { width: width * 0.8 },
    full: { width: width - 32 },
  };

  return (
    <View style={styles.wrapper}>
      <ThemedText type="defaultSemiBold" style={styles.label}>
        {label}
      </ThemedText>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        {...rest}
        style={[styles.input, { width: inputSize[size].width }, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "center",
    marginVertical: 5,
  },
  label: {
    marginBottom: 2,
  },
  input: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    backgroundColor: "#fff",
  },
});
