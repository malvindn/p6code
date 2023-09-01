import React,{Component} from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./src/screens/HomePage";
import ScanPage from "./src/screens/ScanPage";

const Stack = createStackNavigator();

const App= () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homepage' screenOptions={{ headerShown:false }}>
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="ScanPage" component={ScanPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;