import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "black",
      width: "100%",
      height: "100%",
      color: "white",
      justifyContent: "center",
      alignItems: "center",
    },
    profileContainer: {
      position: "relative",
      marginBottom: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    initialsContainer: {
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    initialsText: {
      fontSize: 36,
      color: "white",
    },
    cameraButton: {
      position: "absolute",
      bottom: 0,
      right: 0,
      backgroundColor: "white",
      borderRadius: 15,
      padding: 5,
    },
    cameraText: {
      fontSize: 18,
    },
    userName: {
      margin: 10,
      marginBottom: 20,
      color: "white",
    },
    camera: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonContainer: {
      backgroundColor: "#fff",
      alignSelf: "flex-end",
    },
  });
  