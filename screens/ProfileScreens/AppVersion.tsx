import { View, Text, StyleSheet } from "react-native";

export const AppVersion = () => {
  return (
    <>
      <View>
        <Text style={styles.text}>Sign Out</Text>
        <Text style={styles.text}>Version: 01.01.01</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
