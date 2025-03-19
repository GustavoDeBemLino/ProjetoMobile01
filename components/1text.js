import {View,Text, StyleSheet, Image} from 'react-native'

export default function Pagina(){
    return(
    <View style={styles.inicio}>
        <Text style={styles.textin}> Tutorial da vida boa!</Text>

        <View style={styles.linha1}>   
            <Image style={styles.img} source={{uri:'https://start.youse.com.br/wp-content/uploads/2020/08/GettyImages-1036204436-1-min-scaled.jpg'}}/>
            <Image style={styles.img2} source={{uri:'https://th.bing.com/th/id/OIP.kbEOG32EUMEtdAu_fvyHQgHaJC?rs=1&pid=ImgDetMain'}}/>
         </View>

        <View style={styles.linha2}>
            <Text style={styles.textin2}>epa</Text>
        </View>
    
        <View style={styles.linha3}>
            <Image style={styles.img} source={{uri:'https://th.bing.com/th/id/R.d059c6fb97ad0bac4070b71e01e2c4ad?rik=Slqo0ops6Uh8vg&riu=http%3a%2f%2fimages7.memedroid.com%2fimages%2fUPLOADED338%2f6363612892aef.jpeg&ehk=gSxxcXt6XtFHdqA%2f3MXKJd2YeQACgy3WDiFOReYEhp4%3d&risl=&pid=ImgRaw&r=0'}}/>
        
            <Image style={styles.img2} source={{uri:'https://www.ilikemedia.be/wp-content/uploads/2021/11/memes-sociale-media.png'}}/>

        </View>

        
    
       
        <View style={styles.linha4}>
            <Text style={styles.textin3}>Olelele</Text>          
        </View>

    </View>

    )
}

const styles = StyleSheet.create({
    inicio: {
        justifyContent:"space-around",
        flex:1,
        backgroundColor: '#345',  

    },
    textin: {
        fontSize: 30,
    },
    linha1: {
        alignContent:"center",
        flexDirection:"row",
        gap:60
    },
    img: {
        alignSelf:"baseline",
        width: 150,
        height: 150,
    },
    img2: {
        alignSelf:"flex-end",
        width:150,
        height:150,

    },
    linha2:{
        alignItems: 'flex-end',
    },

    textin2:{
        fontSize:30,
    },

    linha3:{
        alignContent:"center",
        flexDirection:"row",
        gap:60
   
    },
    linha4:{
        alignItems:"center",

    },
    textin3:{
        fontSize:30,    
    }

  
})

  