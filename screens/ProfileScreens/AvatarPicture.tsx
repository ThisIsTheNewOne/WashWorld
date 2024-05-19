import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";

interface AvatarPicture {
    user: string | null
}

export const AvatarPicture = (props: AvatarPicture) => {
    const { user } = props

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
    

    return (
        <>
         <View style={styles.profileContainer}>
          <View
            style={[
              styles.initialsContainer,
              { backgroundColor: generateRandomColor() },
            ]}
          >
            <Text style={styles.initialsText}>{getInitials(user || "U")}</Text>
          </View>
          <>
            <TouchableOpacity style={styles.cameraButton}>
              <Text style={styles.cameraText}>📷</Text>
            </TouchableOpacity>
          </>
        </View>
        </>
    )
}

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
  