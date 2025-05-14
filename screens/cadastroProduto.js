import { View, Text, StyleSheet,Button , TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../controller.js';
import { useState } from 'react';
import { collection } from 'firebase/firestore'



export default function AddProduct({}) {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");

  const CadastrarProduct = async () => {
    try{
        await addDoc(collection(bank, 'produtos'),{
            nome,
            valor: parseFloat(valor),
            imagem
        });

    setNome('');
    setValor('');
    setImagem('');
    }
    catch(error) {
        console.log('erro em cadastrar produto', error.message);
      }
      
    }
    
  
 
 
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{ uri: 'https://diariodorio.com/wp-content/uploads/2020/07/daleopizzaria_20200710_144435_0-696x463.jpg' }}
      >

        <View style={styles.formularioContainer}>
          <Text style={styles.title}>Login</Text>
          <AntDesign name="login" size={30} color="white" />

          <MaterialIcons name="home" size={30} color="white" />

          <TextInput
            style={styles.entrada}
            placeholder="nome"
            placeholderTextColor="#000"
         
          />
          <TextInput
            style={styles.entrada}
            placeholder="valor"
            placeholderTextColor="#000"
            value={email}
            onChangeText={setEmail}

          />

          <TextInput
            style={styles.entrada}
            placeholder="imagem"
            placeholderTextColor="#000"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry = {true}
          />
          </View>

          <Button 
          title="Entrar"
          width="100px"
          color={'#FF0000'}
          onPress={VerificarUser}
          />

          <TouchableOpacity onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.textCadastro}>Cadastre-se</Text>
          </TouchableOpacity>

        
          <Text style={styles.telefone}>
            Para mais informações, nos contate. WhatsApp: 11 1234-5678
          </Text>
        
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
  textCadastro:{
    fontSize: 25,
    color: '#FF0000'
  }
});
