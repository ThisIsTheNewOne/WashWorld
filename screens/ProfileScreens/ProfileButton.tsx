import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface AvatarPicture {
  title: string;
  onPress: any;
}

export const ProfileButton = (props: AvatarPicture) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.profileContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  title: {
    fontSize: 20,
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
