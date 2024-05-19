import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../MainNavigation";
import { AvatarPicture } from "./AvatarPicture";
import { ProfileButton } from "./ProfileButton";
import { AppVersion } from "./AppVersion";
import { SignInScreen } from "./ProfileModals/SignInScreen";
import { NotificationsScreen } from "./ProfileModals/NotificationsScreen";
import { MembershipScreen } from "./ProfileModals/MembershipScreen";

interface ProfileScreenProps
  extends NativeStackScreenProps<RootStackParamList> {
  user: string | null;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, user }) => {
  const currentUser = user ? user : "Guest";
  const [signInModalVisible, setSignInModalVisible] = useState(false);
  const [notificationsModalVisible, setNotificationsModalVisible] =
    useState(false);
  const [membershipModalVisible, setMembershipModalVisible] = useState(false);

  const handleSignIn = () => {
    setSignInModalVisible(true);
  };

  const handleNotification = () => {
    setNotificationsModalVisible(true);
  };

  const handleMembership = () => {
    setMembershipModalVisible(true);
  };

  const buttonsData = [
    {
      title: "Sign in & security",
      onPress: handleSignIn,
    },
    {
      title: "Notifications",
      onPress: handleNotification,
    },
    {
      title: "Membership",
      onPress: handleMembership,
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Text>Profile</Text>

      <>
        <AvatarPicture user={currentUser} />
        <Text style={styles.userName}>{currentUser}</Text>
        <FlatList
          data={buttonsData}
          renderItem={({ item, index }) => (
            <ProfileButton
              key={index}
              title={item.title}
              onPress={item.onPress}
            />
          )}
        />
        <Modal
          visible={signInModalVisible}
          onRequestClose={() => setSignInModalVisible(false)}
        >
          <SignInScreen 
          title= "Sign in & security"
          onPress={setSignInModalVisible}/>
        </Modal>
        <Modal
          visible={notificationsModalVisible}
          onRequestClose={() => setNotificationsModalVisible(false)}
        >
          <NotificationsScreen />
          <Button
            title="Close"
            onPress={() => setNotificationsModalVisible(false)}
          />
        </Modal>
        <Modal
          visible={membershipModalVisible}
          onRequestClose={() => setMembershipModalVisible(false)}
        >
          <MembershipScreen />
          <Button
            title="Close"
            onPress={() => setMembershipModalVisible(false)}
          />
        </Modal>
        <AppVersion />
      </>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    position: "relative",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  initialsContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  initialsText: {
    fontSize: 36,
    color: "white",
  },
  cameraButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
  },
  cameraText: {
    fontSize: 18,
  },
  userName: {
    margin: 10,
    marginBottom: 20,
    color: "white",
  },
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
});
