
import {Text, View,  StyleSheet, Image }from 'react-native';

export function Profile(){
    return(
        <View style={styles.profile}>
            <Text>Oi pessoal!!  </Text>
            <Image style={styles.img} source={{uri:'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif'}}></Image>
         </View>
    )
}
export function Favorites(){
    return(
        <View style={styles.favorites}>
            <Text>Favoritos</Text>
            <Image style={styles.img} source={require('../assets/gifpoggers.jpg')}></Image>
        </View>
    )
}

export default function Gallery() {
    return(
        <View style={styles.container}>
            <Text>Gallery</Text>
            <Profile/> 
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff00ff',
      justifyContent: 'center',
      alignItems: 'center',
     
    },
    profile:{
        justifyContent:'space-around',
        alignItems:"center",
        
        flex: 1,
        backgroundColor:"red",
    },
    favorites:{
        justifyContent:"space-around",
        alignItems:"center",
        flex: 1,
        backgroundColor:"blue",

    },
    img: {
        
        width: '200px',
        height: '200px',
    }
  }
);
  
