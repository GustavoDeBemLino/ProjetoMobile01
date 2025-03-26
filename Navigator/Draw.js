import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { NavigationContainer } from '@react-navigation/native'


import Login from './screens/login.js'
import Home from './screens/home.js'


export default function Draw() {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login}/> 
        <Drawer.Screen name="Home" component={Home}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}