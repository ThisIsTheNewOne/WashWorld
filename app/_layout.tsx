import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./LoginScreen";
import Index from "./index";
import Test from "./(tabs)/test";
import InitialLoadingPage from "./InitialLoadingPage";

export type RootStackParamList = {
  InitialLoadingPage: undefined;
  LoginScreen: undefined;
  notFound: any;
  // index: { initialRouteName: string };
};

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const isSignedIn = true;

  return (
    <>
      {isSignedIn ? (
        <>
          <Stack.Navigator initialRouteName="InitialLoadingPage">
            {/* <Stack.Screen name="AuthSignup" component={SignupScreen} /> */}
            <Stack.Screen name="InitialLoadingPage" component={InitialLoadingPage}  options={{ headerShown: false }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'HAHA' }} />
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
  );
}
