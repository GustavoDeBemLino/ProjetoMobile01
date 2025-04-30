import {View, StyleSheet, Text, FlatList  } from 'react-native'
import {useState} from 'react'
import Cards from '../components/card'

export default function Product(){
    const [products, setProdutos] = useState([
        {id:1, nome:'bala', valor:2, imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_673972-MLB52142730746_102022-F.jpg"},
        {id:2, nome:'coca-cola', valor:15.1, imagem: "https://th.bing.com/th/id/OIP.RY1iu8DUkiaAXwcds2Bj9wDKE1?rs=1&pid=ImgDetMain"},
        {id:3, nome:'acai', valor:27.99, imagem: "https://th.bing.com/th/id/OIP.REzYpQDscs50-jKWaMNpuQHaHa?rs=1&pid=ImgDetMain"},
    ])
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
        color:"#412"
    },


})

