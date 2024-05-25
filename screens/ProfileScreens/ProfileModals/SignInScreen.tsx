import { Text, View, Button, FlatList } from "react-native";
import { styles } from "./modal.style";
import { Collapsible } from "../../../components/Collapsible";
import { ThemedText } from "../../../components/ThemedText";

interface ModalProps {
  title: string;
  subTitle?: string;
  sections: { title: string; content: string }[];
  onPress: any;
}

export const SignInScreen = (props: ModalProps) => {
  const { title, subTitle, sections, onPress } = props;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.emptyTopSpace}></View>
      <View style={styles.mainHeader}>
        <Button title="Close" onPress={() => onPress(false)} />
        <Text style={styles.userName}>{title}</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.container} >
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        <FlatList
          data={sections}
          renderItem={({ item, index }) => (
            <Collapsible key={index} title={item.title}>
              <ThemedText>{item.content}</ThemedText>
            </Collapsible>
          )}
        />
      </View>
    </View>
  );
};
