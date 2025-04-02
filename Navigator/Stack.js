import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './screens/login.js'
import Home from './screens/home.js'
import Feed from './screens/feed.js'


export default function Stack() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/> 
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Feed" component={Feed}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}