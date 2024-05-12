import { RootStackParamList } from "@/app/_layout";
import CustomTextInput from "@/components/IntroScreens/Input";
import CustomInput from "@/components/IntroScreens/Input";
import { validatePassword } from "@/components/IntroScreens/ValidatePassword";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, Button, StyleSheet, Image } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList>;

const LoginScreen = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleLogin = () => {
    setUsernameError(null);
    setPasswordError(null);
    // dispatch(login({username: username, password: password}))
    console.log("THis is a login");
    let hasError = false;

    if (!username) {
      setUsernameError("Username cannot be empty");
      hasError = true;
    }

    const passError = validatePassword(password);
    if (passError !== null) {
      setPasswordError(passError);
    }

    if (hasError) {
      // If there are errors, stop the signup process
      return;
    }
  };

  return (
    <View style={styles.conatiner}>
      <Image
        source={require("@/assets/images/Background-Img.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />
      <Image
        source={require("@/assets/images/washWorld-logo.png")}
        style={styles.reactLogo}
      />
      <View style={styles.inputContainer}>
        <CustomTextInput
          label="Username"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          secureTextEntry={false}
          error={usernameError}
        />

        <CustomTextInput
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          error={passwordError}
        />
      </View>

      <View style={styles.conatiner}></View>
      <Button title="Login" onPress={handleLogin} />
      <View style={[styles.buttonContainer, { backgroundColor: "#0CEF78" }]}>
        <Button title="Next" onPress={handleLogin} color="black" />
      </View>
      {/* <Button title="Go to Signup" onPress={() => props.navigation.navigate("AuthSignup")} /> */}
    </View>
  );
};

export default LoginScreen;

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
  inputContainer: {
    // backgroundColor:"rgba(205, 29, 29, 0.7)",
    width: 200,
    height: 80,
    marginTop: 20,
  },
  buttonContainer: {
    width: 200,
    height: 60,
    marginBottom: 5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontFamily: "GilroyBold",
  },
});
