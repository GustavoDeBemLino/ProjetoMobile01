/* import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'


import Feed from './screens/feed.js'
import Login from './screens/login.js'
import Home from './screens/home.js'
import Counter from './screens/counter.js'

function BottomTabs(){
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
              <MaterialIcons name="count" size={30}/>
              )
            }} />
  
    
  </Bottom.Navigator>
)}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="home" component={BottomTabs}></Stack.Screen>
        <Stack.Screen name="counter" component={Counter}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


 */