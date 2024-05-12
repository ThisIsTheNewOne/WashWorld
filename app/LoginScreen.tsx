import { RootStackParamList } from "@/app/_layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useState } from "react";
import { View, TextInput, Button, AppState, Text } from 'react-native';

// type Props = NativeStackScreenProps<RootStackParamList>

const LoginScreen = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // dispatch(login({username: username, password: password}))
        console.log("THis is a login")
    };

    return (
        <View>
            {/* <Text>{token}</Text> */} 
            <TextInput
                placeholder="Username"
                value={username}
                autoCapitalize="none"
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            {/* <Button title="Go to Signup" onPress={() => props.navigation.navigate("AuthSignup")} /> */}
        </View>
    );
}

export default LoginScreen;
