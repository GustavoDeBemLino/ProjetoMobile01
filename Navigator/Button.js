import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavigationContainer } from '@react-navigation/native'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Login from './screens/login.js'
import Home from './screens/home.js'


export default function Button() {
  const Button = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Button.Navigator
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor:'#FF0000',
        tabBarActiveBackgroundColor:'#997722',
        tabBarInactiveBackgroundColor:'#220000',
        tabBarInactiveTintColor:'#000',
        headerStyle:{
          backgroundColor:"#FF0000"
        },
        headerTintColor:'#000',
        
      }}
      >
        <Button.Screen name="Login" component={Login}
         options={{
          tabBarIcon: () =>(
            <MaterialIcons name="login" size={24} color="black" />
          )
      }}
        /> 
        <Button.Screen name="Home" component={Home}
        options={{
          tabBarIcon: () =>(
              <MaterialIcons name="home" size={30}></MaterialIcons>
          )
      }}
        />
      </Button.Navigator>
    </NavigationContainer>
  );