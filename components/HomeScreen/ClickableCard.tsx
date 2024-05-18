import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface ClickableCardInterface {
    title: string,
    amount: number,
    amountType:string
    onPress: any,
}

const ClickableCard = (props: ClickableCardInterface) => {
  const { title, amount,amountType, onPress } = props
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}{" "}{amountType}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
  card: {
    // maxWidth: 190,
    width: 175,
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: '#0DCC70',
    color: 'white',
    padding: 15,
    paddingLeft: 10,
    // borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "white",
  },
  amount: {
    fontSize: 16,
    color: "white",
  },
});

export default ClickableCard;