import { View, Text, StyleSheet, Image, FlatList} from "react-native";
import {useCarrinho} from '../components/providerCart';
import Cards from '../components/card'

export default function Carrinho(){
    const {carrinho, removerProduto} = useCarrinho();
    return(
        <View style={styles.container}>
            <Text> Carrinho </Text>
            <FlatList
            data={carrinho}
            renderItem={({item, index}) =>(
             <Cards
                    nome={item.nome}
                    valor={item.valor}
                    imagem={item.imagem}
                    remover={() => removerProduto(index)}
                        />
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

