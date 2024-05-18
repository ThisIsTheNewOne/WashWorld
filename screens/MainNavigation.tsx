import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./LoginScreen";
import InitialLoadingPage from "./InitialLoadingPage";
import AuthenticationOptions from "./AuthenticationOptions";
// import { useFonts } from "expo-font";
// import { useEffect } from "react";
// import { SplashScreen } from "expo-router";
import SignupScreen from "./SignupScreen";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { Button } from 'react-native';
import { logout } from '../store/userSlice';
import HomeScreen from "./MainScreens/HomeScreen";


export type RootStackParamList = {
  InitialLoadingPage: undefined;
  AuthenticationOptions: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  HomeScreen: undefined;
  notFound: any;
  // index: { initialRouteName: string };
};

export interface Props {
  navigation: NavigationProp<any, any>;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const EntryStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="EntryEdit" component={EntryEditScreen} />
        <Stack.Screen name="EntryDelete" component={EntryDeleteScreen} /> */}
      </Stack.Navigator>
  )
}


export default function MainNavigation() {
  // const colorScheme = useColorScheme();
  const dispatch = useDispatch<AppDispatch>();
  const isSignedIn = useSelector((state: RootState) => state.users.token);
 

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <>
          <Tab.Navigator
            screenOptions={({ navigation }) => ({
              headerRight: () => (
                <Button title="Logout" onPress={() => dispatch(logout())} />
              ),
            })}
          >
            <Tab.Screen name="Home" component={EntryStackNavigator} />
            {/* <Tab.Screen name="Settings" component={Categories} /> */}
          </Tab.Navigator>
        </>
      ) : (
        <>
          <>
            <Stack.Navigator initialRouteName="AuthenticationOptions">
              <Stack.Screen
                name="InitialLoadingPage"
                component={InitialLoadingPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AuthenticationOptions"
                component={AuthenticationOptions}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="SignupScreen" component={SignupScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
          </>
        </>
      )}
      {/* <Stack.Screen name="notFound" component={Test} /> */}
    </NavigationContainer>
  );
}
