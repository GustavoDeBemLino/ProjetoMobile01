import {View, StyleSheet, Text, Image} from 'react-native'


export default function Cards({nome, valor, imagem}){
    
    return(
          <View style={styles.card}>
            <View style={styles.contImg}>
                <Image style={styles.img} source={{uri:imagem}}/>
            </View>
            <View style={styles.contText}>
                <Text style={styles.name}>{nome}</Text>
                <Text style={styles.value}>{valor}</Text>
            </View>
                       
          </View>      
    )

} 
const styles = StyleSheet.create({
    card:{
        flex:2,
        padding:10,
        margin: 10,
        backgroundColor:"#f3f",
        borderRadius:8,
        alignItems: 'center'
    },
  
    contText:{
        flex:1,
    },
    name:{
        fontsize:'15',

    },
    value:{
        fontsize:"15",
    },
    img:{
        width:100,
        height:100,
        borderRadius:'8'
    }
    
   

})

