import { View, Text, StyleSheet,Button , TextInput, ImageBackground } from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{ uri: 'https://diariodorio.com/wp-content/uploads/2020/07/daleopizzaria_20200710_144435_0-696x463.jpg' }}
      >
        <View style={styles.formularioContainer}>
          <Text style={styles.title}>Cadastre-se</Text>

          <TextInput
            style={styles.entrada}
            placeholder="Nome"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.entrada}
            placeholder="Email"
            placeholderTextColor="#000"
          />
          <TextInput
            style={styles.entrada}
            placeholder="Senha"
            placeholderTextColor="#000"
          />
          <Button 
          
          width="100px"
          color={'#FF0000'}
          title="Login"
          onPress={() => navigation.navigate('Home')}
          />

        
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
  formularioContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  entrada: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff', 
    borderRadius: 5,
    fontSize: 16,
    color: '#000',
  },
  telefone: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
});
