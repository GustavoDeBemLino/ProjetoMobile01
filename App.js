import 'react-native-gesture-handler'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavigationContainer } from '@react-navigation/native'


import Login from './screens/login.js'
import Home from './screens/home.js'


export default function App() {
  const Botton = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Botton.Navigator>
        <Botton.Screen name="Login" component={Login}/> 
        <Botton.Screen name="Home" component={Home}/>
      </Botton.Navigator>
    </NavigationContainer>
  );
}



