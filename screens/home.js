import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={{ uri: 'https://diariodorio.com/wp-content/uploads/2020/07/daleopizzaria_20200710_144435_0-696x463.jpg' }} 
      >
        <Text style={styles.title}>Bem-vindo à nossa pizzaria</Text>

        
        <View style={styles.row}>
          <Image 
            style={styles.img} 
            source={{ uri: 'https://th.bing.com/th/id/OIP.Xy_bk0TKkgkb-DxYH43gPQHaEo?rs=1&pid=ImgDetMain' }} 
          />
          <Image 
            style={styles.img} 
            source={{ uri: 'https://th.bing.com/th/id/OIP.vwyHEgrtywA-1WfG5IS_ogHaE8?rs=1&pid=ImgDetMain' }} 
          />
        </View>

        <Text style={styles.subtitle}>Aqui temos a maior variedade de pizzas</Text>

     
        <View style={styles.row}>
          <Image 
            style={styles.img} 
            source={{ uri: 'https://th.bing.com/th/id/OIP.CUthFRDZaiVVaC_lsS3NYwHaEK?rs=1&pid=ImgDetMain' }} 
          />
          <Image 
            style={styles.img} 
            source={{ uri: 'https://th.bing.com/th/id/R.57510f4e3328ebc82b2eab0c57e6c3ea?rik=tJDy1NKHXXQbmQ&riu=http%3a%2f%2fwww.escueladepizzas.org.mx%2fwp-content%2fuploads%2f2016%2f07%2fVariedades-de-pizza.png&ehk=dERAgsbueTFrPZtAwGIbl4bwnPCghtEoMKv4hW8zHcs%3d&risl=1&pid=ImgRaw&r=0' }} 
          />
        </View>

        <Text style={styles.contactText}>
          Para mais informações, nos contate. WhatsApp: 11 1234-5678
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 15,
    flexWrap: 'wrap',
    gap: 20,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
    width: '80%',
  },
  contactText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
    width: '80%',
  },
});