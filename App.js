import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { ProvideCart } from './components/providerCart.js';

import Carrinho from './screens/carrinho.js';
import Product from './screens/produto.js'
import Feed from './screens/feed.js'
import Login from './screens/1login.js'
import Home from './screens/home.js'
import Counter from './screens/counter.js'
import Signin from './screens/signin.js';
import AddProduct from './screens/cadastroProduto.js';

function HomeTabs(){
  const Bottom = createBottomTabNavigator();
  return(
  <Bottom.Navigator
  screenOptions={{
    tabBarActiveTintColor:'#FF0000',
    tabBarActiveBackgroundColor:'#997722',
    tabBarInactiveBackgroundColor:'#220000',
    tabBarInactiveTintColor:'#Ffa500',
    headerStyle:{
      backgroundColor:"#FF0000"
    },
    headerTintColor:'#000',
    }}>

    <Bottom.Screen name='Product' component={Product}
    options={{
      tabBarIcon: () =>(
          <Ionicons name="product" size={30}></Ionicons>
      )
  }}
    />
    <Bottom.Screen name='CadastroProduct' component={AddProduct}
    
    />
    <Bottom.Screen name="Home" component={Home}
    options={{
      tabBarIcon: () =>(
          <MaterialIcons name="home" size={30}></MaterialIcons>
      )
  }}
  />
    <Bottom.Screen name="Feed" component={Feed}
      options={{
         tabBarIcon: () =>(
          <MaterialIcons name="feed" size={30}/>
         )
        }} />

    <Bottom.Screen name="counter" component={Counter}
        options={{
            tabBarIcon: () =>(
              <MaterialCommunityIcons name="counter" size={24} color="black" />
            )
          }} />
    <Bottom.Screen name="carrinho" component={Carrinho}
    options={{
      tabBarIcon: () =>(
        <MaterialCommunityIcons name="cart" size={24} color="black" />
      )
    }} 
    />
    
  </Bottom.Navigator>
)}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <ProvideCart>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name='Cadastro' component={Signin}/>
        <Stack.Screen name="HomeTabs" component={HomeTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ProvideCart>
  );
}


