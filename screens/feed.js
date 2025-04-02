import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Feed() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{ uri: 'https://diariodorio.com/wp-content/uploads/2020/07/daleopizzaria_20200710_144435_0-696x463.jpg' }}
      >
        <View style={styles.textCont}>
          <Text style={styles.title}>Feed</Text>
          

          <Text style={styles.text}>Bem-vindo a nossa pizzaria, irei acompanhá-los durante a experiência de nossa pizzaria.</Text>
          
          <Text style={styles.telefone}>
            Para mais informações, nos contate. WhatsApp: 11 1234-5678
          </Text>
        </View>
        
                 
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width: '100%',
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textCont: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(228, 81, 81, 0.75)', 
    fontSize:15,
    padding: 10,
    borderRadius: 10,
    width: '90%',
  },
  text:{
    fontSize:30,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
 
  telefone: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
});
