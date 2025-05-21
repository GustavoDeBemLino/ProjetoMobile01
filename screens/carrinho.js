import { View, Text, StyleSheet, Image, FlatList} from "react-native";
import {useCarrinho} from '../components/providerCart';


export default function Carrinho(){
    const {carrinho} = useCarrinho();

    return(
        <View style={styles.container}>
            <Text> Carrinho </Text>
            <FlatList
            data={carrinho}
            renderItem={({item}) =>(
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: item.imagem}}/>
                <Text style={styles.txtprod}>{item.nome}</Text>
                <Text style={styles.txtprod}>R$ {item.valor}</Text>
            </View>
            )}
            />
          
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
      
    },
    card:{
        padding:10,
        margin:10,
        backgroundColor: '#FF0000' ,
        borderRadius:8,
        alignItems: 'center'
    },
    image: {
        width:100,
        height:100,
        borderRadius:5
    },
    txtprod:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },

    }
);

