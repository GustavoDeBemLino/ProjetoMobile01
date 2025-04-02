import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { NavigationContainer } from '@react-navigation/native'


import Login from './screens/login.js'
import Home from './screens/home.js'
import Feed from '.screens/feed.js'

export default function Draw() {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login}/> 
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Feed" component={Feed}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}