import { View, Text, StyleSheet, ImageBackground, Button,TextInput, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {BottomTabs} from '../Navigator/BottomTabs.js';
import {useState} from 'react'




export default function Counter() {
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    function Aumentar(){
        setContador(contador+1);
    }
    function Diminuir(){
      if(contador>0){
        setContador(contador-1);
        

        }
    }

  return (
    
    <View style={styles.container}>
      <ImageBackground
            style={styles.background}
            source={{ uri: 'https://diariodorio.com/wp-content/uploads/2020/07/daleopizzaria_20200710_144435_0-696x463.jpg' }}
          >
    <Text style={styles.text}>Contador:</Text>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: "80%"}}>
        <View style={{flex: 1, marginHorizontal: 5, marginVertical: 20}}>
            <Button title="+" color="#800" onPress={Aumentar} />
        </View>
        <View style={{flex: 1, marginHorizontal: 5, marginVertical: 20}}>
            <Button title="-" color="#801" onPress={Diminuir} style={{fontSize: 20}}/>
        </View>
    </View>
    <View>
        <Text style={{fontSize: 50, margin: 30, borderWidth: 2, borderRadius: 15, paddingVertical: 5, paddingHorizontal: 20, textAlign: 'center'}}>{contador}</Text>
    </View>
    <View style={styles.TextInp}>
      <TextInput
        placeholder='Nome'
        value={nome}
      />
      <TextInput
        placeholder='Email'
        value={email}
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
//Colocar Touch