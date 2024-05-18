import { useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Props } from "./MainNavigation";


const InitialLoadingPage: React.FC<Props>  = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
     navigation.navigate("AuthenticationOptions");
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.conatiner}>
      <Image
        source={require("../assets/images/Background-Img.png")}
        style={styles.backgroundImage}
      />
      <Image
        source={require("../assets/images/washWorld-logo.png")}
        style={styles.reactLogo}
      />
    </View>
  );
};

export default InitialLoadingPage;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  reactLogo: {
    height: 78,
    width: 190,
    marginBottom: "40%",
  },
});
