import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
// import {  logout, setToken,} from '../store/userSlice';
import { signup } from "../store/userSlice";
// import * as SecureStore from 'expo-secure-store';
// import { RootStackParamList } from "./_layout";
// import CustomTextInput from "@/components/IntroScreens/Input";
// import { validatePassword } from "@/components/IntroScreens/ValidatePassword";
import Toast from 'react-native-toast-message';
import { RootStackParamList } from "./MainNavigation";
import { validatePassword } from "../components/IntroScreens/ValidatePassword";
import CustomTextInput from "../components/IntroScreens/Input";

type Props = NativeStackScreenProps<RootStackParamList, 'SignupScreen'>;

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [licensePlateError, setLicensePlateError] = useState<string | null>(
    null
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleSignup = async () => {
    setUsernameError(null);
    let hasError = false;

    if (!username) {
      setUsernameError("Username cannot be empty");
      hasError = true;
    }

    const passError = validatePassword(password);
    if (passError !== null) {
      setPasswordError(passError);
    }

    if (!licensePlate) {
      setLicensePlateError("License plate cannot be empty");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      const result = await dispatch(
        signup({ username, password, licensePlate })
      );
      const payload = result.payload; // Extract payload
      console.log("Signup result payload:", payload);
      if (payload.statusCode !== null && payload.statusCode === 200) {
        console.log("hahah", "User created successfully");
        Toast.show({
            type: 'success',
            text1: 'Signup Complete',
            text2: 'You can navigate back to the login page or you will be redirected in 15 seconds',
            visibilityTime: 15000, 
            autoHide: true,
            topOffset: 30,
          });
          setTimeout(() => {
            navigation.navigate('LoginScreen'); 
          }, 15000);
        // navigation.navigate("AuthenticationOptions");
      } else if (payload === "Username already exists") {
        setUsernameError("Username already exists");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };


  return (
    <View style={styles.container}>
     <Toast />

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

      <CustomTextInput
        label="Password"
        placeholder="License Plate"
        value={licensePlate}
        onChangeText={setLicensePlate}
        secureTextEntry={false}
        error={licensePlateError}
        optionalInfo="We need your plate for recognizing your car when you arrive"
      />


      <View style={[styles.buttonContainer, { backgroundColor: "#0CEF78" }]}>
        <Button title="Next" onPress={handleSignup} color="black" />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  button: {
    marginTop: 10,
    padding: 10,
    width: "100%",
    // backgroundColor: 'blue',
  },
  loginText: {
    marginTop: 20,
    color: "blue",
    fontSize: 16,
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
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default SignupScreen;
