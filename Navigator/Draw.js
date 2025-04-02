import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { NavigationContainer } from '@react-navigation/native'


import Login from './screens/login.js'
import Home from './screens/home.js'
import Feed from '.screens/feed.js'
import Counter from './screens/counter.js'


export default function Draw() {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login}/> 
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Feed" component={Feed}/>
        <Drawer.Screen name="Counter" component={Counter}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}