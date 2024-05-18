import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ClickableFeatureCard {
    title: string,
    subtitle: string,
    buttonText:string
    onPress: any,
}


const FeatureCard = (props: ClickableFeatureCard) => {
    const { title, subtitle, buttonText, onPress } = props
  
    const handlePress = () => {
      if (onPress) {
        onPress();
      } else {
        // Default navigation action
        // navigation.navigate('Membership'); 
      }
    };
  
    return (
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>{buttonText || 'Continue'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 12,
      paddingRight: 0,
      backgroundColor: 'black',
      borderWidth: 3,
      borderColor: '#0DCC70',
      margin: 5,
      marginRight: 0,
      marginLeft: 0,
      width: 181,
      height: 170,
      display: "flex",
      flexDirection: "column"
    },
    title: {
      fontSize: 27,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#0DCC70',
    },
    subtitle: {
      fontSize: 15,
      marginBottom: 5,
      color: "white",
    },
    button: {
      width: 120,
      marginTop: 10,
      backgroundColor: '#0DCC70',
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
    },
  });
  
  export default FeatureCard;