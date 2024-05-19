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
import { Button, View, Text } from "react-native";
import { logout, selectUser } from "../store/userSlice";
import HomeScreen from "./MainScreens/HomeScreen";
// import Profile from "../screens/ProfileScreens/ProfileScreen"
import React from "react";
import StoresScreen from "./StoresScreen";
import RewardsScreen from "./RewardsScreen";
import ProfileScreen from "./ProfileScreens/ProfileScreen";


export type RootStackParamList = {
  InitialLoadingPage: undefined;
  AuthenticationOptions: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  HomeScreen: { user: string | null };
  Rewards: undefined;
  StoresScreen: undefined;
  GuestHome: { user: string | null };
  Profile: { user: string | null };
  notFound: any;
  // index: { initialRouteName: string };
};

export interface Props {
  navigation: NavigationProp<any, any>;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const EntryStackNavigator = ({ user }: { user: string | null }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
        {(props) => <HomeScreen {...props} user={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default function MainNavigation() {
  // const colorScheme = useColorScheme();
  const dispatch = useDispatch<AppDispatch>();
  const isSignedIn = useSelector((state: RootState) => state.users.token);
  const testUser = useSelector((state: RootState) => state.users.user);
  const testUserString: any | null = testUser ? testUser : null;

  console.log("This is the user in the end", testUser);

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <>
          <Tab.Navigator
            screenOptions={({ navigation }) => ({
              headerRight: () => (
                <>
                  <Button title="Logout" onPress={() => dispatch(logout())} />
                  <View>{testUserString !== null && <Text>{testUserString}</Text>}</View>
                </>
              ),
            })}
          >
            <Tab.Screen name="Home">
              {(props) => <EntryStackNavigator {...props} user={testUserString} />}
            </Tab.Screen>
            <Tab.Screen name="Stores" component={StoresScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Rewards" component={RewardsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" >
              {(props) => <ProfileScreen {...props} user={testUserString} />}
            </Tab.Screen>
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
              <Stack.Screen name="GuestHome">
                {(props) => <EntryStackNavigator {...props} user={null} />}
              </Stack.Screen>
            </Stack.Navigator>
          </>
        </>
      )}
    </NavigationContainer>
  );
}
