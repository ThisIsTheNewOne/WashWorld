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
import UserIcon from "../../assets/svg/User";
import Notification from "../../assets/svg/Notification";
import { User } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProfilePicture } from "../../store/profilePhotoSlice";
import { AppDispatch, RootState } from "../../store/store";

interface ProfileScreenProps
  extends NativeStackScreenProps<RootStackParamList> {
  user: string | null;
  fullUser: User | null;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({
  navigation,
  user,
  fullUser,
}) => {
  const currentUser = user ? user : "Guest";
  const [signInModalVisible, setSignInModalVisible] = useState(false);
  const [notificationsModalVisible, setNotificationsModalVisible] =
    useState(false);
  const [membershipModalVisible, setMembershipModalVisible] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

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
      icon: UserIcon,
    },
    {
      title: "Notifications",
      onPress: handleNotification,
      icon: Notification,
    },
    {
      title: "Membership",
      onPress: handleMembership,
      icon: Notification,
    },
  ];


  useEffect(() => {
    if (fullUser !== null) {
        const userId = String(fullUser.id); 
        console.log("this is it bro", userId)
        dispatch(getProfilePicture(userId));
    }
}, [dispatch, fullUser]);

  return (
    <View style={styles.mainContainer}>
      <Text>Profile</Text>

      <>
        <AvatarPicture user={currentUser} fullUser={fullUser} />
        <Text style={styles.userName}>{currentUser}</Text>
        <FlatList
          data={buttonsData}
          renderItem={({ item, index }) => (
            <ProfileButton
              key={index}
              title={item.title}
              icon={item.icon}
              onPress={item.onPress}
            />
          )}
        />
        <Modal
          visible={signInModalVisible}
          onRequestClose={() => setSignInModalVisible(false)}
        >
          <SignInScreen
            title="Sign in & security"
            subTitle="Account Access"
            sections={[
              {
                title: "Email address",
                content: "For now you don't have any email address",
              },
              {
                title: "Change Password",
                content: "For now you don't have any email address",
              },
              {
                title: "Phone Number",
                content: "For now you don't have any email address",
              },
              {
                title: "Devices that remember your password",
                content: "For now you don't have any email address",
              },
              {
                title: "Two-step verification",
                content: "For now you don't have any email address",
              },
            ]}
            onPress={setSignInModalVisible}
          />
        </Modal>

        <Modal
          visible={notificationsModalVisible}
          onRequestClose={() => setNotificationsModalVisible(false)}
        >
          <SignInScreen
            title="Notifications"
            sections={[
              {
                title: "Duration of a wash",
                content: "For now you don't have any email address",
              },
              {
                title: "Car wash reminder ",
                content: "For now you don't have any email address",
              },
              {
                title: "Availability ",
                content: "For now you don't have any email address",
              },
              {
                title: "Special offers",
                content: "For now you don't have any email address",
              },
            ]}
            onPress={setNotificationsModalVisible}
          />
        </Modal>

        <Modal
          visible={membershipModalVisible}
          onRequestClose={() => setMembershipModalVisible(false)}
        >
          <SignInScreen
            title="Notifications"
            sections={[
              {
                title: "Basic",
                content: "For now you don't have any email address",
              },
              {
                title: "Gold",
                content: "For now you don't have any email address",
              },
              {
                title: "Premium",
                content: "For now you don't have any email address",
              },
              {
                title: "Premium Plus",
                content: "For now you don't have any email address",
              },
              {
                title: "All Inclusive",
                content: "For now you don't have any email address",
              },
            ]}
            onPress={setMembershipModalVisible}
          />
        </Modal>

        {/* <Modal
          visible={notificationsModalVisible}
          onRequestClose={() => setNotificationsModalVisible(false)}
        >
          <NotificationsScreen />
          <Button
            title="Close"
            onPress={() => setNotificationsModalVisible(false)}
          />
        </Modal> */}
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
