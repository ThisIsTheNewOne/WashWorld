import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ClickableCard from "../../components/HomeScreen/ClickableCard";
import FeatureCard from "../../components/HomeScreen/FeatureCard";
import HelpCard from "../../screens/MainScreens/HelpCard"
import { RootStackParamList } from "../MainNavigation";
// import Icon1 from "../../assets/svg/HelpIcon1.svg";
// import Icon2 from "../../assets/svg/HelpIcon2.svg";
// import Icon3 from "../../assets/svg/HelpIcon3.svg";


interface HomeScreenProps
  extends NativeStackScreenProps<RootStackParamList, "HomeScreen"> {
  user: string | null;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ user, navigation }) => {
  const existingUser = user ? user : "Guest";

  const items = [
    { img: "../../assets/svg/HelpIcon1.svg", description: "Create membership" },
    { img: "../../assets/svg/HelpIcon1.svg", description: "Number plate recognition" },
    { img: "../../assets/svg/HelpIcon1.svg", description: "Stay in the car" },
  ];

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

      <View style={styles.container2}>
        <Text style={styles.header}>Choose Washing </Text>
        <View>
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

        <View style={styles.container}>
          <Text style={styles.header}>Need Help?</Text>
          <HelpCard
            title="UNLIMITED CAR WASHES"
            subtitle="It's that easy"
            items={items}
            buttonText="Find More"
            onPress={() => {}}
          />
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
    marginBottom: 20,
  },
  container2: {
    margin: 15,
    marginRight: 15,
    marginBottom: 20,
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
