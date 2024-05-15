import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import Test from "./(tabs)/test";
import InitialLoadingPage from "./InitialLoadingPage";
import AuthenticationOptions from "./AuthenticationOptions";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import SignupScreen from "./SignupScreen";
import { Provider } from "react-redux";
import { store } from "@/store/store";
// import { AppDispatch } from '../store/store';
// import { useDispatch } from 'react-redux';

export type RootStackParamList = {
  InitialLoadingPage: undefined;
  AuthenticationOptions: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  notFound: any;
  // index: { initialRouteName: string };
};

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    GilroyRegular: require("../assets/fonts/Gilroy-Regular.otf"),
    GilroyMedium: require("../assets/fonts/Gilroy-Medium.otf"),
    GilroyBold: require("../assets/fonts/Gilroy-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const isSignedIn = true;
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Provider store={store}>
        <>
          {isSignedIn ? (
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
          ) : (
            <>
              {/* <Stack.Navigator initialRouteName="index">
              <Stack.Screen name="index" component={Index} options={{ title: 'HAHA' }} /> 
               <Stack.Screen name="index">
                {(props: any) => <Index {...props} />}
              </Stack.Screen>
              <Stack.Screen name="+not-found" component={Test} />
            </Stack.Navigator> */}
            </>
          )}
          <Stack.Screen name="notFound" component={Test} />
        </>
      </Provider>
    </>
  );
}
