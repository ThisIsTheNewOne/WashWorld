import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../store/store';
// import { logout, setToken, signup } from '../store/userSlice';
// import * as SecureStore from 'expo-secure-store';
import { RootStackParamList } from "./_layout";
import CustomTextInput from "@/components/IntroScreens/Input";
import { validatePassword } from "@/components/IntroScreens/ValidatePassword";

type Props = NativeStackScreenProps<RootStackParamList>;

const SignupScreen = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [licensePlateError, setLicensePlateError] = useState<string | null>(
    null
  );
  // const dispatch = useDispatch<AppDispatch>();

  const handleSignup = () => {

    
    // dispatch(signup({username: username, password: password}))
    console.log(
        "Signing up with username:",
        username,
        "and password:",
        password,
        "and plate:",
        licensePlate
      );

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
      // If there are errors, stop the signup process
      return;
    }

  };

  // useEffect(() => {
  //     async function load() {
  //         const token = await SecureStore.getItemAsync('token');
  //         console.log("read token from SecureStore", token);
  //         dispatch(setToken(token || ''))
  //     }
  //     load()
  // }, [])

  return (
    <View style={styles.container}>
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

      {/* {error && <Text style={styles.errorText}>{error}</Text>} */}

      <View style={[styles.buttonContainer, { backgroundColor: "#0CEF78" }]}>
        <Button title="Next" onPress={handleSignup} color="black" />
      </View>
      {/* <Text style={styles.loginText} onPress={() => props.navigation.navigate("AuthLogin")}>Go to Login</Text> */}
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
