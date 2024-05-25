import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import { Picture } from "./picture";
import * as SecureStore from "expo-secure-store";
import { User } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { deleteProfilePicture } from "../../store/profilePhotoSlice";

interface AvatarPicture {
  user: string | null;
  fullUser: User | null;
}

export const AvatarPicture = (props: AvatarPicture) => {
  const { user, fullUser } = props;
  const [camera, setCamera] = useState(false);
  const [photoToDisplay, setPhotoToDisplay] = useState("");
  const [openCameraModule, setOpenCameraModule] = useState(false);
  const savedPhoto = useSelector(
    (state: RootState) => state.profilePicture.savedPhoto
  );
  const dispatch = useDispatch<AppDispatch>();

  const getInitials = (name: string) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "";
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleSignIn = () => {
    // setSignInModalVisible(true);
  };

  const OpenModal = () => {
    setOpenCameraModule(true);
    setCamera(true);
  };

  const DeleteImg = () => {
    const UserId = String(fullUser?.id);
    dispatch(deleteProfilePicture(UserId));
    setPhotoToDisplay("")
  };

  return (
    <>
      {user === "Guest" ? (
        <View
          style={[
            styles.initialsContainer,
            { backgroundColor: generateRandomColor() },
          ]}
        >
          <Text style={styles.initialsText}>{getInitials(user || "U")}</Text>
        </View>
      ) : (
        <View style={styles.profileContainer}>
          <>
            {photoToDisplay.length > 0 ? (
              <Image
                style={styles.preview}
                source={{ uri: "data:image/jpg;base64," + photoToDisplay }}
              />
            ) : savedPhoto !== null ? (
              <>
                <Image style={styles.preview} source={{ uri: savedPhoto }} />
              </>
            ) : (
              <View
                style={[
                  styles.initialsContainer,
                  { backgroundColor: generateRandomColor() },
                ]}
              >
                <Text style={styles.initialsText}>
                  {getInitials(user || "U")}
                </Text>
              </View>
            )}
          </>
          <>
            <TouchableOpacity style={styles.cameraButton}>
              <Text style={styles.cameraText} onPress={() => OpenModal()}>
                📷
              </Text>
            </TouchableOpacity>
            <View>
              {photoToDisplay.length > 0 || savedPhoto !== null ? (
                <TouchableOpacity style={styles.cameraButton2}>
                  <Text style={styles.cameraText} onPress={() => DeleteImg()}>
                    Delete
                  </Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
          </>
        </View>
      )}

      <Modal
        visible={openCameraModule}
        onRequestClose={() => setOpenCameraModule(false)}
      >
        {camera ? (
          <Picture
            setCamera={setCamera}
            setPhotoToDisplay={setPhotoToDisplay}
            onPress={setOpenCameraModule}
            fullUser={fullUser}
            savedPhoto={savedPhoto}
          ></Picture>
        ) : (
          <></>
        )}
      </Modal>
    </>
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
  preview: {
    alignSelf: "stretch",
    width: 100,
    height: 100,
    borderRadius: 50,
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
  cameraButton2: {
    position: "absolute",
    bottom: 0,
    right: 50,
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
