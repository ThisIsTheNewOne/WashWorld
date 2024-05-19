import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/MainNavigation" 


interface StoresScreenProps
  extends NativeStackScreenProps<RootStackParamList> {
}

const RewardsScreen: React.FC<StoresScreenProps> = ({  navigation }) => {


  return (
    <View>
      {/* <Text>{existingUser}</Text> */}
      <Text>Welcome to the Rewards!</Text>

    </View>
  );
};

export default RewardsScreen;
