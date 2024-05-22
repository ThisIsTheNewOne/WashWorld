import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomBar from "../../assets/svg/BottomBar";

interface AvatarPicture {
  title: string;
  onPress: any;
  icon: (props: {
    width?: number | undefined;
    height?: number | undefined;
  }) => React.JSX.Element;
}

export const ProfileButton = (props: AvatarPicture) => {
  const { title, onPress, icon: Icon } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.profileContainer}>
        <View style={styles.component}>
          <Icon width={20} height={20} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <BottomBar style={styles.bottomBar} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    margin: 10,
  },
  component: {
    paddingLeft: 30,
    display:"flex",
    flexDirection: "row",
    backgroundColor: "#666666",
    padding: 13,
  },
  title: {
    marginLeft: 15,
    fontSize: 20,
    color: "white",
    // backgroundColor: "#666666",
    // padding: 13,
  },
  bottomBar: {
    marginTop: 0,
  },
});
