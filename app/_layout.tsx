

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index';
import Test from './(tabs)/test';


interface PropsIndex {
  test: string
}

export default function RootLayout() {

  const Stack = createNativeStackNavigator();
  const test = "Will this work ??"

  return (
    <Stack.Navigator initialRouteName="index">
        {/* <Stack.Screen name="index" component={Index} options={{ title: 'HAHA' }}> */}
        <Stack.Screen name="index">
          {(props: any) => <Index {...props} />}
        </Stack.Screen>
        <Stack.Screen name="wayyyy" component={Test} />
    </Stack.Navigator>

  );
}
