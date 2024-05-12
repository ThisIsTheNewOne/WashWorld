import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
  optionalInfo?: string;
  error: string | null;
}

const CustomTextInput: React.FC<CustomInputProps> = (
  props: CustomInputProps
) => {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    optionalInfo,
    error,
  } = props;

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </View>
      {optionalInfo && (
        <Text style={styles.optionalInfo} numberOfLines={undefined}>
          {optionalInfo}
        </Text>
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  textInputContainer: {
    width: 200,
  },
  input: {
    width: 200,
    height: 40,
    padding: 10,
    backgroundColor: "#ffffff",
    color: "#000000",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  label: {
    marginBottom: 5,
    color: "#e2e2e2",
    fontWeight: "bold",
  },
  optionalInfo: {
    fontStyle: "italic",
    marginTop: 5,
    color: "#d0d0d0",
    width: 200,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    width: 200,
  },
});

export default CustomTextInput;
