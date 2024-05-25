import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import SvgUri from 'react-native-svg-uri';

interface ClickableCardInterface {
  title: string;
  subtitle: string;
  items: HelpCardItems[];
  buttonText: any;
  onPress: any;
}

interface HelpCardItems {
  img: any;
  description: string;
}

const HelpCard = (props: ClickableCardInterface) => {
  const { title, subtitle, items, buttonText, onPress } = props;

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      // Default navigation action
      //   navigation.navigate('FindMore'); // Replace 'FindMore' with the name of your destination screen
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
           <View key={index} style={styles.item}>
           {/* <SvgUri source={{ uri: item.img }} style={styles.itemImage} />  */}
           <Text style={styles.itemDescription}>{item.description}</Text>
         </View>
        ))}
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>{buttonText || "Find More"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    padding: 20,
    marginBottom: 10,
    borderWidth: 3,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#0DCC70",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
  itemImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  itemDescription: {
    textAlign: "center",
    color: "#0DCC70",
  },
  button: {
    width: 120,
    marginTop: 10,
    backgroundColor: "#0DCC70",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default HelpCard;
