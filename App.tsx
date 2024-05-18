import { store } from './store/store';
import { Provider } from 'react-redux';
import MainNavigation from './screens/MainNavigation';
// import { useFonts } from "expo-font";
// import { useEffect } from "react";
// import SignupScreen from "./screens/SignupScreen";
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export default function App() {
  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  //   GilroyRegular: require("../assets/fonts/Gilroy-Regular.otf"),
  //   GilroyMedium: require("../assets/fonts/Gilroy-Medium.otf"),
  //   GilroyBold: require("../assets/fonts/Gilroy-Bold.otf"),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
      <Provider store={store}>
        {/* <QueryClientProvider client={queryClient}> */}
          <MainNavigation />  
        {/* </QueryClientProvider> */}
    </Provider>
  );
}


