import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./screens/Login";
import Detail from "./screens/Detail";
import Conferences from "./screens/Conferences";
import Map from "./screens/Map"
import Beer from "./components/Beer";
import Register from "./screens/Register";
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false }}/>
        <Stack.Screen name='Detail' component={Detail} options={{headerShown:false }}/>
        <Stack.Screen name='Beer' component={Beer} options={{headerShown:false }}/>
        <Stack.Screen name='Conferences' component={Conferences} options={{headerShown:false }}/>
        <Stack.Screen name='Map' component={Map} options={{headerShown:false }}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown:true, title: '',  headerStyle: {
            backgroundColor: '#DAF7A6'},headerTintColor: 'black' }}/>
      </Stack.Navigator>
    </NavigationContainer> 
  )
}

export default App;