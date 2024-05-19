import { Text, View, Button } from "react-native";
import { styles } from "./modal.style";

interface ModalProps {
    title: string
    onPress: any
}

export const SignInScreen = (props: ModalProps) => {
  const { title, onPress } = props

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.userName}>{title}</Text>

      <Button title="Close" onPress={() => onPress(false)} />
    </View>
  );
};
