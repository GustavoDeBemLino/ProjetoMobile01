import {View, StyleSheet, Text, FlatList  } from 'react-native';
import {useState, useEffect} from 'react';
import Cards from '../components/card';
import { bank } from '../controller';
import {collection, getDocs } from 'firebase/firestore';

export default function Product(){
    const [products, setProdutos] = useState([

    ])
    useEffect(() => {
        async function carregarProdutos(){
            try {
                const querySnapshot = await getDocs(collection(bank, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({ id:doc.id, ...doc.data()});
                
                });
                setProdutos(lista);

            }
            catch(error){
                console.log("Erro ao buscar produto",error);
            }
        }
        carregarProdutos();
    }, []);
    return(
    <View style={styles.container}>
        
        <Text style={styles.text}>Produtos</Text>
        <FlatList          
        data = {products}
        renderItem={({item}) => (
            <Cards
            nome={item.nome}
            valor={item.valor}
            imagem={item.imagem}
            />
        )}
        keyExtractor={item => item.id}
        />
    </View>
    )
    
}
const styles = StyleSheet.create({
    container:{
        flex:2,
        
    },
    
    text:{
        fontsize:'30',
        color:"#FF0000"
    },


})

