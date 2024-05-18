import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Button, StyleSheet, Image } from "react-native";
import { Props } from "./MainNavigation";

export type RootStackParamList = {
  InitialLoadingPage: undefined;
  AuthenticationOptions: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  notFound: any;
  // index: { initialRouteName: string };
};

type Props2 = NativeStackScreenProps<RootStackParamList>;

const AuthenticationOptions: React.FC<Props>  = ({ navigation }) => {
  return (
    <View style={styles.conatiner}>
      <Image
        source={require("../assets/images/Background-Img.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />
      <Image
        source={require("../assets/images/washWorld-logo.png")}
        style={styles.reactLogo}
      />
      <View style={styles.conatinerText}>
        <View style={[styles.buttonContainer, { backgroundColor: "#0CEF78" }]}>
          <Button title="LOG IN" onPress={() => navigation.navigate("LoginScreen")} color="white" />
        </View>
        <View style={[styles.buttonContainer, { backgroundColor: "#454646" }]}>
          <Button title="SIGN IN" onPress={() => navigation.navigate("SignupScreen")}  color="white"/>
        </View>
        <Button
          title="Contiune as guest"
          onPress={() => console.log("Contiune as a guest")}
          color="white"
        />
      </View>

      <View style={styles.conatiner}></View>
    </View>
  );
};

export default AuthenticationOptions;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: 300,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  conatinerText: {
    marginTop: 30,
    // backgroundColor: "#ff0000",
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
    marginTop: "60%",
  },
  buttonContainer: {
    width: 200,
    height: 60,
    marginBottom: 5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontFamily: 'GilroyBold'
  },
});
