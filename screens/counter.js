import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Button from '../Navigator/Button';
import {useState} from 'react'




export default function Counter() {
    const [contador, setContador] = useState(0);

    function Aumentar(){
        setContador(contador+1);
    }
    function Diminuir(){
        setContador(contador-1);
    }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{ uri: 'https://diariodorio.com/wp-content/uploads/2020/07/daleopizzaria_20200710_144435_0-696x463.jpg' }}
      >
        <View style={styles.textCont}>
          <Text style={styles.title}>Contador</Text>
          <Button
          title='+'
          color={'#FA8072'}
          />
          <Button
          title='-'
          color={''}
          />

          
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
