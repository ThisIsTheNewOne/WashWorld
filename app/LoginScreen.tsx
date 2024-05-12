import { RootStackParamList } from "@/app/_layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet, Image } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList>;

const LoginScreen = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // dispatch(login({username: username, password: password}))
    console.log("THis is a login");
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
        <View>
            <Text style={styles.label}>Username</Text>
            <TextInput
            placeholder="Username"
            value={username}
            autoCapitalize="none"
            onChangeText={setUsername}
            style={styles.input}
            />
        </View>
        
        
        <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={[styles.input, { color: '#000000', backgroundColor: '#cccccc' }]} 
            />
        </View>
      
      </View>

      <View style={styles.conatiner}></View>
      <Button title="Login" onPress={handleLogin} />
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
  input: {
    width: 200,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    color: '#000000', 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: '#cccccc', 
  },
  label: {
    marginBottom: 5,
    color: '#ffffff', 
    fontWeight: 'bold', 
  },
});
