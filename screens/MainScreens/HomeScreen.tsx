import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../MainNavigation";
import ClickableCard from "../../components/HomeScreen/ClickableCard";
import FeatureCard from "../../components/HomeScreen/FeatureCard";

interface HomeScreenProps
  extends NativeStackScreenProps<RootStackParamList, "HomeScreen"> {
  user: string | null;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ user, navigation }) => {
  const existingUser = user ? user : "Guest";

  const handleBalancePress = () => {
    // Navigate to the balance page
    navigation.navigate("InitialLoadingPage");
  };

  const handleRewardsPress = () => {
    // Navigate to the rewards page
    navigation.navigate("InitialLoadingPage");
  };

  return (
    <View style={styles.mainContainer}>
      {/* <Text>{existingUser}</Text> */}
      {/* <Text>Welcome to the Home Screen!</Text> */}

      <View style={styles.container}>
        <View style={styles.row}>
          <ClickableCard
            title="Balance"
            amount={0}
            amountType="kr."
            onPress={handleBalancePress}
          />
          <ClickableCard
            title="Wash Rewards"
            amount={10}
            amountType="points"
            onPress={handleRewardsPress}
          />
        </View>
      </View>

      <View>
        <Text style={styles.header}>Choose Washing </Text>

        <View style={styles.container2}>
          <View style={styles.row}>
            <FeatureCard
              title="Single"
              subtitle="Wash only one time at a great price"
              buttonText="Continue"
              onPress={() => {}}
            />

            <FeatureCard
              title="Membership"
              subtitle="Unlimited Car washes. Starts at 69kr./month"
              buttonText="Continue"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    color: "white",
  },
  container: {
    margin: 10,
  },
  container2: {
    margin: 15,
    marginRight: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    color: "white",
  },
});
