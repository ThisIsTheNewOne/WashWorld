import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/MainNavigation" 
import { Box } from "native-base";
import Entypo from '@expo/vector-icons/Entypo';


interface StoresScreenProps
  extends NativeStackScreenProps<RootStackParamList> {
}

const RewardsScreen: React.FC<StoresScreenProps> = ({  navigation }) => {


  return (
    <View>
      {/* <Text>{existingUser}</Text> */}
      <Text>Welcome to the Rewards!</Text>
      <Box>Hello world</Box>
      <Entypo name="chevron-with-circle-down" size={24} color="black" />
    </View>
  );
};

export default RewardsScreen;
