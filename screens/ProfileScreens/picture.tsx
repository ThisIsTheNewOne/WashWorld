import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import { CameraView, Camera } from "expo-camera";
import React from "react";
import { CameraType } from "expo-camera/build/legacy/Camera.types";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { saveProfilePicture, updateProfilePicture } from "../../store/profilePhotoSlice";
import { User } from "../../store/userSlice";


interface PictureProps {
  setPhotoToDisplay: (photo: any) => void;
  setCamera: (showCamera: boolean) => void;
  onPress: (changeState: boolean) => void;
  fullUser: User | null;
  savedPhoto: string | null
}

export function Picture(props: PictureProps) {
  let cameraRef = useRef<any | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(false);
  const [photo, setPhoto] = useState(undefined as undefined | any);
  const [facing, setFacing] = useState("back");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 0.1, // 0.1  to 1
      base64: true,
      exif: false,
    };

    if (cameraRef.current) {
      let newPhoto = await cameraRef.current.takePictureAsync(options);

      if (facing === "front") {
        newPhoto = await manipulateAsync(
          newPhoto.localUri || newPhoto.uri,
          [{ rotate: 180 }, { flip: FlipType.Vertical }],
          { compress: 1, format: SaveFormat.PNG, base64: true }
        );
      }

      props.setPhotoToDisplay(newPhoto.base64);
      setPhoto(newPhoto);
    }
  };


  if (photo) {
    const saveProfile = {
      ProfilePicture: photo.base64,
      UserId: String(props.fullUser?.id)
    }

    if(props.savedPhoto !== null) {
      dispatch( updateProfilePicture( saveProfile ));
    } else {
      dispatch( saveProfilePicture( saveProfile ));
    }

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
        props.setCamera(false);
      });
      props.onPress(false);
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  return (
    <CameraView
      style={styles.container}
      facing={facing === "back" ? CameraType.back : CameraType.front}
      ref={cameraRef}
    >
      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => props.onPress(false)} />
        <View style={styles.test} />
        <Button title="Take Pic" onPress={takePic} />
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </CameraView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  test: {
    margin: 10,
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  button: {
    // flex: 1,
    // alignSelf: 'flex-end',
    // alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});
