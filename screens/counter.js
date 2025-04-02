import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomTabs from '../Navigator/BottomTabs.js';
import {useState} from 'react'




export default function Counter() {
    const [contador, setContador] = useState(0);

    function Aumentar(){
        setContador(contador+1);
    }
    function Diminuir(){
        setContador(contador-1);
        if(contador=0){

        }
    }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{ uri: 'https://diariodorio.com/wp-content/uploads/2020/07/daleopizzaria_20200710_144435_0-696x463.jpg' }}
      >
        <View style={styles.textCont}>
          <Text style={styles.title}>Contador de Pizzas Comidas</Text>
          
          <View style={styles.butons}>
          <Button
          title='+'
          color={'#FA8072'}
          />
          <Button style={styles.buton}
          
          title='-'
          color={'#rgb(197, 80, 41)'}
          />
          </View>

          
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
    backgroundColor: 'rgba(151, 97, 26, 0.75)', 
    fontSize:10,
    padding: 10,
    borderRadius: 10,
    width: '90%',
  },
  text:{
    fontSize:30,
  },
  title: {
    fontSize: 20,
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
  buton:{
    width:50,
  },
  butons: {
    flexDirection:'row',
  }
});
