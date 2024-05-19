import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import * as MediaLibrary from 'expo-media-library';
import { Camera } from "expo-camera";
import React from "react";



interface PictureProps {
    setPhotoToDisplay: (photo: any) => void;
    setCamera: (showCamera: boolean) => void;
  }
  

export function Picture(props: PictureProps) {
  let cameraRef = useRef<any | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);
  const [photo, setPhoto] = useState(undefined as undefined | any);

  console.log("gfdgfg", cameraRef)
  
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
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

  const takePic = async () => {
    let options = {
      quality: 0.1, // 0.1  to 1
      base64: true,
      exif: false,
    };

    if (cameraRef.current) {
        const newPhoto = await cameraRef.current.takePictureAsync(options);
        props.setPhotoToDisplay(newPhoto);
        setPhoto(newPhoto);
      }
  };

  if (photo) {
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
        props.setCamera(false);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
      </View>
    </Camera>
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
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
