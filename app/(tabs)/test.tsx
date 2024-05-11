import { View, Text, StyleSheet } from "react-native";

const Test = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is now the new Test Page</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
  },
});
