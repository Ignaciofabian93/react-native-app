import { TextInput, type TextInputProps, View, type ViewProps, StyleSheet } from "react-native";
import { ThemedText } from "../ThemedText";

type Input = TextInputProps &
  ViewProps & {
    label: string;
  };

export default function Input({
  value,
  secureTextEntry = false,
  keyboardType = "default",
  style,
  placeholder,
  label,
  ...rest
}: Input) {
  return (
    <View style={[styles.wrapper]}>
      <ThemedText type="defaultSemiBold" style={[styles.label]}>
        {label}
      </ThemedText>
      <View style={[style, styles.container]}>
        <TextInput
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholder={placeholder}
          {...rest}
          style={[styles.input]}
        />
      </View>
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
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
  },
  label: {
    marginBottom: 2,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    backgroundColor: "#fff",
  },
});
